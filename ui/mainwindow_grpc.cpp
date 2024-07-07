#include "./ui_mainwindow.h"
#include "mainwindow.h"

#include "db/Database.hpp"
#include "db/ConfigBuilder.hpp"
#include "db/traffic/TrafficLooper.hpp"
#include "rpc/gRPC.h"
#include "ui/widget/MessageBoxTimer.h"

#include <QTimer>
#include <QThread>
#include <QInputDialog>
#include <QPushButton>
#include <QDesktopServices>
#include <QMessageBox>
#include <QDialogButtonBox>

// ext core

std::list<std::shared_ptr<NekoGui_sys::ExternalProcess>> CreateExtCFromExtR(const std::list<std::shared_ptr<NekoGui_fmt::ExternalBuildResult>> &extRs, bool start) {
    // plz run and start in same thread
    std::list<std::shared_ptr<NekoGui_sys::ExternalProcess>> l;
    for (const auto &extR: extRs) {
        std::shared_ptr<NekoGui_sys::ExternalProcess> extC(new NekoGui_sys::ExternalProcess());
        extC->tag = extR->tag;
        extC->program = extR->program;
        extC->arguments = extR->arguments;
        extC->env = extR->env;
        l.emplace_back(extC);
        //
        if (start) extC->Start();
    }
    return l;
}

// grpc

using namespace NekoGui_rpc;

void MainWindow::setup_grpc() {
    // Setup Connection
    defaultClient = new Client(
        [=](const QString &errStr) {
            MW_show_log("[Error] gRPC: " + errStr);
        },
        "127.0.0.1:" + Int2String(NekoGui::dataStore->core_port), NekoGui::dataStore->core_token);

    // Looper
    runOnNewThread([=] { NekoGui_traffic::trafficLooper->Loop(); });
}

void MainWindow::RunSpeedTest(const std::shared_ptr<NekoGui::ProxyEntity>& ent, int mode, const QStringList& full_test_flags) {
    if (stopSpeedtest.load()) {
        MW_show_log("Profile test aborted");
        return;
    }

    std::list<std::shared_ptr<NekoGui_sys::ExternalProcess>> extCs;
    QSemaphore extSem;

    libcore::TestReq req;
    req.set_mode((libcore::TestMode) mode);
    req.set_timeout(3000);
    req.set_url(NekoGui::dataStore->test_latency_url.toStdString());
    if (mode == libcore::TestMode::UrlTest || mode == libcore::FullTest) {
        auto c = BuildConfig(ent, true, false);
        if (!c->error.isEmpty()) {
            ent->full_test_report = c->error;
            ent->Save();
            auto profileId = ent->id;
            runOnUiThread([this, profileId] {
                refresh_proxy_list(profileId);
            });
        }
        //
        if (!c->extRs.empty()) {
            runOnUiThread(
                [&] {
                    extCs = CreateExtCFromExtR(c->extRs, true);
                    QThread::msleep(500);
                    extSem.release();
                },
                DS_cores);
            extSem.acquire();
        }
        //
        auto config = new libcore::LoadConfigReq;
        config->set_core_config(QJsonObject2QString(c->coreConfig, true).toStdString());
        req.set_allocated_config(config);
        req.set_in_address(ent->bean->serverAddress.toStdString());

        req.set_full_latency(full_test_flags.contains("1"));
        req.set_full_udp_latency(full_test_flags.contains("2"));
        req.set_full_speed(full_test_flags.contains("3"));
        req.set_full_in_out(full_test_flags.contains("4"));

        req.set_full_speed_url(NekoGui::dataStore->test_download_url.toStdString());
        req.set_full_speed_timeout(NekoGui::dataStore->test_download_timeout);
    } else if (mode == libcore::TcpPing) {
        req.set_address(ent->bean->DisplayAddress().toStdString());
    }

    bool rpcOK;
    auto result = defaultClient->Test(&rpcOK, req);
    //
    if (!extCs.empty()) {
        runOnUiThread(
            [&] {
                for (const auto &extC: extCs) {
                    extC->Kill();
                }
                extSem.release();
            },
            DS_cores);
        extSem.acquire();
    }
    //
    if (!rpcOK) return;

    if (result.error().empty()) {
        ent->latency = result.ms();
        if (ent->latency == 0) ent->latency = 1; // nekoray use 0 to represents not tested
    } else {
        ent->latency = -1;
    }
    ent->full_test_report = result.full_report().c_str(); // higher priority
    ent->Save();

    if (!result.error().empty()) {
        MW_show_log(tr("[%1] test error: %2").arg(ent->bean->DisplayTypeAndName(), result.error().c_str()));
    }

    auto profileId = ent->id;
    runOnUiThread([this, profileId] {
        refresh_proxy_list(profileId);
    });
}

void MainWindow::speedtest_current_group(int mode) {
    // menu_stop_testing mode == 114514, TODO use proper constants
    if (mode == 114514) {
        stopSpeedtest.store(true);
        return;
    }
    if (!speedtestRunning.tryLock()) {
        MessageBoxWarning(software_name, "The last speed test did not exit completely, please wait. If it persists, please restart the program.");
        return;
    }

    speedTestThreadPool->setMaxThreadCount(NekoGui::dataStore->test_concurrent);

    auto profiles = get_selected_or_group();
    if (profiles.isEmpty()) {
        speedtestRunning.unlock();
        return;
    }

    QStringList full_test_flags;
    if (mode == libcore::FullTest) {
        auto w = new QDialog(this);
        auto layout = new QVBoxLayout(w);
        w->setWindowTitle(tr("Test Options"));
        //
        auto l1 = new QCheckBox(tr("Latency"));
        auto l2 = new QCheckBox(tr("UDP latency"));
        auto l3 = new QCheckBox(tr("Download speed"));
        auto l4 = new QCheckBox(tr("In and Out IP"));
        //
        auto box = new QDialogButtonBox;
        box->setOrientation(Qt::Horizontal);
        box->setStandardButtons(QDialogButtonBox::Cancel | QDialogButtonBox::Ok);
        connect(box, &QDialogButtonBox::accepted, w, &QDialog::accept);
        connect(box, &QDialogButtonBox::rejected, w, &QDialog::reject);
        //
        layout->addWidget(l1);
        layout->addWidget(l2);
        layout->addWidget(l3);
        layout->addWidget(l4);
        layout->addWidget(box);
        if (w->exec() != QDialog::Accepted) {
            w->deleteLater();
            speedtestRunning.unlock();
            return;
        }
        //
        if (l1->isChecked()) full_test_flags << "1";
        if (l2->isChecked()) full_test_flags << "2";
        if (l3->isChecked()) full_test_flags << "3";
        if (l4->isChecked()) full_test_flags << "4";
        //
        w->deleteLater();
        if (full_test_flags.isEmpty()) {
            speedtestRunning.unlock();
            return;
        }
    }

    runOnNewThread([profiles, full_test_flags, mode, this]() {
        std::atomic<int> counter(0);
        stopSpeedtest.store(false);
        for (const auto &item: profiles) {
            auto func = [&item, full_test_flags, mode, this, &counter, profiles]() {
                MainWindow::RunSpeedTest(item, mode, full_test_flags);
                counter++;
                if (counter.load() == profiles.size()) {
                    speedtestRunning.unlock();
                }
            };

            speedTestThreadPool->start(func);
        }

        speedtestRunning.lock();
        speedtestRunning.unlock();
        MW_show_log("Speedtest finished!");
    });
}

void MainWindow::url_test_current() {
    last_test_time = QTime::currentTime();
    ui->label_running->setText(tr("Testing"));

    runOnNewThread([=] {
        libcore::TestReq req;
        req.set_mode(libcore::UrlTest);
        req.set_timeout(3000);
        req.set_url(NekoGui::dataStore->test_latency_url.toStdString());

        bool rpcOK;
        auto result = defaultClient->Test(&rpcOK, req);
        if (!rpcOK) return;

        auto latency = result.ms();
        last_test_time = QTime::currentTime();

        runOnUiThread([=] {
            if (!result.error().empty()) {
                MW_show_log(QString("UrlTest error: %1").arg(result.error().c_str()));
            }
            if (latency <= 0) {
                ui->label_running->setText(tr("Test Result") + ": " + tr("Unavailable"));
            } else if (latency > 0) {
                ui->label_running->setText(tr("Test Result") + ": " + QString("%1 ms").arg(latency));
            }
        });
    });
}

void MainWindow::stop_core_daemon() {
    NekoGui_rpc::defaultClient->Exit();
}

void MainWindow::neko_start(int _id) {
    if (NekoGui::dataStore->prepare_exit) return;

    auto ents = get_now_selected_list();
    auto ent = (_id < 0 && !ents.isEmpty()) ? ents.first() : NekoGui::profileManager->GetProfile(_id);
    if (ent == nullptr) return;

    if (select_mode) {
        emit profile_selected(ent->id);
        select_mode = false;
        refresh_status();
        return;
    }

    auto group = NekoGui::profileManager->GetGroup(ent->gid);
    if (group == nullptr || group->archive) return;

    auto result = BuildConfig(ent, false, false);
    if (!result->error.isEmpty()) {
        MessageBoxWarning("BuildConfig return error", result->error);
        return;
    }

    auto neko_start_stage2 = [=] {
        libcore::LoadConfigReq req;
        req.set_core_config(QJsonObject2QString(result->coreConfig, true).toStdString());
        req.set_disable_stats(NekoGui::dataStore->disable_traffic_stats);
        if (NekoGui::dataStore->traffic_loop_interval > 0) {
            req.add_stats_outbounds("proxy");
            req.add_stats_outbounds("direct");
        }
        //
        bool rpcOK;
        QString error = defaultClient->Start(&rpcOK, req);
        if (!rpcOK) {
            return false;
        }
        if (!error.isEmpty()) {
            if (error.contains("configure tun interface")) {
                runOnUiThread([=] {
                    auto r = QMessageBox::information(this, tr("Tun device misbehaving"),
                                                      tr("If you have trouble starting VPN, you can force reset nekobox_core process here and then try starting the profile again."),
                                                      tr("Reset"), tr("Cancel"), "",
                                                      1, 1);
                    if (r == 0) {
                        GetMainWindow()->StopVPNProcess(true);
                    }
                });
                return false;
            }
            runOnUiThread([=] { MessageBoxWarning("LoadConfig return error", error); });
            return false;
        }
        //
        NekoGui_traffic::trafficLooper->proxy = result->outboundStat.get();
        NekoGui_traffic::trafficLooper->items = result->outboundStats;
        NekoGui::dataStore->ignoreConnTag = result->ignoreConnTag;
        NekoGui_traffic::trafficLooper->loop_enabled = true;

        runOnUiThread(
            [=] {
                auto extCs = CreateExtCFromExtR(result->extRs, true);
                NekoGui_sys::running_ext.splice(NekoGui_sys::running_ext.end(), extCs);
            },
            DS_cores);

        NekoGui::dataStore->UpdateStartedId(ent->id);
        running = ent;

        runOnUiThread([=] {
            refresh_status();
            refresh_proxy_list(ent->id);
        });

        return true;
    };

    if (!mu_starting.tryLock()) {
        MessageBoxWarning(software_name, "Another profile is starting...");
        return;
    }
    if (!mu_stopping.tryLock()) {
        MessageBoxWarning(software_name, "Another profile is stopping...");
        mu_starting.unlock();
        return;
    }
    mu_stopping.unlock();

    // check core state
    if (!NekoGui::dataStore->core_running) {
        runOnUiThread(
            [=] {
                MW_show_log("Try to start the config, but the core has not listened to the grpc port, so restart it...");
                core_process->start_profile_when_core_is_up = ent->id;
                core_process->Restart();
            },
            DS_cores);
        mu_starting.unlock();
        return; // let CoreProcess call neko_start when core is up
    }

    // timeout message
    auto restartMsgbox = new QMessageBox(QMessageBox::Question, software_name, tr("If there is no response for a long time, it is recommended to restart the software."),
                                         QMessageBox::Yes | QMessageBox::No, this);
    connect(restartMsgbox, &QMessageBox::accepted, this, [=] { MW_dialog_message("", "RestartProgram"); });
    auto restartMsgboxTimer = new MessageBoxTimer(this, restartMsgbox, 5000);

    runOnNewThread([=] {
        // stop current running
        if (NekoGui::dataStore->started_id >= 0) {
            runOnUiThread([=] { neko_stop(false, true); });
            sem_stopped.acquire();
        }
        // do start
        MW_show_log(">>>>>>>> " + tr("Starting profile %1").arg(ent->bean->DisplayTypeAndName()));
        if (!neko_start_stage2()) {
            MW_show_log("<<<<<<<< " + tr("Failed to start profile %1").arg(ent->bean->DisplayTypeAndName()));
        }
        mu_starting.unlock();
        // cancel timeout
        runOnUiThread([=] {
            restartMsgboxTimer->cancel();
            restartMsgboxTimer->deleteLater();
            restartMsgbox->deleteLater();
#ifdef Q_OS_LINUX
            // Check systemd-resolved
            if (NekoGui::dataStore->spmode_vpn && NekoGui::dataStore->routing->direct_dns.startsWith("local") && ReadFileText("/etc/resolv.conf").contains("systemd-resolved")) {
                MW_show_log("[Warning] The default Direct DNS may not works with systemd-resolved, you may consider change your DNS settings.");
            }
#endif
        });
    });
}

void MainWindow::neko_set_spmode_system_proxy(bool enable, bool save) {
    if (enable != NekoGui::dataStore->spmode_system_proxy) {
        bool ok;
        auto error = defaultClient->SetSystemProxy(&ok, enable);
        if (!ok) {
            MW_show_log("Failed to set system proxy with error " + error);
            ui->checkBox_SystemProxy->setChecked(false);
            refresh_status();
            return;
        }
    }

    if (save) {
        NekoGui::dataStore->remember_spmode.removeAll("system_proxy");
        if (enable && NekoGui::dataStore->remember_enable) {
            NekoGui::dataStore->remember_spmode.append("system_proxy");
        }
        NekoGui::dataStore->Save();
    }

    NekoGui::dataStore->spmode_system_proxy = enable;
    refresh_status();
}

void MainWindow::neko_stop(bool crash, bool sem) {
    auto id = NekoGui::dataStore->started_id;
    if (id < 0) {
        if (sem) sem_stopped.release();
        return;
    }

    auto neko_stop_stage2 = [=] {
        runOnUiThread(
            [=] {
                while (!NekoGui_sys::running_ext.empty()) {
                    auto extC = NekoGui_sys::running_ext.front();
                    extC->Kill();
                    NekoGui_sys::running_ext.pop_front();
                }
            },
            DS_cores);

        NekoGui_traffic::trafficLooper->loop_enabled = false;
        NekoGui_traffic::trafficLooper->loop_mutex.lock();
        if (NekoGui::dataStore->traffic_loop_interval != 0) {
            NekoGui_traffic::trafficLooper->UpdateAll();
            for (const auto &item: NekoGui_traffic::trafficLooper->items) {
                NekoGui::profileManager->GetProfile(item->id)->Save();
                runOnUiThread([=] { refresh_proxy_list(item->id); });
            }
        }
        NekoGui_traffic::trafficLooper->loop_mutex.unlock();

        if (!crash) {
            bool rpcOK;
            QString error = defaultClient->Stop(&rpcOK);
            if (rpcOK && !error.isEmpty()) {
                runOnUiThread([=] { MessageBoxWarning("Stop return error", error); });
                return false;
            } else if (!rpcOK) {
                return false;
            }
        }

        NekoGui::dataStore->UpdateStartedId(-1919);
        NekoGui::dataStore->need_keep_vpn_off = false;
        running = nullptr;

        runOnUiThread([=] {
            refresh_status();
            refresh_proxy_list(id);
        });

        return true;
    };

    if (!mu_stopping.tryLock()) {
        if (sem) sem_stopped.release();
        return;
    }

    // timeout message
    auto restartMsgbox = new QMessageBox(QMessageBox::Question, software_name, tr("If there is no response for a long time, it is recommended to restart the software."),
                                         QMessageBox::Yes | QMessageBox::No, this);
    connect(restartMsgbox, &QMessageBox::accepted, this, [=] { MW_dialog_message("", "RestartProgram"); });
    auto restartMsgboxTimer = new MessageBoxTimer(this, restartMsgbox, 5000);

    runOnNewThread([=] {
        // do stop
        MW_show_log(">>>>>>>> " + tr("Stopping profile %1").arg(running->bean->DisplayTypeAndName()));
        if (!neko_stop_stage2()) {
            MW_show_log("<<<<<<<< " + tr("Failed to stop, please restart the program."));
        }
        mu_stopping.unlock();
        if (sem) sem_stopped.release();
        // cancel timeout
        runOnUiThread([=] {
            restartMsgboxTimer->cancel();
            restartMsgboxTimer->deleteLater();
            restartMsgbox->deleteLater();
        });
    });
}

bool isNewer(QString version) {
    version = version.mid(8); // take out nekoray-
    auto parts = version.split('.');
    auto currentParts = QString(NKR_VERSION).split('.');
    std::vector<int> verNums;
    std::vector<int> currNums;
    // add base version first
    verNums.push_back(parts[0].toInt());
    verNums.push_back(parts[1].toInt());
    verNums.push_back(parts[2].split('-')[0].toInt());

    currNums.push_back(currentParts[0].toInt());
    currNums.push_back(currentParts[1].toInt());
    currNums.push_back(currentParts[2].split('-')[0].toInt());

    // base version is equal or greater, check release mode
    int releaseMode;
    int partialVer = 0;
    if (parts[2].split('-').size() > 1 && parts[2].split('-')[1].toInt() == 0 /* this makes sure it is not a number*/) {
        partialVer = parts[3].split('-')[0].toInt();
        auto str = parts[2].split('-')[1];
        if (str == "rc") releaseMode = 3;
        if (str == "beta") releaseMode = 2;
        if (str == "alpha") releaseMode = 1;
    } else {
        releaseMode = 4;
    }
    verNums.push_back(releaseMode);
    verNums.push_back(partialVer);

    int currReleaseMode;
    int currentPartialVer = 0;
    if (currentParts[2].split('-').size() > 1 && currentParts[2].split('-')[1].toInt() == 0 /* this makes sure it is not a number*/) {
        currentPartialVer = currentParts[3].split('-')[0].toInt();
        auto str = currentParts[2].split('-')[1];
        if (str == "rc") currReleaseMode = 3;
        if (str == "beta") currReleaseMode = 2;
        if (str == "alpha") currReleaseMode = 1;
    } else {
        currReleaseMode = 4;
    }
    currNums.push_back(currReleaseMode);
    currNums.push_back(currentPartialVer);

    for (int i=0;i<verNums.size();i++) {
        if (verNums[i] > currNums[i]) return true;
        if (verNums[i] < currNums[i]) return false;
    }

    return false;
}

void MainWindow::CheckUpdate() {
    // on new thread...
    bool ok;
    libcore::UpdateReq request;
    request.set_action(libcore::UpdateAction::Check);
    request.set_check_pre_release(NekoGui::dataStore->check_include_pre);
    auto response = NekoGui_rpc::defaultClient->Update(&ok, request);
    if (!ok) return;

    auto err = response.error();
    if (!err.empty()) {
        runOnUiThread([=] {
            MessageBoxWarning(QObject::tr("Update"), err.c_str());
        });
        return;
    }

    if (response.release_download_url() == nullptr || !isNewer(QString(response.assets_name().c_str()))) {
        runOnUiThread([=] {
            MessageBoxInfo(QObject::tr("Update"), QObject::tr("No update"));
        });
        return;
    }

    runOnUiThread([=] {
        auto allow_updater = !NekoGui::dataStore->flag_use_appdata;
        auto note_pre_release = response.is_pre_release() ? " (Pre-release)" : "";
        QMessageBox box(QMessageBox::Question, QObject::tr("Update") + note_pre_release,
                        QObject::tr("Update found: %1\nRelease note:\n%2").arg(response.assets_name().c_str(), response.release_note().c_str()));
        //
        QAbstractButton *btn1 = nullptr;
        if (allow_updater) {
            btn1 = box.addButton(QObject::tr("Update"), QMessageBox::AcceptRole);
        }
        QAbstractButton *btn2 = box.addButton(QObject::tr("Open in browser"), QMessageBox::AcceptRole);
        box.addButton(QObject::tr("Close"), QMessageBox::RejectRole);
        box.exec();
        //
        if (btn1 == box.clickedButton() && allow_updater) {
            // Download Update
            runOnNewThread([=] {
                bool ok2;
                libcore::UpdateReq request2;
                request2.set_action(libcore::UpdateAction::Download);
                auto response2 = NekoGui_rpc::defaultClient->Update(&ok2, request2);
                runOnUiThread([=] {
                    if (response2.error().empty()) {
                        auto q = QMessageBox::question(nullptr, QObject::tr("Update"),
                                                       QObject::tr("Update is ready, restart to install?"));
                        if (q == QMessageBox::StandardButton::Yes) {
                            this->exit_reason = 1;
                            on_menu_exit_triggered();
                        }
                    } else {
                        MessageBoxWarning(QObject::tr("Update"), response2.error().c_str());
                    }
                });
            });
        } else if (btn2 == box.clickedButton()) {
            QDesktopServices::openUrl(QUrl(response.release_url().c_str()));
        }
    });
}