<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_CN">
<context>
    <name>ConnectionsFilterHeader</name>
    <message>
        <source>Disable Filter</source>
        <translation>禁用筛选</translation>
    </message>
    <message>
        <source>Enable Filter</source>
        <translation>启用筛选</translation>
    </message>
    <message>
        <source>Filter...</source>
        <translation>筛选...</translation>
    </message>
</context>
<context>
    <name>ConnectionsTreeModel</name>
    <message>
        <source>System</source>
        <translation>系统</translation>
    </message>
    <message>
        <source>Process: %1
Active connections: %2
Total traffic: %3↑ %4↓
Total speed: %5/s↑ %6/s↓</source>
        <translation>进程: %1
活动连接数: %2
流量合计: %3↑ %4↓
速度合计: %5/s↑ %6/s↓</translation>
    </message>
    <message>
        <source>Destination: %1
Connections: %2
Process: %3
Protocol: %4
Outbound: %5
Total traffic: %6↑ %7↓
Total speed: %8/s↑ %9/s↓</source>
        <translation>目标: %1
连接数: %2
进程: %3
协议: %4
出站: %5
流量合计: %6↑ %7↓
速度合计: %8/s↑ %9/s↓</translation>
    </message>
    <message>
        <source>Destination: %1
Process: %2
Protocol: %3
Outbound: %4</source>
        <translation>目标: %1
进程: %2
协议: %3
出站: %4</translation>
    </message>
    <message>
        <source>Process / Destination</source>
        <translation>进程/目标</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>来源</translation>
    </message>
    <message>
        <source>Protocol</source>
        <translation>协议</translation>
    </message>
    <message>
        <source>Outbound</source>
        <translation>出站</translation>
    </message>
    <message>
        <source>Traffic</source>
        <translation>流量</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>速度</translation>
    </message>
    <message>
        <source>Click To Sort By Process</source>
        <translation>点击表示按进程排序</translation>
    </message>
    <message>
        <source>Click To Sort By Source</source>
        <translation>点击表示按来源排序</translation>
    </message>
    <message>
        <source>Click To Sort By Protocol</source>
        <translation>点击表示按协议排序</translation>
    </message>
    <message>
        <source>Click To Sort By Outbound</source>
        <translation>点击表示按出站排序</translation>
    </message>
    <message>
        <source>Click to sort by traffic; right-click to choose total/down/up</source>
        <translation>点击表示按流量排序；右击选择“合计(Σ)/下载(↓)/上传(↑)&quot;</translation>
    </message>
    <message>
        <source>Click to sort by speed; right-click to choose total/down/up</source>
        <translation>点击表示按速度排序；右击选择“合计(Σ)/下载(↓)/上传(↑)&quot;</translation>
    </message>
</context>
<context>
    <name>DiagnosticsTab</name>
    <message>
        <source>Performance profile</source>
        <translation>性能剖析</translation>
    </message>
    <message>
        <source>Profiles the Core using pprof. The profile itself does not contain any information about your configs, but if you include the logs too, there will be information about your configs in them.</source>
        <translation>使用 pprof 分析核心性能。该剖析文件本身不包含任何有关你的配置的信息，但如果还包含日志，则其中将包含相关配置的信息。</translation>
    </message>
    <message>
        <source>Records where goroutines wait on locks and channels.</source>
        <translation>记录 goroutines (Go协程)在锁定和通道上等待（资源释放）的位置。</translation>
    </message>
    <message>
        <source>Lock contention</source>
        <translation>锁竞争</translation>
    </message>
    <message>
        <source>Execution trace (larger file)</source>
        <translation>执行追踪 (大文件)</translation>
    </message>
    <message>
        <source>Logs contain visited domains and server addresses.</source>
        <translation>日志包含访问过的域名和服务器地址。</translation>
    </message>
    <message>
        <source>Include Throne logs</source>
        <translation>包含 Throne 日志</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>启动</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message>
        <source>Show in folder</source>
        <translation>在文件夹中显示</translation>
    </message>
    <message>
        <source>Open folder</source>
        <translation>打开文件夹</translation>
    </message>
    <message>
        <source>Saved %1 (%2)</source>
        <translation>已保存 %1 (%2)</translation>
    </message>
    <message>
        <source>The core is not running.</source>
        <translation>核心未运行。</translation>
    </message>
    <message>
        <source>Finishing…</source>
        <translation>正在完成...</translation>
    </message>
    <message>
        <source>Recording… %1 left</source>
        <translation>记录中… 剩余 %1</translation>
    </message>
</context>
<context>
    <name>DialogAutoSelector</name>
    <message>
        <source>Auto Selector Stats</source>
        <translation>自动选择器统计</translation>
    </message>
    <message>
        <source>Only show profiles with problems</source>
        <translation>仅显示有问题的配置档</translation>
    </message>
    <message>
        <source>Use this profile</source>
        <translation>使用这个配置档</translation>
    </message>
    <message>
        <source>Keep the selected profile in use instead of letting the ranking choose. Useful when several profiles measure much the same and you prefer one of them.
It stays a preference, not a lock: if that profile stops working the selector still moves on, and comes back to your choice once it recovers.</source>
        <translation>保持当前选定的配置档(Profile)继续使用中而不是让排名选择。在多个配置档测量结果非常接近而你更偏于使用其中某个的情况下很有用。
它只是偏好选项，而不是锁定：如果该配置档停止工作，则选择器仍会继续切换，并在其恢复后返回到你的选择。</translation>
    </message>
    <message>
        <source>Back to automatic</source>
        <translation>切回自动</translation>
    </message>
    <message>
        <source>Stop preferring a particular profile and let the ranking decide again.</source>
        <translation>停止优选特定配置档，并再次由排名决定。</translation>
    </message>
    <message>
        <source>Check all now</source>
        <translation>立即检查全部</translation>
    </message>
    <message>
        <source>Re-measure every running profile immediately instead of waiting for the next scheduled check.</source>
        <translation>立即重测每个正在运行的配置档，而不是等待下一次的计划检查。</translation>
    </message>
    <message>
        <source>Re-checking every profile...</source>
        <translation>重新检查每个配置档...</translation>
    </message>
    <message>
        <source>Profile</source>
        <translation>配置档</translation>
    </message>
    <message>
        <source>Status</source>
        <translation>状态</translation>
    </message>
    <message>
        <source>Latency</source>
        <translation>延迟</translation>
    </message>
    <message>
        <source>Jitter</source>
        <translation>抖动</translation>
    </message>
    <message>
        <source>Checks</source>
        <translation>检查数</translation>
    </message>
    <message>
        <source>Connects</source>
        <translation>连接数</translation>
    </message>
    <message>
        <source>Last OK</source>
        <translation>上次通过</translation>
    </message>
    <message>
        <source>Notes</source>
        <translation>备注</translation>
    </message>
    <message>
        <source>Could not change the profile: %1</source>
        <translation>无法更改该配置档: %1</translation>
    </message>
    <message>
        <source>Back to automatic — the selector will choose again.</source>
        <translation>切回自动 - 选择器将再次选择。</translation>
    </message>
    <message>
        <source>Now using your chosen profile.</source>
        <translation>现在正在使用你选择的配置档。</translation>
    </message>
    <message>
        <source>No auto selector is running.</source>
        <translation>没有自动选择器正在运行。</translation>
    </message>
    <message>
        <source>Checks are paused because this machine has no network connection. No profile is being blamed for it, and the ranking is frozen until the connection returns.</source>
        <translation>因本机没有网络连接，检查被暂停。不因此归咎于任何配置档，排名结果会被冻结直至连接恢复。</translation>
    </message>
    <message>
        <source>Last check round %1.</source>
        <translation>上次检查轮次 %1。</translation>
    </message>
    <message>
        <source>Next in %1s.</source>
        <translation>下次在 %1s 后。</translation>
    </message>
    <message>
        <source>Using %1 because you chose it.</source>
        <translation>正在使用 %1 (因你选择它)。</translation>
    </message>
    <message>
        <source>You chose %1, but it is not working right now, so the selector picked another. It will go back to yours once it recovers.</source>
        <translation>你选择了 %1，但它目前不正常工作，因此选择器选取了其他（配置档）。一旦它恢复正常，就会切回你的选择。</translation>
    </message>
    <message>
        <source>Last switch %1 (%2).</source>
        <translation>上次切换 %1 (%2)。</translation>
    </message>
    <message>
        <source>Nothing is working right now — if this holds, the selector will rebuild from the next best profiles.</source>
        <translation>目前没有任何配置档正常工作 - 如果这种情况持续，选择器将从下一个最优配置档开始重建。</translation>
    </message>
    <message>
        <source>%1 ms</source>
        <translation>%1 毫秒</translation>
    </message>
    <message>
        <source>Best %1 ms, worst %2 ms</source>
        <translation>最好 %1 毫秒, 最差 %2 毫秒</translation>
    </message>
    <message>
        <source>How much the latency moves around. The selector prefers steady profiles over fast but erratic ones.</source>
        <translation>延迟波动幅度有多大。选择器更偏向稳定的配置档而不是快速但波动大的。</translation>
    </message>
    <message>
        <source>%1 / %2 ok</source>
        <translation>%1 / %2 通过</translation>
    </message>
    <message>
        <source>Real connection attempts made by apps through this profile.</source>
        <translation>通过这个配置档，由应用发出的实际连接尝试次数。</translation>
    </message>
</context>
<context>
    <name>DialogBasicSettings</name>
    <message>
        <source>Basic Settings</source>
        <translation>基本设置</translation>
    </message>
    <message>
        <source>Common</source>
        <translation>通用</translation>
    </message>
    <message>
        <source>Inbound Settings</source>
        <translation>入站设置</translation>
    </message>
    <message>
        <source>Enable Authorization</source>
        <translation>启用认证</translation>
    </message>
    <message>
        <source>Custom Inbound</source>
        <translation>自定义入站</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <source>Inbound Username</source>
        <translation>入站用户名</translation>
    </message>
    <message>
        <source>Disable Mixed Inbound</source>
        <translation>禁用混合入站</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Selects a random available port on every run&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;每次运行时选择一个随机可用端口&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Random port</source>
        <translation>随机端口</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Socks
                                                                + HTTP Proxy&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;
                                                            </source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Socks+ HTTP 代理&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;
</translation>
    </message>
    <message>
        <source>Listen Port</source>
        <translation>监听端口</translation>
    </message>
    <message>
        <source>Listen Address</source>
        <translation>监听地址</translation>
    </message>
    <message>
        <source>Inbound Password</source>
        <translation>入站密码</translation>
    </message>
    <message>
        <source>Proxy Format</source>
        <translation>代理格式</translation>
    </message>
    <message>
        <source>Testing</source>
        <translation>测试</translation>
    </message>
    <message>
        <source>Speedtest mode</source>
        <translation>速度测试模式</translation>
    </message>
    <message>
        <source>Download + Upload</source>
        <translation>下载 + 上传</translation>
    </message>
    <message>
        <source>Only Download</source>
        <translation>仅下载</translation>
    </message>
    <message>
        <source>Only Upload</source>
        <translation>仅上传</translation>
    </message>
    <message>
        <source>Simple Download</source>
        <translation>简单下载</translation>
    </message>
    <message>
        <source>Only Country</source>
        <translation>仅国别</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;timeout in milliseconds&lt;br/&gt;applies to all tests individually&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;毫秒为单位的超时值&lt;br/&gt;分别应用于所有测试&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Timeout</source>
        <translation>超时</translation>
    </message>
    <message>
        <source>Simple Download URL</source>
        <translation>简单下载 URL</translation>
    </message>
    <message>
        <source>Latency Test URL</source>
        <translation>延迟测试 URL</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Fetched &lt;span style=&quot; font-weight:600;&quot;&gt;without&lt;/span&gt; any proxy, so features that must tell a dead internet connection apart from dead servers — such as the auto selector — can check the connection itself, and notice the moment it comes back.&lt;/p&gt;&lt;p&gt;Only put a URL here that is reachable &lt;span style=&quot; font-weight:600;&quot;&gt;directly&lt;/span&gt; on your network. Leave it empty to rely on the operating system&apos;s network state instead.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;不用&lt;/span&gt;任何代理获取，因此如自动选择器之类需要区分互联网连接中断和服务器故障的功能，可自行检查网络连接，并在恢复时立即察觉。&lt;/p&gt;&lt;p&gt;仅在这里填写可通过网络&lt;span style=&quot; font-weight:600;&quot;&gt;直接&lt;/span&gt;访问到的 URL。留空则改为依赖系统的网络状态。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Direct Test URL</source>
        <translation>直连测试 URL</translation>
    </message>
    <message>
        <source>optional — use the OS network state</source>
        <translation>可选 - 使用操作系统的网络状态</translation>
    </message>
    <message>
        <source>Concurrency</source>
        <translation>并发数</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Timeout for URLtest in ms&lt;br/&gt;Note that muxed connections take a much longer time for their initial request, and setting this value too low will cause the test to falsely report that the config is not working&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;以毫秒为单位的 URL 测试超时&lt;br/&gt;注意，复用连接在其初始请求时耗时更长，且这个值设置过低将会导致测试误报该配置无效&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Register throne:// links at startup</source>
        <translation>启动时注册 throne:// 链接</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Registers the handler now, without waiting for the next start.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;立即注册该处理工具，无需等待下次启动。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Install</source>
        <translation>安装</translation>
    </message>
    <message>
        <source>Links and Files</source>
        <translation>链接和文件</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Registers Throne as the handler for throne:// links, re-applying the registration whenever the install is moved.&lt;/p&gt;&lt;p&gt;Turning this off does not undo an existing registration: use Uninstall for that.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;注册 Throne 为 throne:// 链接的处理程序，在软件安装移动位置时重新应用该注册。&lt;/p&gt;&lt;p&gt;关闭这个选项不会撤销已有的注册：如需撤销请使用“卸载”。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Removes the throne:// handler Throne wrote. Entries owned by other applications are left alone.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;移除 Throne 写入的 throne:// 处理工具。属于其它应用程序的条目不受影响。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Uninstall</source>
        <translation>卸载</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Adds Throne to the &quot;Open with&quot; list for config files such as JSON and YAML, re-applying the registration whenever the install is moved.&lt;/p&gt;&lt;p&gt;Turning this off does not undo an existing registration: use Uninstall for that.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;添加 Throne 到（如 JSON 和 YAML 等）配置文件的“打开方式”列表，当该安装移动时重新应用该注册。&lt;/p&gt;&lt;p&gt;关闭这个选项不会撤销已有注册：如需撤销则使用“卸载”功能。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Register config files at startup</source>
        <translation>启动时注册配置文件</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Registers the associations now, without waiting for the next start.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;立即注册该关联而无需等待下次启动。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Removes every config file association Throne wrote, including those added by older versions. Associations owned by other applications are left alone.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;移除由 Throne 写入的每个配置文件关联，包括由较旧版本添加的那些。属于其他应用程序的条目会保留不变。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Logging</source>
        <translation>日志</translation>
    </message>
    <message>
        <source>Max log lines</source>
        <translation>最多日志行数</translation>
    </message>
    <message>
        <source>Auto-scroll log</source>
        <translation>自动滚动日志</translation>
    </message>
    <message>
        <source>Sing-box Log level</source>
        <translation>Sing-box 日志级别</translation>
    </message>
    <message>
        <source>Xray Log level</source>
        <translation>Xray 日志级别</translation>
    </message>
    <message>
        <source>Log Filtering</source>
        <translation>日志筛选</translation>
    </message>
    <message>
        <source>Include Keywords</source>
        <translation>包含关键字</translation>
    </message>
    <message>
        <source>Include Regex</source>
        <translation>包含正则表达式</translation>
    </message>
    <message>
        <source>Enable Include Rules</source>
        <translation>启用「包含」规则</translation>
    </message>
    <message>
        <source>Enable Exclude Rules</source>
        <translation>启用「排除」规则</translation>
    </message>
    <message>
        <source>Exclude Keywords</source>
        <translation>排除关键字</translation>
    </message>
    <message>
        <source>Exclude Regex</source>
        <translation>排除正则表达式</translation>
    </message>
    <message>
        <source>Style</source>
        <translation>样式</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>字体</translation>
    </message>
    <message>
        <source>Font Size</source>
        <translation>字体大小</translation>
    </message>
    <message>
        <source>Connection statistics</source>
        <translation>连接统计</translation>
    </message>
    <message>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Fully disables the traffic aggregation feature (per-config and per-app usage history kept in a separate database, shown in the Traffic Stats dashboard). Does not affect the per-profile traffic counters in the main window.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;完全禁用流量聚合功能(每个配置和每个应用的使用历史会保存在一个单独的数据库中，显示在“流量统计”仪表板中)。 不影响主窗口中每个配置档的流量计数器。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable Traffic Aggregation</source>
        <translation>禁用流量聚合</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Show each config&apos;s security next to its type in the proxy list, e.g. &quot;Trojan (WebSocket+TLS)&quot;. Insecure configs are marked with a warning sign.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在代理列表中在每个配置的类型旁边显示其安全机制信息，例如 &quot;Trojan (WebSocket+TLS)&quot;。不安全的配置会用一个警告符号标记。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Show Config Security</source>
        <translation>显示配置安全信息</translation>
    </message>
    <message>
        <source>Hide dashboard at startup</source>
        <translation>启动时隐藏仪表盘</translation>
    </message>
    <message>
        <source>Show System DNS option</source>
        <translation>显示系统 DNS 选项</translation>
    </message>
    <message>
        <source>Prevents the app from minimizing to the tray when the window is closed. The app will exit instead</source>
        <translation>防止应用在窗口关闭时最小化到托盘。而是直接退出</translation>
    </message>
    <message>
        <source>Disable tray</source>
        <translation>禁用托盘</translation>
    </message>
    <message>
        <source>Skip confirmation When Deleting Profiles</source>
        <translation>删除配置档时跳过确认</translation>
    </message>
    <message>
        <source>Theme</source>
        <translation>主题</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>选择</translation>
    </message>
    <message>
        <source>Enable Custom Icons</source>
        <translation>启用自定义图标</translation>
    </message>
    <message>
        <source>Follow the connection status icon in the dock/taskbar. When off, it always shows the Throne icon</source>
        <translation>Dock/任务栏中图标跟随连接状态变化。关闭时始终显示 Throne 图标</translation>
    </message>
    <message>
        <source>Follow Status Icon in Taskbar</source>
        <translation>任务栏图标跟随状态</translation>
    </message>
    <message>
        <source>Language</source>
        <translation>语言</translation>
    </message>
    <message>
        <source>Subscription</source>
        <translation>订阅</translation>
    </message>
    <message>
        <source>hwid=custom_value,os=custom_os,osVersion=custom_version,model=custom_model</source>
        <translation>hwid=自定义值,os=自定义操作系统,osVersion=自定义版本,model=自定义型号</translation>
    </message>
    <message>
        <source>Clear servers before updating subscription</source>
        <translation>更新订阅前清除服务器</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When enabled, a window listing added / updated / deleted profiles is shown after a manual subscription update. The same information is always written to the log.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用时，手动更新订阅后显示一个窗口，列出增加/更新/删除的配置档。 同样的信息始终写到日志。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Show the changes window after a manual subscription update</source>
        <translation>订阅手动更新后显示变化窗口</translation>
    </message>
    <message>
        <source>Subscription auto update</source>
        <translation>订阅自动更新</translation>
    </message>
    <message>
        <source>Interval (minute, invalid if less than 30)</source>
        <translation>时间间隔 (分钟，少于 30 则无效)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;HWID=%1&lt;/p&gt;&lt;p&gt;OS=%2&lt;/p&gt;&lt;p&gt;OS Version=%3&lt;/p&gt;&lt;p&gt;Model=%4&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;HWID=%1&lt;/p&gt;&lt;p&gt;OS=%2&lt;/p&gt;&lt;p&gt;OS Version=%3&lt;/p&gt;&lt;p&gt;Model=%4&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable sending HWID, device model, and OS version when updating subscription</source>
        <translation>启用在更新订阅时发送硬件ID、设备型号以及 OS 版本</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Format: hwid=value,os=value,osVersion=value,model=value&lt;/p&gt;&lt;p&gt;Leave empty to use default values. Only specify the parameters you want to override.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;格式： hwid=值,os=值,osVersion=值,model=值&lt;/p&gt;&lt;p&gt;留空表示使用默认置。 仅指定您想要改写的参数。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Custom System Parameters (optional)</source>
        <translation>自定义系统参数(可选)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When enabled, If the currently active profile needs to be removed, it will be stopped and removed, otherwise it will not be removed at all&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用时，如果需要移除当前活动的配置档，则它会被停止并移除，不启用的话则完全不会被移除&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Allow stopping the active profile</source>
        <translation>允许停止活动配置档</translation>
    </message>
    <message>
        <source>User Agent</source>
        <translation>User Agent
(用户代理)标识</translation>
    </message>
    <message>
        <source>Routing profiles auto update</source>
        <translation>路由配置档自动更新</translation>
    </message>
    <message>
        <source>Core</source>
        <translation>核心</translation>
    </message>
    <message>
        <source>Clash API</source>
        <translation>Clash API</translation>
    </message>
    <message>
        <source>Secret</source>
        <translation>密钥</translation>
    </message>
    <message>
        <source>sing-box API / Dashboard</source>
        <translation>sing-box API / 仪表盘</translation>
    </message>
    <message>
        <source>Loopback only. Leave the port empty to keep the web dashboard off.</source>
        <translation>仅限 Loopback (回环)访问。 端口留空表示关闭Web仪表盘。</translation>
    </message>
    <message>
        <source>Regenerate Secret</source>
        <translation>重新生成密钥</translation>
    </message>
    <message>
        <source>Xray Core</source>
        <translation>Xray 核心</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When to choose Xray when importing vless profiles&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;导入 vless 配置档时何时选择 Xray&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Xray VLESS Preference</source>
        <translation>Xray VLESS 首选项</translation>
    </message>
    <message>
        <source>Miscellaneous</source>
        <translation>杂项</translation>
    </message>
    <message>
        <source>Network Settings</source>
        <translation>网络设置</translation>
    </message>
    <message>
        <source>Allow updating to beta versions</source>
        <translation>允许更新到 beta 版</translation>
    </message>
    <message>
        <source>Ignore TLS errors</source>
        <translation>忽略 TLS 错误</translation>
    </message>
    <message>
        <source>Restart Proxy On System Proxy Disable</source>
        <translation>系统代理禁用时重启代理</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use proxy for subscription request, update request etc&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;使用代理处理订阅请求、更新请求等&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Use proxy</source>
        <translation>使用代理</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Might Improve Ping and Performance&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;可能改善延迟和性能&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable Traffic Stats</source>
        <translation>禁用流量统计</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A DNS server for local use will be deployed on this port&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;供本地使用的 DNS 服务器将部署在这个端口上&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>DNS Server Port</source>
        <translation>DNS 服务器端口</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Settings for the sing-box&apos;s built-in NTP client&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;singbox 的内置 NTP 客户端的设置&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>NTP Settings</source>
        <translation>NTP 设置</translation>
    </message>
    <message>
        <source>server</source>
        <translation>服务器</translation>
    </message>
    <message>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <source>sync interval</source>
        <translation>同步间隔</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;In minutes&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;分钟为单位&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>outbound</source>
        <translation>出站</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Which outbound the NTP query is sent through&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;发送 NTP 查询所通过的出站方式或通道&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Xray Geo Assets</source>
        <translation>Xray Geo 资源</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;URL for geoip.dat, downloaded when a full Xray config&apos;s routing needs geoip: rules.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;geoip.dat 的 URL，当完整的 Xray 配置的路由需要 geoip: 规则时（将从该地址）下载。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>GeoIP Asset URL</source>
        <translation>GeoIP 资源 URL</translation>
    </message>
    <message>
        <source>Download geoip.dat now from the URL on the left</source>
        <translation>立即从左边的 URL 下载 geoip.dat</translation>
    </message>
    <message>
        <source>Download</source>
        <translation>下载</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;URL for geosite.dat, downloaded when a full Xray config&apos;s routing needs geosite: rules.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;geosite.dat 的 URL，当完整的 Xray 配置的路由需要 geosite: 规则时下载。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>GeoSite Asset URL</source>
        <translation>GeoSite 资源的 URL</translation>
    </message>
    <message>
        <source>Download geosite.dat now from the URL on the left</source>
        <translation>立即从左边的 URL 下载 geosite.dat</translation>
    </message>
    <message>
        <source>Backup and Restore</source>
        <translation>备份和恢复</translation>
    </message>
    <message>
        <source>Create Backup</source>
        <translation>创建备份</translation>
    </message>
    <message>
        <source>Create a portable backup file. Choose which parts to include:</source>
        <translation>创建便携式备份文件。选择要包含哪些部分:</translation>
    </message>
    <message>
        <source>Profiles (groups and proxies)</source>
        <translation>配置档(分组和代理)</translation>
    </message>
    <message>
        <source>Routing profiles</source>
        <translation>路由配置档</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <source>OTP profiles</source>
        <translation>OTP 配置档</translation>
    </message>
    <message>
        <source>Custom icons</source>
        <translation>自定义图标</translation>
    </message>
    <message>
        <source>Create Backup...</source>
        <translation>创建备份...</translation>
    </message>
    <message>
        <source>Restore Backup</source>
        <translation>恢复备份</translation>
    </message>
    <message>
        <source>Restore from a backup file. You can choose which parts to restore; each selected part replaces the current data. The application restarts after restore.</source>
        <translation>从备份文件中恢复。你可以选择要恢复的部分；每个选中部分都会替换当前数据。恢复后应用程序重启。</translation>
    </message>
    <message>
        <source>Restore from Backup...</source>
        <translation>从备份恢复...</translation>
    </message>
    <message>
        <source>Security</source>
        <translation>安全</translation>
    </message>
    <message>
        <source>Disable Privilege request</source>
        <translation>禁止权限请求</translation>
    </message>
    <message>
        <source>Use Mozilla Certificate Store</source>
        <translation>使用 Mozilla 证书存储库</translation>
    </message>
    <message>
        <source>Skip TLS certificate authentication by default (allowInsecure)</source>
        <translation>默认跳过 TLS 证书验证 (allowInsecure)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Do not attempt to start as Admin unless explicitly requested&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;除非明确要求，否则不要尝试以管理员身份启动&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Always Start as Standard User</source>
        <translation>始终以标准用户身份启动</translation>
    </message>
    <message>
        <source>Could not register the handler for throne:// links.</source>
        <translation>无法为 throne:// 链接注册处理工具。</translation>
    </message>
    <message>
        <source>Could not register the config file associations.</source>
        <translation>无法注册配置文件关联。</translation>
    </message>
    <message>
        <source>Select png icons</source>
        <translation>选择 PNG 图标</translation>
    </message>
    <message>
        <source>Image Files (*.png)</source>
        <translation>图像文件 (*.png)</translation>
    </message>
    <message>
        <source>Diagnostics</source>
        <translation>诊断</translation>
    </message>
    <message>
        <source>Not available for this installation</source>
        <translation>不可用于这个安装</translation>
    </message>
    <message>
        <source>Installed</source>
        <translation>已安装</translation>
    </message>
    <message>
        <source>Not installed</source>
        <translation>未安装</translation>
    </message>
    <message>
        <source>Download geo asset</source>
        <translation>下载 geo 资源</translation>
    </message>
    <message>
        <source>Please enter a URL for %1 first.</source>
        <translation>请首先输入一个 %1 的 URL。</translation>
    </message>
    <message>
        <source>Downloading Xray geo asset: %1</source>
        <translation>正在下载 Xray geo 资源: %1</translation>
    </message>
    <message>
        <source>Select at least one part to include in the backup.</source>
        <translation>至少选择一个部分以包含在备份中。</translation>
    </message>
    <message>
        <source>Throne Backup (*.thrbackup)</source>
        <translation>Throne 备份 (*.thrbackup)</translation>
    </message>
    <message>
        <source>Backup Failed</source>
        <translation>备份失败</translation>
    </message>
    <message>
        <source>Failed to create database snapshot: %1</source>
        <translation>创建数据库快照失败: %1</translation>
    </message>
    <message>
        <source>Failed to read database snapshot.</source>
        <translation>读取数据库快照失败。</translation>
    </message>
    <message>
        <source>Cannot write to: %1</source>
        <translation>无法写到: %1</translation>
    </message>
    <message>
        <source>Profiles</source>
        <translation>配置档</translation>
    </message>
    <message>
        <source>Backup Created</source>
        <translation>备份已创建</translation>
    </message>
    <message>
        <source>Backup created successfully:
%1
Included: %2</source>
        <translation>备份成功创建:
%1
包括: %2</translation>
    </message>
    <message>
        <source>Restore Failed</source>
        <translation>恢复失败</translation>
    </message>
    <message>
        <source>Cannot open backup file: %1</source>
        <translation>无法打开备份文件: %1</translation>
    </message>
    <message>
        <source>Not a valid Throne backup file.</source>
        <translation>不是有效的 Throne 备份文件。</translation>
    </message>
    <message>
        <source>Unsupported backup format version: %1.
This backup may have been created with a newer version of the application.</source>
        <translation>不支持的备份格式版本: %1。
整个备份可能用该应用程序的较新版本创建。</translation>
    </message>
    <message>
        <source>This backup file does not contain any restorable data.</source>
        <translation>这个备份文件不包含任何可恢复的数据。</translation>
    </message>
    <message>
        <source>Backup created on %1.
Select which parts to restore:</source>
        <translation>备份创建在 %1。
选择要恢复哪些部分:</translation>
    </message>
    <message>
        <source>unknown date</source>
        <translation>未知日期</translation>
    </message>
    <message>
        <source>Each selected part replaces the current data. This cannot be undone.
Throne will restart to complete the restore.</source>
        <translation>每个选中部分会替换当前的数据。 这个操作无法撤销。 Throne 将会重启以完成恢复。</translation>
    </message>
    <message>
        <source>Restore</source>
        <translation>恢复</translation>
    </message>
    <message>
        <source>Select at least one part to restore.</source>
        <translation>至少选择一个要恢复的部分。</translation>
    </message>
    <message>
        <source>Failed to create temporary file for restore.</source>
        <translation>创建用于恢复的临时文件失败。.</translation>
    </message>
    <message>
        <source>Failed to restore database: %1</source>
        <translation>恢复数据库失败: %1</translation>
    </message>
    <message>
        <source>Restore Complete</source>
        <translation>恢复完成</translation>
    </message>
    <message>
        <source>Backup restored successfully. Throne will now restart for the changes to take effect.</source>
        <translation>备份成功恢复。 Throne 现在将要重启以使得更改生效。</translation>
    </message>
</context>
<context>
    <name>DialogEditGroup</name>
    <message>
        <source>Edit Group</source>
        <translation>编辑分组</translation>
    </message>
    <message>
        <source>Common</source>
        <translation>通用</translation>
    </message>
    <message>
        <source>Basic</source>
        <translation>基本</translation>
    </message>
    <message>
        <source>Subscription</source>
        <translation>订阅</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Landing Proxy</source>
        <translation>落地代理</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>Front Proxy</source>
        <translation>前置代理</translation>
    </message>
    <message>
        <source>Auto Clear Unavailable Profiles</source>
        <translation>自动清除不可用配置档</translation>
    </message>
    <message>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <source>Skip automatic update</source>
        <translation>跳过自动更新</translation>
    </message>
    <message>
        <source>Share</source>
        <translation>分享</translation>
    </message>
    <message>
        <source>Copy profile share links</source>
        <translation>复制配置档分享链接</translation>
    </message>
    <message>
        <source>Copy profile share links (Deep Links)</source>
        <translation>复制配置档分享链接(深度链接)</translation>
    </message>
    <message>
        <source>Copied</source>
        <translation>已复制</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>警告</translation>
    </message>
    <message>
        <source>Please input URL</source>
        <translation>请输入 URL</translation>
    </message>
</context>
<context>
    <name>DialogEditOtp</name>
    <message>
        <source>OTP Profile</source>
        <translation>OTP 配置档</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>How you will refer to this OTP</source>
        <translation>你如何称呼这个 OTP</translation>
    </message>
    <message>
        <source>Secret</source>
        <translation>密钥</translation>
    </message>
    <message>
        <source>Base32 secret</source>
        <translation>Base32 密钥</translation>
    </message>
    <message>
        <source>Show secret</source>
        <translation>显示密钥</translation>
    </message>
    <message>
        <source>Issuer</source>
        <translation>颁发者</translation>
    </message>
    <message>
        <source>Optional, kept for import and export</source>
        <translation>可选，保留用于导入和导出</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>TOTP (time based)</source>
        <translation>TOTP (基于时间)</translation>
    </message>
    <message>
        <source>HOTP (counter based)</source>
        <translation>HOTP (基于计数器)</translation>
    </message>
    <message>
        <source>Algorithm</source>
        <translation>算法</translation>
    </message>
    <message>
        <source>SHA1</source>
        <translation>SHA1</translation>
    </message>
    <message>
        <source>SHA256</source>
        <translation>SHA256</translation>
    </message>
    <message>
        <source>SHA512</source>
        <translation>SHA512</translation>
    </message>
    <message>
        <source>Digits</source>
        <translation>位数</translation>
    </message>
    <message>
        <source>Period (seconds)</source>
        <translation>周期 (秒)</translation>
    </message>
    <message>
        <source>Counter</source>
        <translation>计数器</translation>
    </message>
    <message>
        <source>Hide secret</source>
        <translation>隐藏密钥</translation>
    </message>
    <message>
        <source>Name cannot be empty</source>
        <translation>名称不能为空</translation>
    </message>
    <message>
        <source>Secret is empty</source>
        <translation>密钥是空的</translation>
    </message>
    <message>
        <source>Secret is not valid base32</source>
        <translation>密钥不是有效的 base32</translation>
    </message>
    <message>
        <source>No code yet</source>
        <translation>尚无代码</translation>
    </message>
    <message>
        <source>Current code: %1</source>
        <translation>当前代码: %1</translation>
    </message>
    <message>
        <source>Current code: %1 (%2s)</source>
        <translation>当前代码: %1 (%2s)</translation>
    </message>
</context>
<context>
    <name>DialogEditProfile</name>
    <message>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <source>Common</source>
        <translation>通用</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Advanced Settings</source>
        <translation>高级设置</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>传输(网络)</translation>
    </message>
    <message>
        <source>Security</source>
        <translation>安全</translation>
    </message>
    <message>
        <source>Finalmask</source>
        <translation>最终掩码</translation>
    </message>
    <message>
        <source>Not set</source>
        <translation>未设置</translation>
    </message>
    <message>
        <source>Multiplex</source>
        <translation>多路复用</translation>
    </message>
    <message>
        <source>Keep Default</source>
        <translation>保持默认</translation>
    </message>
    <message>
        <source>Enabled</source>
        <translation>启用</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <source>Server support is required</source>
        <translation>需要服务器支持</translation>
    </message>
    <message>
        <source>Transport Layer Security. It must be consistent with the server, otherwise, the connection cannot be established.</source>
        <translation>传输层安全性（安全协议）。它必须与服务器一致，否则无法建立连接。</translation>
    </message>
    <message>
        <source>The underlying transport method. It must be consistent with the server, otherwise, the connection cannot be established.</source>
        <translation>底层传输方式。它必须与服务器一致，否则无法建立连接。</translation>
    </message>
    <message>
        <source>On</source>
        <translation>开启</translation>
    </message>
    <message>
        <source>Off</source>
        <translation>关闭</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Overrides mux to On&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;覆盖 Mux (多路复用)为开启，即强制启用 MUX&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable TCP Brutal</source>
        <translation>启用 TCP Brutal</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Server to Client TCP Brutal Speed&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;服务器到客户端的 TCP Brutal 速度&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Brutal Download Speed</source>
        <translation>Brutal 下载速度</translation>
    </message>
    <message>
        <source>Mb/s</source>
        <translation>Mb/秒</translation>
    </message>
    <message>
        <source>Brutal Upload Speed</source>
        <translation>Brutal 上传速度</translation>
    </message>
    <message>
        <source>Network Settings (%1)</source>
        <translation>网络设置 (%1)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Method of http request, will be converted to uppercase&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;HTTP 请求的方法，将被转换为大写字母&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Method</source>
        <translation>方法</translation>
    </message>
    <message>
        <source>Service Name</source>
        <translation>服务名称</translation>
    </message>
    <message>
        <source>TLS Security Settings</source>
        <translation>TLS 安全设置</translation>
    </message>
    <message>
        <source>When enabled, V2Ray will not check the validity of the TLS certificate provided by the remote host (the security is equivalent to plaintext)</source>
        <translation>启用时，V2Ray 将不会检查远端主机提供的 TLS 证书的有效性 (安全性等同于明文)</translation>
    </message>
    <message>
        <source>Allow insecure</source>
        <translation>允许不安全</translation>
    </message>
    <message>
        <source>Certificate</source>
        <translation>证书</translation>
    </message>
    <message>
        <source>Application layer protocol negotiation, clear text. Please separate them with commas.</source>
        <translation>应用层协议协商（明文）。请用英文逗号分隔多项。</translation>
    </message>
    <message>
        <source>Server name indication, clear text.</source>
        <translation>SNI (服务器名称指示)，明文。</translation>
    </message>
    <message>
        <source>TLS Camouflage Settings</source>
        <translation>TLS 伪装设置</translation>
    </message>
    <message>
        <source>Fragment</source>
        <translation>分片</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;TLS ClientHello fragmentation. The implementation (built-in / custom) and the &amp;quot;Keep Default&amp;quot; behaviour are configured in Settings &gt; Core.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;TLS ClientHello 分片。实现方式 (built-in / custom) 和 &amp;quot;Keep Default&amp;quot; (保持默认)行为在“设置 &gt; 核心”中配置。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;time format, like 500ms, 10ms etc&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;时间格式，如 500ms, 10ms 等&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Fallback Delay</source>
        <translation>回退延时</translation>
    </message>
    <message>
        <source>Enable TLS Record Fragment</source>
        <translation>启用 TLS 记录分片</translation>
    </message>
    <message>
        <source>TLS Tricks</source>
        <translation>TLS 技巧</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Mixed-case SNI to evade exact-match SNI filtering. The &amp;quot;Keep Default&amp;quot; behaviour is configured in Settings &gt; Core.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;混合大小写的 SNI 以规避精确匹配的 SNI 过滤。&amp;quot;Keep Default&amp;quot; (保持默认)的行为在“设置 &gt; 核心”中配置。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Reality public key. If not empty, turn TLS into REALITY.</source>
        <translation>Reality 公钥。若不空则 TLS 变为 REALITY。</translation>
    </message>
    <message>
        <source>Reality short id. Accept only one value.</source>
        <translation>Reality SID（短 ID）。 仅接受一个值。</translation>
    </message>
    <message>
        <source>Reality SID</source>
        <translation>Reality SID</translation>
    </message>
    <message>
        <source>Security Settings</source>
        <translation>安全设置</translation>
    </message>
    <message>
        <source>SNI</source>
        <translation>SNI</translation>
    </message>
    <message>
        <source>Fingerprint</source>
        <translation>指纹</translation>
    </message>
    <message>
        <source>ALPN</source>
        <translation>ALPN</translation>
    </message>
    <message>
        <source>Pinned Cert SHA256</source>
        <translation>固定的证书 SHA256</translation>
    </message>
    <message>
        <source>pinnedPeerCertSha256: hex SHA256 of the peer certificate (comma-separated for multiple). Replacement for allowInsecure.</source>
        <translation>pinnedPeerCertSha256：对端证书的十六进制 SHA256 (多个则用逗号间隔)。用于替代 allowInsecure。</translation>
    </message>
    <message>
        <source>Verify Cert Name</source>
        <translation>验证证书名称</translation>
    </message>
    <message>
        <source>verifyPeerCertByName: verify the peer certificate against this name instead of the SNI.</source>
        <translation>verifyPeerCertByName: 针对这个名称而不是 SNI 来验证对端证书。</translation>
    </message>
    <message>
        <source>Reality Pbk</source>
        <translation>Reality 公钥</translation>
    </message>
    <message>
        <source>Reality SpiderX</source>
        <translation>Reality SpiderX</translation>
    </message>
    <message>
        <source>Network Settings</source>
        <translation>网络设置</translation>
    </message>
    <message>
        <source>Host</source>
        <translation>主机</translation>
    </message>
    <message>
        <source>Headers</source>
        <translation>报头</translation>
    </message>
    <message>
        <source>Path</source>
        <translation>路径</translation>
    </message>
    <message>
        <source>EarlyData Length</source>
        <translation>EarlyData 长度</translation>
    </message>
    <message>
        <source>Multi Mode</source>
        <translation>多模式</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <source>X Padding Bytes</source>
        <translation>X 填充字节数</translation>
    </message>
    <message>
        <source>Server Max Header Bytes</source>
        <translation>服务器最大标头字节数</translation>
    </message>
    <message>
        <source>Padding Obfuscation</source>
        <translation>填充混淆</translation>
    </message>
    <message>
        <source>xPaddingObfsMode</source>
        <translation>xPaddingObfsMode</translation>
    </message>
    <message>
        <source>xPaddingMethod</source>
        <translation>xPaddingMethod</translation>
    </message>
    <message>
        <source>xPaddingPlacement</source>
        <translation>xPaddingPlacement</translation>
    </message>
    <message>
        <source>xPaddingKey</source>
        <translation>xPaddingKey</translation>
    </message>
    <message>
        <source>xPaddingHeader</source>
        <translation>xPaddingHeader</translation>
    </message>
    <message>
        <source>Upload / Stream Tuning</source>
        <translation>上传/串流调优</translation>
    </message>
    <message>
        <source>scMaxEachPostBytes</source>
        <translation>scMaxEachPostBytes</translation>
    </message>
    <message>
        <source>scMinPostsIntervalMs</source>
        <translation>scMinPostsIntervalMs</translation>
    </message>
    <message>
        <source>scMaxBufferedPosts</source>
        <translation>scMaxBufferedPosts</translation>
    </message>
    <message>
        <source>uplinkHTTPMethod</source>
        <translation>uplinkHTTPMethod</translation>
    </message>
    <message>
        <source>uplinkDataPlacement</source>
        <translation>uplinkDataPlacement</translation>
    </message>
    <message>
        <source>uplinkDataKey</source>
        <translation>uplinkDataKey</translation>
    </message>
    <message>
        <source>uplinkChunkSize</source>
        <translation>uplinkChunkSize</translation>
    </message>
    <message>
        <source>noGRPCHeader</source>
        <translation>noGRPCHeader</translation>
    </message>
    <message>
        <source>noSSEHeader</source>
        <translation>noSSEHeader</translation>
    </message>
    <message>
        <source>scStreamUpServerSecs</source>
        <translation>scStreamUpServerSecs</translation>
    </message>
    <message>
        <source>sessionPlacement</source>
        <translation>sessionPlacement</translation>
    </message>
    <message>
        <source>sessionKey</source>
        <translation>sessionKey</translation>
    </message>
    <message>
        <source>sessionIDTable</source>
        <translation>sessionIDTable</translation>
    </message>
    <message>
        <source>sessionIDLength</source>
        <translation>sessionIDLength</translation>
    </message>
    <message>
        <source>seqPlacement</source>
        <translation>seqPlacement</translation>
    </message>
    <message>
        <source>seqKey</source>
        <translation>seqKey</translation>
    </message>
    <message>
        <source>Download Settings</source>
        <translation>下载设置</translation>
    </message>
    <message>
        <source>Xmux</source>
        <translation>Xmux</translation>
    </message>
    <message>
        <source>maxConcurrency</source>
        <translation>maxConcurrency</translation>
    </message>
    <message>
        <source>maxConnections</source>
        <translation>maxConnections</translation>
    </message>
    <message>
        <source>hMaxRequestTimes</source>
        <translation>hMaxRequestTimes</translation>
    </message>
    <message>
        <source>hMaxReusableSecs</source>
        <translation>hMaxReusableSecs</translation>
    </message>
    <message>
        <source>cMaxReuseTimes</source>
        <translation>cMaxReuseTimes</translation>
    </message>
    <message>
        <source>hKeepAlivePeriod</source>
        <translation>hKeepAlivePeriod</translation>
    </message>
    <message>
        <source>Custom (%1 outbound)</source>
        <translation>自定义 (%1 出站)</translation>
    </message>
    <message>
        <source>Custom (%1 config)</source>
        <translation>自定义 (%1 配置)</translation>
    </message>
    <message>
        <source>Custom (Xray outbound)</source>
        <translation>自定义 (Xray 出站)</translation>
    </message>
    <message>
        <source>Custom (Xray config)</source>
        <translation>自定义 (Xray 配置)</translation>
    </message>
    <message>
        <source>Extra Core</source>
        <translation>额外核心</translation>
    </message>
    <message>
        <source>Already set</source>
        <translation>已设置</translation>
    </message>
    <message>
        <source>JSON: %1
%2</source>
        <translation>JSON: %1
%2</translation>
    </message>
    <message>
        <source>Xmux Reuse</source>
        <translation>Xmux 重用</translation>
    </message>
    <message>
        <source>XHTTP mode: auto usually uses packet-up, REALITY uses stream-one, and REALITY with downloadSettings uses stream-up. downloadSettings is removed when saving stream-one mode.</source>
        <translation>XHTTP 模式: auto 通常使用 packet-up,  REALITY 使用 stream-one, 而带 downloadSettings 的 REALITY 使用 stream-up。在保存 stream-one 模式时 downloadSettings 会被移除。</translation>
    </message>
    <message>
        <source>Range of extra XHTTP padding bytes. Default: 100-1000. If set, both bounds must be positive.</source>
        <translation>额外 XHTTP 填充字节的范围。默认: 100-1000。 如果设置，则上下限界都必须为正数。</translation>
    </message>
    <message>
        <source>Maximum request header size accepted by the server. Default: 8192.</source>
        <translation>服务器接受的最大请求标头大小。默认: 8192。</translation>
    </message>
    <message>
        <source>Enable Padding Obfuscation</source>
        <translation>启用填充混淆</translation>
    </message>
    <message>
        <source>Enable custom X-Padding placement, key, header, and method. When disabled, the client uses Referer?...x_padding and the server uses X-Padding.</source>
        <translation>启用自定义 X-Padding placement (位置)、key (键名)、header (标头)和 method (方法)。 禁用时，客户端使用 Referer?...x_padding，而服务器使用 X-Padding。</translation>
    </message>
    <message>
        <source>Padding Method</source>
        <translation>填充方法</translation>
    </message>
    <message>
        <source>Padding value format: repeat-x or tokenish. Default: repeat-x.</source>
        <translation>Padding (填充)值格式: repeat-x 或 tokenish 。默认: repeat-x。</translation>
    </message>
    <message>
        <source>Padding Placement</source>
        <translation>填充位置</translation>
    </message>
    <message>
        <source>Where X-Padding is sent: queryInHeader, cookie, header, or query. Default: queryInHeader.</source>
        <translation>发送 X-Padding 的位置: queryInHeader, cookie, header 或 query。默认: queryInHeader。</translation>
    </message>
    <message>
        <source>Padding Key</source>
        <translation>填充键名</translation>
    </message>
    <message>
        <source>Query or cookie key for X-Padding, and query key inside queryInHeader. Default: x_padding.</source>
        <translation>X-Padding 使用的查询或 cookie 键，以及 queryInHeader 内的查询参数键。默认: x_padding.</translation>
    </message>
    <message>
        <source>Padding Header</source>
        <translation>填充标头</translation>
    </message>
    <message>
        <source>Header name used by header or queryInHeader padding. Default: X-Padding.</source>
        <translation>header 或 queryInHeader padding (填充)使用的标头名称。默认: X-Padding。</translation>
    </message>
    <message>
        <source>Max Post Bytes</source>
        <translation>最大 Post 字节数</translation>
    </message>
    <message>
        <source>Packet-up upload POST size: client split size and server reject limit. Default: 1000000.</source>
        <translation>Packet-up (上行数据包)模式的上传 POST 大小: 客户端分片大小 (client split size)和服务器拒绝上限 (server reject limit)。 默认: 1000000。</translation>
    </message>
    <message>
        <source>Min Post Interval</source>
        <translation>最小 Post 间隔</translation>
    </message>
    <message>
        <source>Packet-up client interval between upload POST requests per proxied connection, in milliseconds. Default: 30.</source>
        <translation>Packet-up (上行数据)模式下，每个代理的连接的上传 POST 请求之间的客户端间隔时间，以毫秒为单位。 默认: 30。</translation>
    </message>
    <message>
        <source>Max Buffered Posts</source>
        <translation>最大缓冲的 POST 请求数</translation>
    </message>
    <message>
        <source>Packet-up server upload queue size per proxied connection. Default: 30.</source>
        <translation>Packet-up (上行数据)模式下，每个代理的连接的服务器上传队列大小。 默认: 30。</translation>
    </message>
    <message>
        <source>Uplink HTTP Method</source>
        <translation>上行 HTTP 方法</translation>
    </message>
    <message>
        <source>HTTP method for upload requests. Default: POST. Xray uppercases it; GET is accepted only in packet-up mode.</source>
        <translation>上传请求使用的 HTTP 方法。 默认： POST 。Xray 会把它转为大写； 仅在 Packet-up 模式中才接受 GET 。</translation>
    </message>
    <message>
        <source>Uplink Data Placement</source>
        <translation>上行数据位置</translation>
    </message>
    <message>
        <source>Where upload data is placed. Default: auto. cookie/header are accepted only in packet-up mode; auto/body are always accepted.</source>
        <translation>放置上传数据的位置。 默认： auto 。 cookie/header 仅在 packet-up 模式中被接受； auto/body 则始终被接受。</translation>
    </message>
    <message>
        <source>Uplink Data Key</source>
        <translation>上行数据键</translation>
    </message>
    <message>
        <source>Key used when upload data is placed in a cookie or header. Defaults: X-Data for auto/header, x_data for cookie.</source>
        <translation>当上传数据被放在 cookie 或 header 中时使用的键。 默认： X-Data 用于 auto/header, x_data 用于 cookie。</translation>
    </message>
    <message>
        <source>Uplink Chunk Size</source>
        <translation>上行分块大小</translation>
    </message>
    <message>
        <source>Packet-up header/cookie payload chunk size range. Defaults: cookie 2-3 KiB, header 3-4 KB, otherwise scMaxEachPostBytes. Values below 64 are clamped.</source>
        <translation>Packet-up 中 header/cookie 的载荷(payload)分块大小范围。默认： cookie 为 2-3 KiB， header  为 3-4 KB，其他情况为 scMaxEachPostBytes。 低于 64 的值会被按 64 处理。</translation>
    </message>
    <message>
        <source>No GRPC Headers</source>
        <translation>无 GRPC 标头</translation>
    </message>
    <message>
        <source>Client-side stream-up/stream-one option: do not add Content-Type: application/grpc to upload requests.</source>
        <translation>客户端的 stream-up/stream-one 选项： 不向上传请求添加 Content-Type: application/grpc 。</translation>
    </message>
    <message>
        <source>No SSE Headers</source>
        <translation>无 SSE 标头</translation>
    </message>
    <message>
        <source>Server-side downstream/stream-one option: do not send Content-Type: text/event-stream in responses.</source>
        <translation>服务器端 downstream/stream-one 选项： 不在响应中发送 Content-Type: text/event-stream 。</translation>
    </message>
    <message>
        <source>Stream Up Server Seconds</source>
        <translation>Stream-up (上行流)服务器秒数</translation>
    </message>
    <message>
        <source>Stream-up server interval for periodic xPaddingBytes keepalive writes, in seconds. Default: 20-80; values &lt;= 0 disable periodic padding.</source>
        <translation>Stream-up (上行流)模式下，服务器定期写入 xPaddingBytes 的 keepalive (保活)数据的时间间隔, 以秒为单位。 默认： 20-80； 不大于 0 的值禁止周期性填充。</translation>
    </message>
    <message>
        <source>Session Placement</source>
        <translation>会话位置</translation>
    </message>
    <message>
        <source>Where the XHTTP session id is sent: path, cookie, header, or query. Default: path.</source>
        <translation>发送 XHTTP session id (会话ID) 的位置： path, cookie, header 或 query。默认： path。</translation>
    </message>
    <message>
        <source>Session Key</source>
        <translation>会话键</translation>
    </message>
    <message>
        <source>Key used for the session id outside path placement. Defaults: x_session for cookie/query, X-Session for header.</source>
        <translation>在 path 外用于放置会话 ID 的键。默认： x_session 用于 cookie/query, X-Session 用于 header。</translation>
    </message>
    <message>
        <source>Session ID Table</source>
        <translation>会话 ID 表</translation>
    </message>
    <message>
        <source>Charset for generating the XHTTP session id: a predefined name (number, hex, HEX, base36, BASE36, alphabet, ALPHABET, Alphabet, Base62) or a literal ASCII string. Empty falls back to a random UUID.</source>
        <translation>用于生成 XHTTP 会话 Id 的字符集： 一个预定义的名称(数字, hex, HEX, base36, BASE36, alphabet, ALPHABET, Alphabet, Base62) 或一个字面的 ASCII 字符串。空白则回退为一个随机 UUID。</translation>
    </message>
    <message>
        <source>Session ID Length</source>
        <translation>会话 ID 长度</translation>
    </message>
    <message>
        <source>Length range of the generated session id, e.g. 8-16. Only used together with sessionIDTable; &quot;from&quot; must be greater than 0.</source>
        <translation>生成的会话 ID 的长度范围，例如 8-16。仅配合 sessionIDTable 一起使用； “from” (从)必须大于 0。</translation>
    </message>
    <message>
        <source>Sequence Placement</source>
        <translation>序列位置</translation>
    </message>
    <message>
        <source>Where the XHTTP packet sequence is sent: path, cookie, header, or query. Default: path.</source>
        <translation>发送 XHTTP 数据包序列的位置： path, cookie, header 或 query。 默认： path。</translation>
    </message>
    <message>
        <source>Sequence Key</source>
        <translation>序列键</translation>
    </message>
    <message>
        <source>Key used for the sequence value outside path placement. Defaults: x_seq for cookie/query, X-Seq for header.</source>
        <translation>在 path (路径)外用于放置序列值的键。 默认： x_seq 用于 cookie/query， X-Seq 用于 header。</translation>
    </message>
    <message>
        <source>Max Concurrency</source>
        <translation>最大并发数</translation>
    </message>
    <message>
        <source>Client-side H2/H3 xmux limit: maximum concurrent uses per underlying connection. Cannot be used together with maxConnections. Empty xmux defaults to 1-1.</source>
        <translation>客户端侧 H2/H3 xmux 限制： 每个底层连接使用的最大并发用量。 不能与 maxConnections 一起使用。空 xmux 则默认为 1-1。</translation>
    </message>
    <message>
        <source>Max Connections</source>
        <translation>最大连接数</translation>
    </message>
    <message>
        <source>Client-side H2/H3 xmux limit: maximum parallel underlying connections. Cannot be used together with maxConcurrency.</source>
        <translation>客户端侧 H2/H3 xmux 限制： 最大并行的底层连接数。 不能与 maxConcurrency 一起使用。</translation>
    </message>
    <message>
        <source>Max Reuse times</source>
        <translation>最大复用次数</translation>
    </message>
    <message>
        <source>Client-side H2/H3 xmux limit: maximum times an underlying connection may be selected for reuse.</source>
        <translation>客户端侧 H2/H3 xmux 限制： 单个底层连接可被选择重复使用的最大次数。</translation>
    </message>
    <message>
        <source>Max Request Times</source>
        <translation>最大请求次数</translation>
    </message>
    <message>
        <source>Client-side H2/H3 xmux limit: maximum upload/download requests per underlying connection. Empty xmux defaults to 600-900.</source>
        <translation>客户端侧 H2/H3 xmux 限制： 每个底层连接的最大 upload/download (上传/下载)请求数。 空 xmux 默认为 600-900。</translation>
    </message>
    <message>
        <source>Max Reusable Secs</source>
        <translation>最大可重用秒数</translation>
    </message>
    <message>
        <source>Client-side H2/H3 xmux limit: maximum seconds an underlying connection stays reusable. Empty xmux defaults to 1800-3000.</source>
        <translation>客户端侧 H2/H3 xmux 限制： 一个底层连接保持可复用的最多秒数。 空 xmux 则默认为 1800-3000。</translation>
    </message>
    <message>
        <source>Keep Alive Period</source>
        <translation>保活周期</translation>
    </message>
    <message>
        <source>Client-side H2/H3 keepalive interval for underlying connections, in seconds. 0 uses Xray defaults; negative values disable keepalive where supported.</source>
        <translation>客户端侧底层 H2/H3 连接的 keepalive (保持活动)间隔，以秒为单位。 0 使用 Xray 默认值； 负值在支持的情况下会禁用保活功能。</translation>
    </message>
    <message>
        <source>Client-only downstream streamSettings, including address and port, for an independent download path. Not allowed in stream-one and removed when saving stream-one mode.</source>
        <translation>仅客户端使用的 downstream (下行) streamSettings，包括独立下载路径的地址和端口。在 stream-one 中不允许使用该选项，并在保存 stream-one 模式时会被移除该选项。</translation>
    </message>
    <message>
        <source>XHTTP maxConnections cannot be specified together with maxConcurrency.</source>
        <translation>XHTTP 中 maxConnections 不能与 maxConcurrency 同时指定。</translation>
    </message>
</context>
<context>
    <name>DialogEndpointDetails</name>
    <message>
        <source>Endpoint Details</source>
        <translation>端点细节</translation>
    </message>
    <message>
        <source>Endpoint — %1</source>
        <translation>端点 — %1</translation>
    </message>
    <message>
        <source>State</source>
        <translation>状态</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <source>Server</source>
        <translation>服务器</translation>
    </message>
    <message>
        <source>Transport</source>
        <translation>传输</translation>
    </message>
    <message>
        <source>Cipher</source>
        <translation>密码算法</translation>
    </message>
    <message>
        <source>MTU</source>
        <translation>MTU</translation>
    </message>
    <message>
        <source>Connected for</source>
        <translation>连接时长</translation>
    </message>
    <message>
        <source>IPv4 address</source>
        <translation>IPv4 地址</translation>
    </message>
    <message>
        <source>IPv6 address</source>
        <translation>IPv6 地址</translation>
    </message>
    <message>
        <source>All domains — every DNS query goes through this tunnel</source>
        <translation>所有域名 — 所有 DNS 查询均通过这个隧道</translation>
    </message>
    <message>
        <source>Routes through this tunnel</source>
        <translation>通过这个隧道路由</translation>
    </message>
    <message>
        <source>Kept outside this tunnel</source>
        <translation>保持在这个隧道外</translation>
    </message>
    <message>
        <source>DNS servers pushed by the server</source>
        <translation>由服务器推送的 DNS 服务器</translation>
    </message>
    <message>
        <source>Domains routed to this tunnel</source>
        <translation>路由转发到这个隧道的域名</translation>
    </message>
    <message>
        <source>No longer running</source>
        <translation>不再运行</translation>
    </message>
</context>
<context>
    <name>DialogHotkey</name>
    <message>
        <source>Hotkey</source>
        <translation>热键</translation>
    </message>
    <message>
        <source>Global</source>
        <translation>全局</translation>
    </message>
    <message>
        <source>Trigger main window</source>
        <translation>显示/隐藏主窗口</translation>
    </message>
    <message>
        <source>Show groups</source>
        <translation>显示分组</translation>
    </message>
    <message>
        <source>Show routes</source>
        <translation>显示路由</translation>
    </message>
    <message>
        <source>Proxy mode</source>
        <translation>代理模式</translation>
    </message>
    <message>
        <source>Toggle System Proxy</source>
        <translation>切换系统代理</translation>
    </message>
    <message>
        <source>Shortcuts</source>
        <translation>快捷键</translation>
    </message>
</context>
<context>
    <name>DialogManageGroups</name>
    <message>
        <source>Groups</source>
        <translation>分组</translation>
    </message>
    <message>
        <source>New group</source>
        <translation>新建分组</translation>
    </message>
    <message>
        <source>Update all subscriptions</source>
        <translation>更新所有订阅</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>确认</translation>
    </message>
    <message>
        <source>Update all subscriptions?</source>
        <translation>更新所有订阅吗？</translation>
    </message>
</context>
<context>
    <name>DialogManageRoutes</name>
    <message>
        <source>Routes</source>
        <translation>路由</translation>
    </message>
    <message>
        <source>Common</source>
        <translation>通用</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Used as default strategy when resolving outbound/dns server Domain addresses&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;解析出站/DNS 服务器域地址时，作为默认策略使用&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Default Domain Strategy</source>
        <translation>默认域策略</translation>
    </message>
    <message>
        <source>Remote Rule-set Mirror</source>
        <translation>远程规则集镜像</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;If not empty, resolves domains in requests according to the strategy&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;如果不为空，则根据策略解析请求中的域&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Resolve Domain Strategy</source>
        <translation>解析域策略</translation>
    </message>
    <message>
        <source>Routing Profile</source>
        <translation>路由配置档</translation>
    </message>
    <message>
        <source>GitHub</source>
        <translation>GitHub</translation>
    </message>
    <message>
        <source>jsDelivr(Cloudflare)</source>
        <translation>jsDelivr(Cloudflare)</translation>
    </message>
    <message>
        <source>jsDelivr(Gcore)</source>
        <translation>jsDelivr(Gcore)</translation>
    </message>
    <message>
        <source>jsDelivr(Quantil)</source>
        <translation>jsDelivr(Quantil)</translation>
    </message>
    <message>
        <source>jsDelivr(Fastly)</source>
        <translation>jsDelivr(Fastly)</translation>
    </message>
    <message>
        <source>jsDelivr(CDN)</source>
        <translation>jsDelivr(CDN)</translation>
    </message>
    <message>
        <source>Hijack</source>
        <translation>劫持</translation>
    </message>
    <message>
        <source>DNS Server</source>
        <translation>DNS 服务器</translation>
    </message>
    <message>
        <source>Enable</source>
        <translation>启用</translation>
    </message>
    <message>
        <source>How does it work?</source>
        <translation>它是如何运作的？</translation>
    </message>
    <message>
        <source>Listen Port</source>
        <translation>监听端口</translation>
    </message>
    <message>
        <source>IPv4 Response</source>
        <translation>IPv4 响应</translation>
    </message>
    <message>
        <source>IPv6 Response</source>
        <translation>IPv6 响应</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Following format should be used:&lt;br/&gt;domain:a.com&lt;/p&gt;&lt;p&gt;suffix:a.com&lt;/p&gt;&lt;p&gt;regex:someregex&lt;/p&gt;&lt;p&gt;rule_set:nameOfRuleSet&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;应使用以下格式：&lt;br/&gt;domain:a.com&lt;/p&gt;&lt;p&gt;suffix:a.com&lt;/p&gt;&lt;p&gt;regex:someregex&lt;/p&gt;&lt;p&gt;rule_set:nameOfRuleSet&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>规则</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether to listen on 0.0.0.0 so that other devices on LAN can use this server&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;是否监听 0.0.0.0 以便局域网上的其他设备可使用这个服务器&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Allow Lan to Connect</source>
        <translation>允许局域网连接</translation>
    </message>
    <message>
        <source>Redirect Settings</source>
        <translation>重定向设置</translation>
    </message>
    <message>
        <source>Listen Address</source>
        <translation>监听地址</translation>
    </message>
    <message>
        <source>Warp</source>
        <translation>Warp</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enables the following config to be used as egress, useful for bypassing services restrciting non-warp VPNs&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用以下配置作为出口(egress)使用，对于绕过限制非 warp VPNs 的服务很有用&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable Warp</source>
        <translation>启用 Warp</translation>
    </message>
    <message>
        <source>Endpoint</source>
        <translation>端点</translation>
    </message>
    <message>
        <source>Private Key</source>
        <translation>私钥</translation>
    </message>
    <message>
        <source>Public Key</source>
        <translation>公钥</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Gets a new config from cloudflare API&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;从 cloudflare API 获取一个新配置&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Generate Warp Config</source>
        <translation>生成 Warp 配置</translation>
    </message>
    <message>
        <source>Reserved</source>
        <translation>保留</translation>
    </message>
    <message>
        <source>WireGuard runs over UDP. MASQUE tunnels over HTTP/3 or HTTP/2 and passes networks that block WireGuard.</source>
        <translation>WireGuard 基于 UDP 运行。MASQUE 通过 HTTP/3 或 HTTP/2 建立隧道，并穿透阻止 WireGuard 的网络。</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <source>Interface Addresses</source>
        <translation>接口地址</translation>
    </message>
    <message>
        <source>Base64 DER of the server&apos;s public key. When set, it pins the server certificate.</source>
        <translation>服务器公钥的 Base64 DER 编码。设置时，它会固定服务器证书。</translation>
    </message>
    <message>
        <source>Peer Public Key</source>
        <translation>对端公钥</translation>
    </message>
    <message>
        <source>HTTP/3 runs over UDP; HTTP/2 runs over TLS on TCP and works where UDP is blocked.</source>
        <translation>HTTP/3 基于 UDP 运行；HTTP/2 基于 TCP 上的 TLS 运行并在 UDP 被阻断的情况下也可工作。</translation>
    </message>
    <message>
        <source>HTTP Version</source>
        <translation>HTTP 版本</translation>
    </message>
    <message>
        <source>HTTP/3 (fallback to HTTP/2)</source>
        <translation>HTTP/3 (回退到 HTTP/2)</translation>
    </message>
    <message>
        <source>HTTP/3 only</source>
        <translation>仅 HTTP/3</translation>
    </message>
    <message>
        <source>Cloudflare API domains to try, in order, when generating a WARP config</source>
        <translation>当生成 WARP 配置时，按顺序尝试的 Cloudflare API 域名</translation>
    </message>
    <message>
        <source>Registration Domains…</source>
        <translation>注册域名...</translation>
    </message>
    <message>
        <source>DNS</source>
        <translation>DNS</translation>
    </message>
    <message>
        <source>Simple DNS Settings</source>
        <translation>简易 DNS 设置</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Local DNS can not be used in some configurations, you will have to set an ip here to be used as local dns in such situations&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在某些配置中无法使用本地 DNS，在这种情况下您必须在这里设置一个 IP 作为本地 DNS 使用&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Local Override</source>
        <translation>本地覆盖</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When enabled, domains destined for direct outbound will also be resolved using direct dns&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用时，目标为直接出站的域也将使用直接 DNS 进行解析&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable DNS Routing</source>
        <translation>启用 DNS 路由</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Answer A/AAAA queries from the system hosts file before consulting any DNS server. Only domains actually listed in the file are affected.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在查询任何 DNS 服务器前，先从系统 hosts 文件回答 A/AAAA 查询。只有该文件中实际列出的域名会受到影响。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Respect Hosts File</source>
        <translation>尊重 Hosts 文件</translation>
    </message>
    <message>
        <source>Predefined Answers</source>
        <translation>预定义回答</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;examples:&lt;br/&gt;tls://8.8.8.8&lt;br/&gt;https://domain/path&lt;/p&gt;&lt;p&gt;tcp://8.8.8.8:1234&lt;/p&gt;&lt;p&gt;dhcp://auto&lt;/p&gt;&lt;p&gt;h3://domain/path&lt;/p&gt;&lt;p&gt;quic://domain:4632&lt;/p&gt;&lt;p&gt;etc&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;示例:&lt;br/&gt;tls://8.8.8.8&lt;br/&gt;https://domain/path&lt;/p&gt;&lt;p&gt;tcp://8.8.8.8:1234&lt;/p&gt;&lt;p&gt;dhcp://auto&lt;/p&gt;&lt;p&gt;h3://domain/path&lt;/p&gt;&lt;p&gt;quic://domain:4632&lt;/p&gt;&lt;p&gt;等&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Remote DNS</source>
        <translation>远程 DNS</translation>
    </message>
    <message>
        <source>Answer AAAA queries sent to this server with an empty result.</source>
        <translation>用空结果回答发送到这个服务器的 AAAA 查询。</translation>
    </message>
    <message>
        <source>Disable IPv6</source>
        <translation>禁用 IPv6</translation>
    </message>
    <message>
        <source>This is especially important and it is recommended to use the default value of &quot;localhost&quot;.
If the default value does not work, try changing it to &quot;223.5.5.5&quot;.
For more information, see the document &quot;Configuration/DNS&quot;.</source>
        <translation>这个尤其重要，建议使用默认值 &quot;localhost&quot;。
如果默认值不起作用，请尝试改为 &quot;223.5.5.5&quot;。
更多信息，请参阅文档 &quot;配置/DNS&quot;。</translation>
    </message>
    <message>
        <source>Direct DNS</source>
        <translation>直连 DNS</translation>
    </message>
    <message>
        <source>Default DNS server</source>
        <translation>默认 DNS 服务器</translation>
    </message>
    <message>
        <source>Enable FakeIP</source>
        <translation>启用 FakeIP</translation>
    </message>
    <message>
        <source>Hand out no fake IPv6 addresses; AAAA queries are answered empty.</source>
        <translation>不发出伪 IPv6 地址； AAAA 查询会被回答空结果。</translation>
    </message>
    <message>
        <source>FakeIP Disable IPv6</source>
        <translation>FakeIP 禁用 IPv6</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Cache behaviour, optimistic cache and query timeout.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;缓存行为，乐观缓存和查询超时。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Advanced Settings</source>
        <translation>高级设置</translation>
    </message>
    <message>
        <source>Use Custom DNS Object</source>
        <translation>使用自定义 DNS 对象</translation>
    </message>
    <message>
        <source>Edit DNS Object</source>
        <translation>编辑 DNS 对象</translation>
    </message>
    <message>
        <source>Route</source>
        <translation>路由</translation>
    </message>
    <message>
        <source>Routing Profiles</source>
        <translation>路由配置档</translation>
    </message>
    <message>
        <source>New</source>
        <translation>新建</translation>
    </message>
    <message>
        <source>Clone</source>
        <translation>克隆</translation>
    </message>
    <message>
        <source>Export</source>
        <translation>导出</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>导入</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Update the selected remote routing profile, or all of them</source>
        <translation>更新选定的远程路由配置档，或它们全部</translation>
    </message>
    <message>
        <source>Update</source>
        <translation>更新</translation>
    </message>
    <message>
        <source>WARP Registration Domains</source>
        <translation>WARP 注册域名</translation>
    </message>
    <message>
        <source>One domain per line. They are tried in order and the first one that accepts the registration is used. Leave empty to use %1.</source>
        <translation>每行一个域名。它们将按顺序尝试并使用第一个接受注册的域名。留空则使用 %1。</translation>
    </message>
    <message>
        <source>Invalid state</source>
        <translation>无效状态</translation>
    </message>
    <message>
        <source>The list of routing profiles is empty, this should be an unreachable state, crashes may occur now</source>
        <translation>路由配置档的列表为空，这应该是一个不可达的状态，现在可能会发生崩溃</translation>
    </message>
    <message>
        <source>Predefined DNS Answers</source>
        <translation>预定义的 DNS 回答</translation>
    </message>
    <message>
        <source>Enable predefined answers</source>
        <translation>启用预定义回答</translation>
    </message>
    <message>
        <source>One entry per line, hosts-file syntax:
127.0.0.1 localhost
10.0.0.5 nas.lan files.lan
::1 localhost6
A domain listed with only one address family is answered NXDOMAIN for the other, so the override cannot be bypassed.</source>
        <translation>每行一条记录，hosts 文件语法:
127.0.0.1 localhost
10.0.0.5 nas.lan files.lan
::1 localhost6
一个仅配置了一个地址族的域名，对于其它的地址族会回答 NXDOMAIN (Non-Existent Domain 不存在域名)，因此无法绕过该覆盖设置。</translation>
    </message>
    <message>
        <source>Invalid input</source>
        <translation>无效输入</translation>
    </message>
    <message>
        <source>Not a valid predefined DNS entry:
</source>
        <translation>不是有效的预定义 DNS 条目:
</translation>
    </message>
    <message>
        <source>Advanced DNS Settings</source>
        <translation>高级 DNS 设置</translation>
    </message>
    <message>
        <source>Cache Capacity</source>
        <translation>缓存容量</translation>
    </message>
    <message>
        <source>10s (default)</source>
        <translation>10s (10秒，默认)</translation>
    </message>
    <message>
        <source>Query Timeout</source>
        <translation>查询超时</translation>
    </message>
    <message>
        <source>Optimistic Cache</source>
        <translation>乐观缓存</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Keep serving an expired answer while it is refreshed in the background. Cannot be combined with Disable Cache or Disable Expire.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;后台刷新的同时，持续提供已过期的应答。 不能与“禁用缓存”或“禁用有效期”一起使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>3d (default)</source>
        <translation>3d (3天，默认)</translation>
    </message>
    <message>
        <source>Optimistic Timeout</source>
        <translation>乐观超时</translation>
    </message>
    <message>
        <source>Disable Cache</source>
        <translation>禁用缓存</translation>
    </message>
    <message>
        <source>Disable Expire</source>
        <translation>禁用有效期</translation>
    </message>
    <message>
        <source>Save Cache To File</source>
        <translation>保存缓存到文件</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Write cached DNS answers and FakeIP mappings to the core&apos;s cache file so they survive a restart. Off by default: each entry costs a disk write.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;将缓存的 DNS 应答和 FakeIP 映射写到核心的缓存文件，以便在重启后仍然存在。默认关闭：每个条目都会耗费一次磁盘写入。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Reverse Mapping</source>
        <translation>反向映射</translation>
    </message>
    <message>
        <source>Invalid settings</source>
        <translation>无效设置</translation>
    </message>
    <message>
        <source>Not a valid duration: </source>
        <translation>不是有效的时长: </translation>
    </message>
    <message>
        <source>
Use a number followed by ns, us, ms, s, m, h or d.</source>
        <translation>
使用后跟 ns, us, ms, s, m, h 或 d 的数字(分别代表纳秒、微秒、秒、分、小时、天)。</translation>
    </message>
    <message>
        <source>DNS Object</source>
        <translation>DNS 对象</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>格式化</translation>
    </message>
    <message>
        <source>The DNS object is not a valid JSON object</source>
        <translation>DNS 对象不是有效的 JSON 对象</translation>
    </message>
    <message>
        <source>Document</source>
        <translation>文档</translation>
    </message>
    <message>
        <source>Generating config...</source>
        <translation>正在生成配置…</translation>
    </message>
    <message>
        <source>Failed to generate warp config</source>
        <translation>生成 warp 配置失败</translation>
    </message>
    <message>
        <source>Success!</source>
        <translation>成功!</translation>
    </message>
    <message>
        <source>Routing profile cannot be empty</source>
        <translation>路由配置档不能为空</translation>
    </message>
    <message>
        <source>DNS Rules are not valid</source>
        <translation>DNS 规则无效</translation>
    </message>
    <message>
        <source>Structured profile</source>
        <translation>结构化配置档</translation>
    </message>
    <message>
        <source>Raw profile</source>
        <translation>原始配置档</translation>
    </message>
    <message>
        <source>Remote profile</source>
        <translation>远程配置档</translation>
    </message>
    <message>
        <source>Exported with warnings</source>
        <translation>带警告导出</translation>
    </message>
    <message>
        <source>Copied!</source>
        <translation>已复制!</translation>
    </message>
    <message>
        <source>Add remote routing profiles</source>
        <translation>添加远程路由配置档</translation>
    </message>
    <message>
        <source>No valid remote routing profiles in the link.</source>
        <translation>链接中无有效的远程路由配置档。</translation>
    </message>
    <message>
        <source>Add these remote routing profiles?</source>
        <translation>添加这些远程路由配置档吗?</translation>
    </message>
    <message>
        <source>auto update</source>
        <translation>自动更新</translation>
    </message>
    <message>
        <source>On</source>
        <translation>开启</translation>
    </message>
    <message>
        <source>Off</source>
        <translation>关闭</translation>
    </message>
    <message>
        <source>a routing rule list</source>
        <translation>路由规则列表</translation>
    </message>
    <message>
        <source>routing profile &quot;%1&quot;</source>
        <translation>路由配置档 &quot;%1&quot;</translation>
    </message>
    <message>
        <source>Import %1 from the clipboard?</source>
        <translation>从剪贴板中导入 %1 吗?</translation>
    </message>
    <message>
        <source>Note:</source>
        <translation>备注:</translation>
    </message>
    <message>
        <source>Import from clipboard</source>
        <translation>从剪贴板导入</translation>
    </message>
    <message>
        <source>Import routing profile</source>
        <translation>导入路由配置档</translation>
    </message>
    <message>
        <source>Paste a Throne route link, a remoteRoute link, a base64 blob, or a JSON rule array</source>
        <translation>粘贴一个 Throne 路由链接，一个 remoteRoute 链接，一个 base64 blob 或者一个 JSON 规则数组</translation>
    </message>
    <message>
        <source>Could not import this routing profile:
</source>
        <translation>无法导入这个路由配置档:
</translation>
    </message>
    <message>
        <source>Imported with warnings</source>
        <translation>带警告导入</translation>
    </message>
    <message>
        <source>Invalid operation</source>
        <translation>无效操作</translation>
    </message>
    <message>
        <source>Routing Profiles cannot be empty, try adding another profile or editing this one</source>
        <translation>路由配置档不能为空，请尝试添加另一个配置档或编辑这个配置档</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>Cancelling...</source>
        <translation>正在取消...</translation>
    </message>
    <message>
        <source>Update selected</source>
        <translation>更新选定项</translation>
    </message>
    <message>
        <source>Update all</source>
        <translation>更新全部</translation>
    </message>
    <message>
        <source>No remote profiles</source>
        <translation>无远程路由配置档</translation>
    </message>
    <message>
        <source>There are no remote routing profiles to update.</source>
        <translation>没有要更新的远程路由配置档。</translation>
    </message>
    <message>
        <source>Updating...</source>
        <translation>正在更新...</translation>
    </message>
    <message>
        <source>Updating (%1 / %2)</source>
        <translation>正在更新 (%1 / %2)</translation>
    </message>
    <message>
        <source>Update cancelled</source>
        <translation>更新已取消</translation>
    </message>
    <message>
        <source>Cancelled: updated %1 of %2, %3 failed.</source>
        <translation>已取消: 更新了 %1 / %2 个,失败了 %3 个。</translation>
    </message>
    <message>
        <source>Update complete</source>
        <translation>更新完成</translation>
    </message>
    <message>
        <source>Updated %1 remote routing profile(s).</source>
        <translation>更新了 %1 个远程路由配置档。</translation>
    </message>
    <message>
        <source>Update finished with errors</source>
        <translation>带错误完成更新</translation>
    </message>
    <message>
        <source>Updated %1, failed %2:
%3</source>
        <translation>更新了 %1, 失败了 %2:
%3</translation>
    </message>
</context>
<context>
    <name>DialogOtpManager</name>
    <message>
        <source>OTP Manager</source>
        <translation>OTP 管理器</translation>
    </message>
    <message>
        <source>Import</source>
        <translation>导入</translation>
    </message>
    <message>
        <source>Scan QR Code</source>
        <translation>扫描二维码</translation>
    </message>
    <message>
        <source>OTP</source>
        <translation>OTP</translation>
    </message>
    <message>
        <source>No usable code; check the secret.</source>
        <translation>没有可用的代码；检查一下密钥。</translation>
    </message>
    <message>
        <source>Copied</source>
        <translation>已复制</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>确认</translation>
    </message>
    <message>
        <source>Delete &quot;%1&quot;? Its secret cannot be recovered.</source>
        <translation>删除 &quot;%1&quot; 吗? 它的密钥不能被恢复。</translation>
    </message>
    <message>
        <source>Failed to store the OTP profile.</source>
        <translation>存储 OTP 配置档失败。</translation>
    </message>
    <message>
        <source>This one as otpauth:// link and QR</source>
        <translation>这一个为 otpauth:// 链接和 QR 形式</translation>
    </message>
    <message>
        <source>All as otpauth-migration:// link and QR</source>
        <translation>全部为 otpauth-migration:// 链接和 QR 形式</translation>
    </message>
    <message>
        <source>All as JSON file...</source>
        <translation>全部为 JSON 文件...</translation>
    </message>
    <message>
        <source>Add manually...</source>
        <translation>手动添加...</translation>
    </message>
    <message>
        <source>From link or text...</source>
        <translation>来自链接或文本...</translation>
    </message>
    <message>
        <source>Import OTP</source>
        <translation>导入 OTP</translation>
    </message>
    <message>
        <source>Paste otpauth:// links, an otpauth-migration:// link, a JSON export, or just a base32 secret.</source>
        <translation>粘贴（多个） otpauth:// 链接，一个 otpauth-migration:// 链接、一个 JSON 导出或就一个 base32 密钥。</translation>
    </message>
    <message>
        <source>From clipboard</source>
        <translation>来自剪贴板</translation>
    </message>
    <message>
        <source>From QR image file...</source>
        <translation>来自 QR 图像文件...</translation>
    </message>
    <message>
        <source>Unable to capture screen</source>
        <translation>无法捕获屏幕</translation>
    </message>
    <message>
        <source>QR Code not found</source>
        <translation>未找到二维码</translation>
    </message>
    <message>
        <source>No QR code found in the clipboard image.</source>
        <translation>在剪贴板图像中找不到 QR 码。</translation>
    </message>
    <message>
        <source>Clipboard is empty.</source>
        <translation>剪贴板是空的。</translation>
    </message>
    <message>
        <source>QR images and exports (*.png *.jpg *.jpeg *.bmp *.gif *.json *.txt);;All files (*)</source>
        <translation>QR 图像和导出内容 (*.png *.jpg *.jpeg *.bmp *.gif *.json *.txt);;所有文件 (*)</translation>
    </message>
    <message>
        <source>%1: cannot be opened</source>
        <translation>%1: 无法打开</translation>
    </message>
    <message>
        <source>%1: larger than 50 MB, skipped</source>
        <translation>%1: 大于 50 MB，已跳过</translation>
    </message>
    <message>
        <source>%1: no QR code found</source>
        <translation>%1: 找不到二维码</translation>
    </message>
    <message>
        <source>Nothing to import.</source>
        <translation>没有导入的内容。</translation>
    </message>
    <message>
        <source>OTP %1</source>
        <translation>OTP %1</translation>
    </message>
    <message>
        <source>Imported %1 OTP profile(s).</source>
        <translation>已导入 %1 个 OTP 配置档。</translation>
    </message>
    <message>
        <source>Skipped %1 duplicate or unusable entries.</source>
        <translation>已跳过 %1 个重复或不可用条目。</translation>
    </message>
    <message>
        <source>Export OTP</source>
        <translation>导出 OTP</translation>
    </message>
    <message>
        <source>None of the selected profiles could be exported.</source>
        <translation>选定的配置档没有一个可被导出。</translation>
    </message>
    <message>
        <source>JSON (*.json)</source>
        <translation>JSON (*.json)</translation>
    </message>
    <message>
        <source>Cannot write to: %1</source>
        <translation>无法写到: %1</translation>
    </message>
    <message>
        <source>Exported %1 OTP profile(s) to:
%2</source>
        <translation>导出了 %1 个 OTP 配置档到:
%2</translation>
    </message>
</context>
<context>
    <name>DialogPresetSettings</name>
    <message>
        <source>Preset Settings</source>
        <translation>预设设置</translation>
    </message>
    <message>
        <source>Multiplex</source>
        <translation>多路复用</translation>
    </message>
    <message>
        <source>Protocol</source>
        <translation>协议</translation>
    </message>
    <message>
        <source>Concurrency</source>
        <translation>并发数</translation>
    </message>
    <message>
        <source>Default On</source>
        <translation>默认开启</translation>
    </message>
    <message>
        <source>Default Mux On</source>
        <translation>默认复用开启</translation>
    </message>
    <message>
        <source>TLS Fragment</source>
        <translation>TLS 分片</translation>
    </message>
    <message>
        <source>Implementation</source>
        <translation>实现</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Which TLS fragmentation implementation profiles use: built-in (sing-box tls.fragment) or custom (Hiddify dialer-level ClientHello fragmentation).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;配置档使用的 TLS 分片实现： built-in (内置实现：sing-box tls.fragment) 或 custom (自定义实现：Hiddify 拨号器级别 ClientHello 分段)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>大小</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Custom implementation only: bytes per ClientHello fragment, as a range min-max (e.g. 10-100).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;仅适用于 Custom (自定义)实现：每个 ClientHello 片段的字节数，采用“最小-最大”取值范围的格式（如 10-100）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Sleep</source>
        <translation>睡眠</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Custom implementation only: milliseconds to sleep between fragment bursts, as a range min-max (e.g. 2-5).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;仅适用于 Custom （自定义）实现：分片突发间的睡眠时间，以毫秒计算，采用“最小-最大”取值范围的格式（如 2-5）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Fragment profiles whose Fragment setting is left on &amp;quot;Keep Default&amp;quot;.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;分片设置保留为 &amp;quot;Keep Default&amp;quot; (保持默认)的分段配置档。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>TLS Tricks</source>
        <translation>TLS 技巧</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enable mixed-case SNI for profiles whose TLS Tricks setting is left on &amp;quot;Keep Default&amp;quot;.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;对其 TLS Tricks （TLS 技巧，一些技术选项）设置保留为 &amp;quot;Keep Default&amp;quot;（保持默认）的配置档启用混合大小写的 SNI。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Default Fingerprint</source>
        <translation>默认指纹</translation>
    </message>
    <message>
        <source>TLS Spoof</source>
        <translation>TLS 伪装</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Inject a forged TLS ClientHello carrying this SNI before the real one, to pass SNI filtering that allows specific hostnames. Profiles that set their own Spoof SNI override this one.&lt;/p&gt;&lt;p&gt;Client only. Requires elevated privileges (root on macOS, CAP_NET_RAW and CAP_NET_ADMIN on Linux, Administrator on Windows for the WinDivert driver). Not supported on Windows ARM64. &amp;quot;wrong-timestamp&amp;quot; is not supported on macOS.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在真实的 TLS ClientHello 前，注入一个承载这个 SNI 的伪造 TLS ClientHello，以传递允许特定主机名的 SNI 过滤。 设置其自有的欺骗 SNI 的配置档会凌驾于这个。&lt;/p&gt;&lt;p&gt;仅客户端。需要提权 (在 macOS 上的 root，在 Linux 上的 CAP_NET_RAW 和 CAP_NET_ADMIN，在 Windows 上的 Administrator 用于 WinDivert 驱动程序)。在 Windows ARM64 上不被支持。 macOS 上不支持 &amp;quot;wrong-timestamp&amp;quot;。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Spoof SNI</source>
        <translation>伪装 SNI</translation>
    </message>
    <message>
        <source>Allowed SNI to forge</source>
        <translation>允许 SNI 伪装</translation>
    </message>
    <message>
        <source>Method</source>
        <translation>方法</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;How the forged ClientHello is made invalid for the server, so only the filter acts on it. Empty keeps the core&apos;s default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;如何使伪造的 ClientHello 对服务器无效，从而仅由过滤器对其进行处理。留空则保持核心的默认设置。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Spoof profiles whose TLS Spoof setting is left on &amp;quot;Keep Default&amp;quot;.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;TLS Spoof (TLS 欺骗)设置保留在 &amp;quot;Keep Default&amp;quot;（保持默认）的伪装配置档。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>HTTP/2 &amp;&amp; QUIC</source>
        <translation>HTTP/2 和 QUIC</translation>
    </message>
    <message>
        <source>HTTP/2 parameters also apply to Hysteria, Hysteria2 and TUIC. Empty keeps the core&apos;s default.</source>
        <translation>HTTP/2 参数同样适用于 Hysteria、Hysteria2 和 TUIC。留空则保留使用核心的默认值。</translation>
    </message>
    <message>
        <source>HTTP/2 Parameters</source>
        <translation>HTTP/2 参数</translation>
    </message>
    <message>
        <source>Idle Timeout</source>
        <translation>空闲超时</translation>
    </message>
    <message>
        <source>Keep Alive Period</source>
        <translation>保活周期</translation>
    </message>
    <message>
        <source>Stream Receive Window</source>
        <translation>流接收窗口</translation>
    </message>
    <message>
        <source>Connection Receive Window</source>
        <translation>连接接收窗口</translation>
    </message>
    <message>
        <source>Max Concurrent Streams</source>
        <translation>最大并发流数</translation>
    </message>
    <message>
        <source>QUIC Parameters</source>
        <translation>QUIC 参数</translation>
    </message>
    <message>
        <source>Initial Packet Size</source>
        <translation>初始数据包大小</translation>
    </message>
    <message>
        <source>Disable Path MTU Discovery</source>
        <translation>禁用路径 MTU 发现</translation>
    </message>
</context>
<context>
    <name>DialogTrafficStats</name>
    <message>
        <source>Traffic Statistics</source>
        <translation>流量统计</translation>
    </message>
    <message>
        <source>Period:</source>
        <translation>周期:</translation>
    </message>
    <message>
        <source>Last 24 hours</source>
        <translation>最后 24 小时</translation>
    </message>
    <message>
        <source>Last 7 days</source>
        <translation>最后 7 天</translation>
    </message>
    <message>
        <source>Last 30 days</source>
        <translation>最后 30 天</translation>
    </message>
    <message>
        <source>Last 90 days</source>
        <translation>最后 90 天</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>刷新</translation>
    </message>
    <message>
        <source>By Profile</source>
        <translation>按配置档</translation>
    </message>
    <message>
        <source>Profile</source>
        <translation>配置档</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>分组</translation>
    </message>
    <message>
        <source>Download</source>
        <translation>下载(↓)</translation>
    </message>
    <message>
        <source>Upload</source>
        <translation>上传(↑)</translation>
    </message>
    <message>
        <source>Total</source>
        <translation>合计(Σ)</translation>
    </message>
    <message>
        <source>By App</source>
        <translation>按应用</translation>
    </message>
    <message>
        <source>App</source>
        <translation>应用</translation>
    </message>
    <message>
        <source>Download: %1     Upload: %2     Total: %3</source>
        <translation>下载(↓): %1  上传(↑): %2  合计(Σ): %3</translation>
    </message>
    <message>
        <source>Direct</source>
        <translation>直连</translation>
    </message>
    <message>
        <source>Profile #%1 (deleted)</source>
        <translation>配置档 №%1 (已删除)</translation>
    </message>
    <message>
        <source>Other</source>
        <translation>其它</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
</context>
<context>
    <name>DialogVPNSettings</name>
    <message>
        <source>Tun Settings</source>
        <translation>Tun 设置</translation>
    </message>
    <message>
        <source>Tun Enable IPv6</source>
        <translation>Tun 启用 IPv6</translation>
    </message>
    <message>
        <source>Strict Route</source>
        <translation>严格路由</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When enabled, Direct IP CIDRs and rule sets will also be added to the Tun setting to be excluded at OS routing level. IMPORTANT: Large rule sets have been reported to cause massive CPU usage in windows, please enable this option with caution.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用时，Direct IP CIDR 和规则集也将添加到 Tun 设置中，以便在操作系统路由级别被排除。重要提示：已有报告大型规则集会导致 Windows 中的 CPU 占用率大幅上升，请谨慎启用此选项。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable Tun Routing</source>
        <translation>启用 Tun 路由</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Required on newer Linux kernels for the system and mixed stacks to pass traffic. While enabled, this machine cannot be used as a network gateway for other devices.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在较新的 Linux 内核上为了系统和混合堆栈可以传递流量所必需。在启用时，这台机器不能用作其它设备的网络网关。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Auto Redirect</source>
        <translation>自动重定向</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Forwards bypassed traffic straight out of the network interface instead of rebuilding it as a new connection, which is faster and keeps NAT intact for games and P2P. Applies to UDP and ICMP only; TCP still needs to be sniffed and keeps taking the normal direct path.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;转发绕过的流量直接从网络接口发送出去而不是把它重建为一个新连接，这样更快，同时对游戏和 P2P 保持 NAT 不变。仅适用于 UDP 和 ICMP； TCP 仍需要被嗅探并继续采用正常的直连路径。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>L3 Bridge Bypass</source>
        <translation>L3 桥接绕过</translation>
    </message>
    <message>
        <source>Tun Address</source>
        <translation>Tun 地址</translation>
    </message>
    <message>
        <source>IPv4 CIDR</source>
        <translation>IPv4 CIDR</translation>
    </message>
    <message>
        <source>IPv6 CIDR</source>
        <translation>IPv6 CIDR</translation>
    </message>
    <message>
        <source>Restore default addresses</source>
        <translation>恢复默认地址</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Address ranges handed straight to the physical NIC instead of being routed through the core, one CIDR per line. Uncheck to let the core hijack private range traffic instead. Loopback and broadcast are always bypassed and cannot be listed here.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;地址范围直接交给物理网卡而不是通过核心进行路由，每行一个 CIDR。 取消勾选表示改为让核心劫持私有地址范围的流量。 Loopback (回环)和广播地址总是被绕过，不能在这里列出。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Private Range Bypass</source>
        <translation>私有地址范围绕过</translation>
    </message>
    <message>
        <source>Restore default ranges</source>
        <translation>恢复默认范围</translation>
    </message>
    <message>
        <source>Troubleshooting</source>
        <translation>排除故障</translation>
    </message>
    <message>
        <source>Invalid Tun Address</source>
        <translation>Tun 地址无效</translation>
    </message>
    <message>
        <source>IPv4 CIDR is invalid.</source>
        <translation>IPv4 CIDR 无效。</translation>
    </message>
    <message>
        <source>IPv6 CIDR is invalid.</source>
        <translation>IPv6 CIDR 无效。</translation>
    </message>
    <message>
        <source>Invalid Private Range</source>
        <translation>无效私有地址范围</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not a valid address or CIDR.</source>
        <translation>&quot;%1&quot; 不是有效的地址或 CIDR。</translation>
    </message>
    <message>
        <source>&quot;%1&quot; covers every address, which would stop Tun from routing anything.</source>
        <translation>&quot;%1&quot; 涵盖一切地址，这将导致 Tun 无法路由任何流量。</translation>
    </message>
    <message>
        <source>If you have trouble starting VPN, you can force reset Core process here.
If still not working, see documentation for more information.
https://matsuridayo.github.io/n-configuration/#vpn-tun</source>
        <translation>如果您在启动 Tun 时有问题，可以在这里强制重置 Core 进程。
如果仍无法工作，请查阅文档以获取更多信息。
https://matsuridayo.github.io/n-configuration/#vpn-tun</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
</context>
<context>
    <name>DialogVpnAuth</name>
    <message>
        <source>VPN Authentication</source>
        <translation>VPN 认证</translation>
    </message>
    <message>
        <source>Endpoint: %1</source>
        <translation>端点: %1</translation>
    </message>
    <message>
        <source>Reconnect</source>
        <translation>重连</translation>
    </message>
    <message>
        <source>Submit</source>
        <translation>提交</translation>
    </message>
    <message>
        <source>The VPN server sent a message.</source>
        <translation>VPN 服务器发送了一条消息。</translation>
    </message>
    <message>
        <source>Finish signing in at the address shown below, then close this window. The connection continues on its own once the server accepts it.</source>
        <translation>在下方显示的地址处完成登录，然后关闭这个窗口。一旦服务器接受连接则连接自动继续。</translation>
    </message>
    <message>
        <source>Open in Browser</source>
        <translation>在浏览器中打开</translation>
    </message>
    <message>
        <source>This server requires single sign-on in a browser, which Throne does not support yet. Cancel here and use a profile with direct credentials, or supply an authentication cookie in the profile&apos;s advanced settings.</source>
        <translation>这个服务器想要在浏览器中进行单点登录，而 Throne 还未支持。可以在这里取消，然后使用带直接凭证的配置档，或者在配置档的高级设置中提高认证的 cookie。</translation>
    </message>
    <message>
        <source>Unsupported authentication request: %1</source>
        <translation>不支持的验证请求: %1</translation>
    </message>
    <message>
        <source>Expires in %1</source>
        <translation>%1 后过期</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Answer</source>
        <translation>应答</translation>
    </message>
    <message>
        <source>This request expired.</source>
        <translation>这个请求已过期。</translation>
    </message>
    <message>
        <source>Submitting...</source>
        <translation>正在提交...</translation>
    </message>
</context>
<context>
    <name>EditAdvanced</name>
    <message>
        <source>Dialog</source>
        <translation>对话框</translation>
    </message>
    <message>
        <source>Dial Fields</source>
        <translation>拨号字段</translation>
    </message>
    <message>
        <source>Reuse Address</source>
        <translation>重用地址</translation>
    </message>
    <message>
        <source>TCP Fast Open</source>
        <translation>TCP 快速开启</translation>
    </message>
    <message>
        <source>UDP Fragment</source>
        <translation>UDP 分片</translation>
    </message>
    <message>
        <source>TCP MultiPath</source>
        <translation>TCP 多路径</translation>
    </message>
    <message>
        <source>Connect Timeout</source>
        <translation>连接超时</translation>
    </message>
    <message>
        <source>Bind Interface</source>
        <translation>绑定接口</translation>
    </message>
    <message>
        <source>IPv4 Bind Address</source>
        <translation>IPv4 绑定地址</translation>
    </message>
    <message>
        <source>IPv6 Bind Address</source>
        <translation>IPv6 绑定地址</translation>
    </message>
    <message>
        <source>Interface</source>
        <translation>接口</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Requires privilege and cannot conflict with existing system interfaces. The internal network stack is used when disabled.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;需要特权，且不能与现有的系统接口冲突。 禁用时使用内部网络协议栈。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Use System Interface</source>
        <translation>使用系统接口</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Custom system interface name. A generated name is used by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;自定义系统接口名称。默认使用生成的名称。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Interface Name</source>
        <translation>接口名称</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP NAT expiration time.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP NAT 过期时间。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>UDP Timeout</source>
        <translation>UDP 超时</translation>
    </message>
    <message>
        <source>5m (default)</source>
        <translation>5m (5分，默认)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP NAT mapping behavior. endpoint_independent is used by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP NAT 映射行为。默认使用 endpoint_independent (端点独立)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>UDP Mapping</source>
        <translation>UDP 映射</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP NAT filtering behavior. endpoint_independent is used by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP NAT 过滤行为。默认使用 endpoint_independent (端点独立)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>UDP Filtering</source>
        <translation>UDP 过滤</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Maximum number of UDP NAT entries.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP NAT 条目的最大数量。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>UDP NAT Max</source>
        <translation>UDP NAT 上限</translation>
    </message>
    <message>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <source>Disable SNI</source>
        <translation>禁用 SNI (不发送服务器名称指示)</translation>
    </message>
    <message>
        <source>Enable ECH</source>
        <translation>启用 ECH</translation>
    </message>
    <message>
        <source>TLS Min Version</source>
        <translation>TLS 最低版本</translation>
    </message>
    <message>
        <source>TLS Max Version</source>
        <translation>TLS 最高版本</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whether this profile injects a forged ClientHello. &amp;quot;Keep Default&amp;quot; follows Preset Settings, unless a Spoof SNI is set below.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;这个配置档是否注入一个伪造的 ClientHello。 &amp;quot;Keep Default&amp;quot; (保持默认)表示使用“预设设置”，除非下面设定了“伪装 SNI”。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>TLS Spoof</source>
        <translation>TLS 伪装</translation>
    </message>
    <message>
        <source>Keep Default</source>
        <translation>保持默认</translation>
    </message>
    <message>
        <source>On</source>
        <translation>开启</translation>
    </message>
    <message>
        <source>Off</source>
        <translation>关闭</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Inject a forged TLS ClientHello carrying this SNI before the real one, to pass SNI filtering that allows specific hostnames.&lt;/p&gt;&lt;p&gt;Client only. Requires elevated privileges (root / Administrator). Not supported on Windows ARM64. &amp;quot;wrong-timestamp&amp;quot; is not supported on macOS.&lt;/p&gt;&lt;p&gt;Leave empty to inherit the global value from Preset Settings.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在真实的 TLS ClientHello 之前注入一个携带这个 SNI 的伪造 TLS ClientHello，以绕过允许特定主机名的 SNI 过滤。&lt;/p&gt;&lt;p&gt;仅适用于客户端。需要提权 (root / 管理员)。在 Windows ARM64 上不被支持。macOS 上不支持 &amp;quot;wrong-timestamp&amp;quot;。&lt;/p&gt;&lt;p&gt;留空则继承来自“预设设置”的全局值。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Spoof SNI</source>
        <translation>伪装 SNI</translation>
    </message>
    <message>
        <source>Allowed SNI to forge</source>
        <translation>允许 SNI 伪装</translation>
    </message>
    <message>
        <source>Method</source>
        <translation>方法</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h4 style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;query_server_name&quot;/&gt;&lt;span style=&quot; font-size:medium; font-weight:700;&quot;&gt;q&lt;/span&gt;&lt;span style=&quot; font-size:medium; font-weight:700;&quot;&gt;uery_server_name in sing-box&lt;/span&gt;&lt;/h4&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h4 style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;a name=&quot;query_server_name&quot;/&gt;&lt;span style=&quot; font-size:medium; font-weight:700;&quot;&gt;sing-box 中的 query_server_name (查询服务器)&lt;/span&gt;&lt;/h4&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>ECH Server Name</source>
        <translation>ECH 服务器名称</translation>
    </message>
    <message>
        <source>ECH Config</source>
        <translation>ECH 配置</translation>
    </message>
    <message>
        <source>Not Set</source>
        <translation>未设置</translation>
    </message>
    <message>
        <source>Certificate SHA256</source>
        <translation>证书 SHA256</translation>
    </message>
    <message>
        <source>Client Certificate</source>
        <translation>客户端证书</translation>
    </message>
    <message>
        <source>Client Key</source>
        <translation>客户端钥匙</translation>
    </message>
    <message>
        <source>QUIC Parameters</source>
        <translation>QUIC 参数</translation>
    </message>
    <message>
        <source>Empty fields fall back to the global values in Preset Settings.</source>
        <translation>空字段回退到“预设设置”中的全局值。</translation>
    </message>
    <message>
        <source>Idle Timeout</source>
        <translation>空闲超时</translation>
    </message>
    <message>
        <source>Keep Alive Period</source>
        <translation>保活周期</translation>
    </message>
    <message>
        <source>Stream Receive Window</source>
        <translation>流接收窗口</translation>
    </message>
    <message>
        <source>Connection Receive Window</source>
        <translation>连接接收窗口</translation>
    </message>
    <message>
        <source>Max Concurrent Streams</source>
        <translation>最大并发流数</translation>
    </message>
    <message>
        <source>Initial Packet Size</source>
        <translation>初始数据包大小</translation>
    </message>
    <message>
        <source>Disable Path MTU Discovery</source>
        <translation>禁用路径 MTU 发现</translation>
    </message>
    <message>
        <source>Certificate sha256</source>
        <translation>证书 sha256</translation>
    </message>
</context>
<context>
    <name>EditAnyTLS</name>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Idle Session Check Interval</source>
        <translation>空闲会话检查时间间隔</translation>
    </message>
    <message>
        <source>Idle Session Timeout</source>
        <translation>空闲会话超时</translation>
    </message>
    <message>
        <source>Min Idle Session</source>
        <translation>最小空闲会话</translation>
    </message>
</context>
<context>
    <name>EditAutoSelector</name>
    <message>
        <source>Servers from</source>
        <translation>服务器来自</translation>
    </message>
    <message>
        <source>The group whose profiles this selector picks from. New servers added by a subscription update join automatically — you never have to edit this profile again.</source>
        <translation>这个选择器会从中选取其配置档的分组。 由订阅更新增加的新服务器自动加入 - 你无需再手动编辑这个配置档。</translation>
    </message>
    <message>
        <source>Only names matching</source>
        <translation>仅名称匹配</translation>
    </message>
    <message>
        <source>leave empty to use every profile in the group</source>
        <translation>留空表示使用该分组的每个配置档</translation>
    </message>
    <message>
        <source>Optional regular expression. Only profiles whose name matches are considered — useful to pick out one country or provider.</source>
        <translation>可选的正则表达式。仅名称匹配的配置档才会被考虑 - 对于筛选某个国家或提供方很有用。</translation>
    </message>
    <message>
        <source>Share traffic between the best profiles</source>
        <translation>最优配置档间分享流量</translation>
    </message>
    <message>
        <source>Off by default: one profile carries everything and the rest stand by. Turn on to spread traffic over the profiles that are confirmed working.</source>
        <translation>默认关闭： 一个配置档承载一切流量而其余的待机。 开启（该选项）则流量分散到已确认正常运作的配置档上。</translation>
    </message>
    <message>
        <source>Preferred profile</source>
        <translation>首选配置档</translation>
    </message>
    <message>
        <source>Use automatic</source>
        <translation>使用自动(模式)</translation>
    </message>
    <message>
        <source>Stop preferring this profile and let the selector choose on measurements again.</source>
        <translation>停止首选这个配置档，并让选择器再次基于测量进行选择。</translation>
    </message>
    <message>
        <source>Advanced…</source>
        <translation>高级…</translation>
    </message>
    <message>
        <source>Everything here has a working default. Open it only if you want to tune how the selector measures and switches.</source>
        <translation>这里的一切设置都有正常工作的默认值。仅当你想调整选择器如何测量和切换时才打开它。</translation>
    </message>
    <message>
        <source>Which profiles to use</source>
        <translation>要使用的配置档</translation>
    </message>
    <message>
        <source>Only countries</source>
        <translation>仅指定国家</translation>
    </message>
    <message>
        <source>e.g. DE,NL,FR</source>
        <translation>如 DE,NL,FR</translation>
    </message>
    <message>
        <source>Comma-separated country codes, empty means any. Uses the country found by the IP test, so profiles that were never IP-tested are skipped while this is set.</source>
        <translation>逗号间隔的国家代码，空白表示任何国家。使用由 IP 测试找到的国家，因此在设定这个期间，从未进行 IP 测试的配置档会被跳过。</translation>
    </message>
    <message>
        <source>Run the best</source>
        <translation>运行最优的</translation>
    </message>
    <message>
        <source> profiles</source>
        <translation> 个配置档</translation>
    </message>
    <message>
        <source>How many profiles are loaded into the running config. The selector switches between these instantly, with no reconnect. Higher costs more memory and startup time.</source>
        <translation>会加载到正在运行的配置中的配置档数量。选择器会在这些配置档间瞬时切换而无需重连。越高的量耗费越多的内存和启动时间。</translation>
    </message>
    <message>
        <source>Rank at most</source>
        <translation>最多排名</translation>
    </message>
    <message>
        <source>Hard ceiling on how many profiles are measured and kept in the ranked list. When every running profile dies, replacements are taken from this list.</source>
        <translation>在要被测量并保留在排名列表中的配置档的数量方面的硬性上限。当每个正在运行的配置档都失效时，将从这个列表中取得替代项。</translation>
    </message>
    <message>
        <source>Trust results for</source>
        <translation>信任结果维持</translation>
    </message>
    <message>
        <source> min</source>
        <translation> 分</translation>
    </message>
    <message>
        <source>always re-test</source>
        <translation>始终重新测试</translation>
    </message>
    <message>
        <source>URL test results this recent are reused instead of being measured again — including tests you ran yourself on the group, so starting the selector right after one does not repeat the work. Older results are treated as if the profile had never been tested. Set to zero to always run a fresh test.</source>
        <translation>近期的 URL 测试结果会被重复使用而不是再次测量 - 包括你本人对该组上运行过的测试，所以在完成一次测试后立即启动选择器，不用重复同样的工作。较旧的结果会被认为“该配置档从未被测试”。设为 0 表示始终运行一个全新测试。</translation>
    </message>
    <message>
        <source>Skip failed profiles</source>
        <translation>跳过失败的配置档</translation>
    </message>
    <message>
        <source>Keeps servers whose last test failed out of the pool, as long as that result is still within the trust window. Turn off if your tests are unreliable and you would rather let the selector decide for itself.</source>
        <translation>只要上次测试结果仍在可信（时间）窗口内，就会把测试失败的服务器从该（候选）池中剔除。如果测试不可靠，宁愿让选择器自行判断，则关闭这个选项。</translation>
    </message>
    <message>
        <source>Health checks</source>
        <translation>健康度检查</translation>
    </message>
    <message>
        <source>Keep ready</source>
        <translation>保持就绪</translation>
    </message>
    <message>
        <source>How many profiles are kept confirmed working at all times, so a failure can be covered instantly. These are also the ones traffic is shared between when balancing is on.</source>
        <translation>始终保持被确认正常运作的配置档数量，以便出现故障时可瞬时（替补）恢复。开启（负载）均衡时这些（配置档）也会分享流量。</translation>
    </message>
    <message>
        <source>Check closely</source>
        <translation>仔细检查</translation>
    </message>
    <message>
        <source>The top-ranked profiles are re-checked every interval. The rest are still checked, just spread over the slower full sweep.</source>
        <translation>每隔指定时间间隔，排名靠前的配置档会进行一次重新检查。其余的仍会被检查，只是会分散到较慢的完整扫描流程中进行。</translation>
    </message>
    <message>
        <source>Check interval</source>
        <translation>检查间隔</translation>
    </message>
    <message>
        <source> s</source>
        <translation> 秒</translation>
    </message>
    <message>
        <source>How often the closely-checked profiles are measured again.</source>
        <translation>仔细检查的配置档重复测量的频繁程度。</translation>
    </message>
    <message>
        <source>Full sweep every</source>
        <translation>完整扫描每隔</translation>
    </message>
    <message>
        <source>How long one pass over every running profile takes. Checks are spread evenly across it, so a large pool never causes a burst of traffic.</source>
        <translation>遍历每个运行中的配置档一次所需时间。检查会在其中均匀分布，因此不会因一个大型（配置档）池而导致流量的突发。</translation>
    </message>
    <message>
        <source>Watch profile in use</source>
        <translation>监视使用中的配置档</translation>
    </message>
    <message>
        <source>How often the profile currently carrying your traffic is checked on its own. Keep this short: a server can stop working while still accepting connections, and nothing else would notice until the next full check.</source>
        <translation>当前承载你的流量的配置档多久会被自行检查一次。 请注意： 服务器可能在其仍能接受连接的情况下停止运作，并且直至下一次完整检查前都不会收到任何其他情况的通知。</translation>
    </message>
    <message>
        <source>Samples kept</source>
        <translation>保留样本</translation>
    </message>
    <message>
        <source>Ranking uses the average and the jitter over this many recent checks, so a single bad result cannot demote a good server.</source>
        <translation>排名使用这几次近期检查的均值和抖动(Jitter)，因此单次的异常结果不会降级一个良好的服务器。</translation>
    </message>
    <message>
        <source>Switching</source>
        <translation>切换</translation>
    </message>
    <message>
        <source>Switch tolerance</source>
        <translation>切换容差</translation>
    </message>
    <message>
        <source> ms</source>
        <translation> 毫秒</translation>
    </message>
    <message>
        <source>Another profile must be at least this much faster before the selector moves to it. Higher values mean fewer switches.</source>
        <translation>在选择器移到另一个配置档前，它必须至少比当前的快这个量。越高的值意味着越少的切换次数。</translation>
    </message>
    <message>
        <source>Maximum latency</source>
        <translation>最大延迟</translation>
    </message>
    <message>
        <source>no limit</source>
        <translation>无限制</translation>
    </message>
    <message>
        <source>Profiles slower than this are never selected, even if nothing better is available.</source>
        <translation>比这个慢的配置档永远不会被选择，即使没有更好的项可用。</translation>
    </message>
    <message>
        <source>Failover attempts</source>
        <translation>故障切换尝试次数</translation>
    </message>
    <message>
        <source>When the chosen profile fails to connect, how many others to try immediately before the app sees an error.</source>
        <translation>当所选的配置档连接失败时，在应用看到错误前，立即尝试多少个其他配置档。</translation>
    </message>
    <message>
        <source>Drop connections on switch</source>
        <translation>切换时断开连接</translation>
    </message>
    <message>
        <source>Applies when the selector switches because a profile got worse or failed. On: everything moves to the new profile at once. Off: current downloads finish on the old one. Balance rotations never drop connections either way.</source>
        <translation>当选择器因配置档变差或失败而切换时应用。开启：一切内容会一次性移到新配置档。关闭：当前下载会在旧的配置档上完成。 无论何种方式，均衡轮换都不会断开连接。</translation>
    </message>
    <message>
        <source>Load balancing</source>
        <translation>负载均衡</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <source>How traffic is spread over the ready profiles.</source>
        <translation>流量如何在已准备好的配置档间分配。</translation>
    </message>
    <message>
        <source>Rotate every</source>
        <translation>轮换每隔</translation>
    </message>
    <message>
        <source>How long the selector stays on one profile before moving to the next ready one.</source>
        <translation>选择器在移到下一个准备好的配置档之前会停留在当前配置档上的时长。</translation>
    </message>
    <message>
        <source>Test endpoints</source>
        <translation>测试端点</translation>
    </message>
    <message>
        <source>Test URL</source>
        <translation>测试 URL</translation>
    </message>
    <message>
        <source>empty = use the global latency test URL</source>
        <translation>空 = 使用全局延迟测试 URL</translation>
    </message>
    <message>
        <source>Fetched through each profile to measure it.</source>
        <translation>通过每个配置档进行抓取以进行测量。</translation>
    </message>
    <message>
        <source>Connectivity URL</source>
        <translation>连通性 URL</translation>
    </message>
    <message>
        <source>optional — inherits the Direct Test URL</source>
        <translation>可选 - 继承直连测试 URL</translation>
    </message>
    <message>
        <source>Fetched WITHOUT the proxy to tell a dead internet connection apart from dead servers, and to notice the moment it comes back. Leave empty to inherit the Direct Test URL from Basic Settings, and empty there too to rely on the operating system&apos;s network state. A URL that turns out to be blocked can only delay a resume by a few minutes; it can never keep the selector paused.</source>
        <translation>“不用”代理获取，以区分互联网连接中断和服务器故障，并在恢复时立即觉察。留空则继承「基本设置」中的「直连测试 URL」，而且若那里也为空则依赖操作系统的网络状态。若 URL 后来发现被拦截，最多只会使恢复延迟数分钟，绝不会使选择器一直处于暂停状态。</translation>
    </message>
    <message>
        <source>Rotate on a timer (keeps sessions stable)</source>
        <translation>按计时器轮换(保持会话稳定)</translation>
    </message>
    <message>
        <source>Per connection (widest spread)</source>
        <translation>按连接(分布最广泛分散)</translation>
    </message>
    <message>
        <source>Advanced ▴</source>
        <translation>高级 ▴</translation>
    </message>
    <message>
        <source>Name cannot be empty.</source>
        <translation>名称不能为空。</translation>
    </message>
    <message>
        <source>Select the group this auto selector should track.</source>
        <translation>选择这个自动选择器应该跟踪的分组。</translation>
    </message>
    <message>
        <source>The name filter is not a valid regular expression: %1</source>
        <translation>名称筛选器不是一个有效的正则表达式: %1</translation>
    </message>
    <message>
        <source>%1 — chosen by you, so the selector stays on it while it works</source>
        <translation>%1 — 由你选择，只要它正常工作，选择器在继续使用它</translation>
    </message>
    <message>
        <source>The best profile carries all traffic; the other ready profiles are kept verified so one can take over instantly.</source>
        <translation>最好的配置档承载所有流量；其他的已就绪配置档会保持经过验证状态，以便可以（在需要时）瞬时接管。</translation>
    </message>
    <message>
        <source>New connections move to another good profile on each rotation; open ones are left alone and finish where they started. Traffic is counted exactly.</source>
        <translation>每次轮换时，新的连接会移到另一个好的配置档；已打开的（连接）会保持不变并在其开始的位置（配置档）上完成工作。流量会精确统计。</translation>
    </message>
    <message>
        <source>Every new connection may take a different profile. Widest spread, but your exit IP changes mid-session and per-profile traffic becomes approximate.</source>
        <translation>每个新的连接可采用不同的配置档。分布最广，但是你的出口 IP 会在会话中途更改，并且按配置档统计的流量会变成近似值。</translation>
    </message>
    <message>
        <source>%1 of %2 profiles in the group can be used; %3 would run.</source>
        <translation>可以使用该分组中 %1 / %2 个配置档；将运行 %3。</translation>
    </message>
    <message>
        <source>%1 %2</source>
        <translation>%1 %2</translation>
    </message>
    <message>
        <source>Skipped: %1.</source>
        <translation>已跳过: %1。</translation>
    </message>
    <message>
        <source>, </source>
        <translation>， </translation>
    </message>
    <message>
        <source>Every profile&apos;s last test failed, which usually means the network was down rather than the servers, so all %1 are kept and will be re-checked.</source>
        <translation>每个配置档的上次测试均失败，这通常意味着网络中断而不是服务器宕机，因此将保留私有 %1 个配置档并将会重新检查。</translation>
    </message>
    <message>
        <source>More than %1 profiles match, so only the best-ranked ones are kept.</source>
        <translation>超过 %1 个配置档匹配，因此只保留排名最优的。</translation>
    </message>
    <message>
        <source>%1 have a recent test result that will be reused.</source>
        <translation>%1 有一项将被重复使用的近期测试结果。</translation>
    </message>
    <message>
        <source>The rest will be measured before the selector starts.</source>
        <translation>其余的在选择器开始前将被测量。</translation>
    </message>
</context>
<context>
    <name>EditChain</name>
    <message>
        <source>Traffic order is from top to bottom</source>
        <translation>流量顺序是由上到下 (最底一个为流量的出口)</translation>
    </message>
    <message>
        <source>Select Profile</source>
        <translation>选择配置档</translation>
    </message>
    <message>
        <source>Name cannot be empty.</source>
        <translation>名称不能为空。</translation>
    </message>
    <message>
        <source>Profiles that use an extra core can only be the final hop in the chain. Move it to the top of the list.</source>
        <translation>使用 extra core （额外核心）的配置档只可以作为(代理)链中的最后一跳。把它移到列表的顶部。</translation>
    </message>
    <message>
        <source>Only one extra-core profile is allowed in a chain.</source>
        <translation>在代理链中仅允许一个 extra-core 配置档。</translation>
    </message>
</context>
<context>
    <name>EditCustom</name>
    <message>
        <source>Core</source>
        <translation>核心</translation>
    </message>
    <message>
        <source>Json Editor</source>
        <translation>JSON 编辑器</translation>
    </message>
    <message>
        <source>Outbound JSON, please read the documentation.</source>
        <translation>出站 JSON，详情请阅读文档。</translation>
    </message>
    <message>
        <source>Xray outbound JSON, please read the Xray documentation.</source>
        <translation>Xray Outbound JSON，详情请阅读 Xray 文档。</translation>
    </message>
    <message>
        <source>Xray full config (Throne adds a socks inbound and uses sing-box for tun/routing).</source>
        <translation>Xray 完整配置 (Throne 添加一个 socks inbound (套接字入站)并把 sing-box 用于 tun / 路由)。</translation>
    </message>
    <message>
        <source>Please fill the complete config.</source>
        <translation>请填写完整的配置。</translation>
    </message>
    <message>
        <source>Name cannot be empty.</source>
        <translation>名称不能为空。</translation>
    </message>
</context>
<context>
    <name>EditDirect</name>
    <message>
        <source>Use the Advanced section to specify bind options</source>
        <translation>使用“高级”部分指定绑定选项</translation>
    </message>
</context>
<context>
    <name>EditExtraCore</name>
    <message>
        <source>Socks address</source>
        <translation>Socks 地址</translation>
    </message>
    <message>
        <source>127.0.0.1</source>
        <translation></translation>
    </message>
    <message>
        <source>Socks port</source>
        <translation>Socks 端口</translation>
    </message>
    <message>
        <source>1080</source>
        <translation></translation>
    </message>
    <message>
        <source>Core path</source>
        <translation>核心路径</translation>
    </message>
    <message>
        <source>Choose from file</source>
        <translation>从文件中选择</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;args to pass to the executable. You can insert a single %s and it will be replaced with the path to a file containing the config entered below.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;传递到可执行文件的参数。您可以插入单个 %s，它将被替换为包含下面输入的配置的文件的路径。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Args</source>
        <translation>参数</translation>
    </message>
    <message>
        <source>run -confPath %s</source>
        <translation>run -confPath %s</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;contents of the config file that will be passed to the extra core process if %s is specified in the args&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;若在参数中指定了 %s，则配置文件的内容将传递给额外核心进程&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <source>No logs</source>
        <translation>无日志</translation>
    </message>
</context>
<context>
    <name>EditHttp</name>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
</context>
<context>
    <name>EditHysteria</name>
    <message>
        <source>Protocol Version</source>
        <translation>协议版本</translation>
    </message>
    <message>
        <source>Server Ports</source>
        <translation>服务器端口</translation>
    </message>
    <message>
        <source>Hop Interval</source>
        <translation>跃点间隔</translation>
    </message>
    <message>
        <source>Hop Interval Max</source>
        <translation>最大跳跃间隔</translation>
    </message>
    <message>
        <source>When set, each hop waits a random duration between Hop Interval and this value. Requires Hop Interval.</source>
        <translation>在设置时，每次跳跃都会等待一个随机时间（介于”跳跃间隔“和这个值之间）。需要”跳跃间隔“。</translation>
    </message>
    <message>
        <source>Up Mbps</source>
        <translation>上行 (Mbps)</translation>
    </message>
    <message>
        <source>Down Mbps</source>
        <translation>下行 (Mbps)</translation>
    </message>
    <message>
        <source>BBR Profile</source>
        <translation>BBR 配置档</translation>
    </message>
    <message>
        <source>Congestion control aggressiveness. Leave empty to use the default (standard).</source>
        <translation>拥塞控制的激进程度。留空表示使用默认（标准）设置。</translation>
    </message>
    <message>
        <source>Authentication Type</source>
        <translation>认证类型</translation>
    </message>
    <message>
        <source>Authentication Payload</source>
        <translation>认证负载</translation>
    </message>
    <message>
        <source>Obfuscation</source>
        <translation>混淆</translation>
    </message>
    <message>
        <source>salamander</source>
        <translation>salamander</translation>
    </message>
    <message>
        <source>gecko</source>
        <translation>gecko</translation>
    </message>
    <message>
        <source>Obfuscation Password</source>
        <translation>混淆密码</translation>
    </message>
    <message>
        <source>Minimum Packet Size</source>
        <translation>最小数据包大小</translation>
    </message>
    <message>
        <source>Maximum Packet Size</source>
        <translation>最大数据包大小</translation>
    </message>
    <message>
        <source>Recv window conn</source>
        <translation>接收窗口连接</translation>
    </message>
    <message>
        <source>Recv window</source>
        <translation>接收窗口</translation>
    </message>
    <message>
        <source>Disable Mtu Discovery</source>
        <translation>禁用 MTU 探索</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Parroting makes the QUIC handshake look like Chrome&apos;s. On by default.
It overrides idle timeout, max concurrent streams,
initial packet size and the initial receive windows.</source>
        <translation>模仿功能使 QUIC 握手看起来类似 Chrome 的。默认开启。它会覆盖空闲超时、最大并发流数、初始数据包大小和初始接收窗口。</translation>
    </message>
    <message>
        <source>Disable Chrome Parrot</source>
        <translation>禁用 Chrome 模仿</translation>
    </message>
    <message>
        <source>Reach a Hysteria2 server behind NAT through a Hysteria Realm
rendezvous service. Replaces the server address and port.</source>
        <translation>通过 Hysteria Realm 会合服务访问位于 NAT 后的 Hysteria2 服务器。
替换服务器地址和端口。</translation>
    </message>
    <message>
        <source>Realm (NAT Traversal)</source>
        <translation>Realm (NAT 遍历)</translation>
    </message>
    <message>
        <source>Realm Options</source>
        <translation>Realm 选项</translation>
    </message>
    <message>
        <source>Realm needs a URL, an ID and at least one STUN server.</source>
        <translation>Realm 需要一个 URL、一个 ID 和至少一个 STUN 服务器。</translation>
    </message>
</context>
<context>
    <name>EditHysteriaRealm</name>
    <message>
        <source>Realm (NAT Traversal)</source>
        <translation>Realm (NAT 遍历)</translation>
    </message>
    <message>
        <source>The realm is a rendezvous service: it hands out the server&apos;s current public addresses so the connection can be hole-punched directly.</source>
        <translation>Realm (领域) 是一个 Rendezvous (会面)服务：它交出服务器的当前公共地址，这样连接就可以直接洞穿而过。</translation>
    </message>
    <message>
        <source>Realm URL</source>
        <translation>Realm 网址</translation>
    </message>
    <message>
        <source>Realm ID</source>
        <translation>Realm ID</translation>
    </message>
    <message>
        <source>The slot the target Hysteria2 server registered on the realm.</source>
        <translation>目标 Hysteria2 服务器在该 realm 上注册的槽位。</translation>
    </message>
    <message>
        <source>Realm Token</source>
        <translation>Realm 令牌</translation>
    </message>
    <message>
        <source>STUN Servers</source>
        <translation>STUN 服务器</translation>
    </message>
    <message>
        <source>Comma separated host or host:port entries used to discover this client&apos;s public addresses.</source>
        <translation>用于发现这个客户端的公网地址的逗号间隔的“主机”或“主机:端口”条目。</translation>
    </message>
    <message>
        <source>IP Version</source>
        <translation>IP 版本</translation>
    </message>
    <message>
        <source>Maintain a UDP port mapping on the local gateway via UPnP or NAT-PMP.
Improves hole-punching reliability. Requires IPv4.</source>
        <translation>通过 UPnP 或 NAT-PMP 在本地网关上保持 UDP 端口映射。
提高洞穿的可靠性。需要使用 IPv4。</translation>
    </message>
    <message>
        <source>Port Mapping</source>
        <translation>端口映射</translation>
    </message>
    <message>
        <source>Mapping Timeout</source>
        <translation>映射超时</translation>
    </message>
    <message>
        <source>Mapping Lifetime</source>
        <translation>映射生命周期</translation>
    </message>
</context>
<context>
    <name>EditJuicity</name>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>UUID</source>
        <translation>UUID</translation>
    </message>
</context>
<context>
    <name>EditMasque</name>
    <message>
        <source>Base64 DER of the enrolled ECDSA P-256 key; it signs the TLS client certificate.</source>
        <translation>已注册的(enrolled) ECDSA P-256 钥匙的 Base64 DER 编码；它用于签署 TLS 客户端证书。</translation>
    </message>
    <message>
        <source>Private Key</source>
        <translation>私钥</translation>
    </message>
    <message>
        <source>Base64 DER of the server&apos;s public key. When set, it pins the server certificate, even with Allow insecure.</source>
        <translation>服务器公钥的 Base64 DER 编码。设置时，即使启用了“允许不安全(连接)”，也会固定服务器证书。</translation>
    </message>
    <message>
        <source>Peer Public Key</source>
        <translation>对端公钥</translation>
    </message>
    <message>
        <source>Comma separated list of the tunnel&apos;s own addresses, e.g. 172.16.0.2/32,2606:4700::1/128</source>
        <translation>隧道自身地址的逗号间隔列表，如 172.16.0.2/32,2606:4700::1/128</translation>
    </message>
    <message>
        <source>Local Address</source>
        <translation>本地地址</translation>
    </message>
    <message>
        <source>MTU</source>
        <translation>MTU</translation>
    </message>
    <message>
        <source>HTTP/3 runs over UDP; HTTP/2 runs over TLS on TCP and works where UDP is blocked.</source>
        <translation>HTTP/3 基于 UDP 运行；HTTP/2 基于 TCP 上的 TLS 运行并在 UDP 被阻断的情况下也可工作。</translation>
    </message>
    <message>
        <source>HTTP Version</source>
        <translation>HTTP 版本</translation>
    </message>
    <message>
        <source>HTTP/3 (fallback to HTTP/2)</source>
        <translation>HTTP/3 (回退到 HTTP/2)</translation>
    </message>
    <message>
        <source>HTTP/3 only</source>
        <translation>仅 HTTP/3</translation>
    </message>
    <message>
        <source>Register a new Cloudflare WARP device for MASQUE and fill the key, address and server fields.</source>
        <translation>为 MASQUE 注册新的 Cloudflare WARP 设备，并填写钥匙、地址和服务器字段。</translation>
    </message>
    <message>
        <source>Generate WARP identity</source>
        <translation>生成 WARP 身份标识</translation>
    </message>
    <message>
        <source>Generating identity...</source>
        <translation>正在生成身份标识...</translation>
    </message>
    <message>
        <source>Failed to generate WARP identity</source>
        <translation>生成 WARP 身份标识失败</translation>
    </message>
    <message>
        <source>Success!</source>
        <translation>成功!</translation>
    </message>
</context>
<context>
    <name>EditMieru</name>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Transport</source>
        <translation>传输</translation>
    </message>
    <message>
        <source>Multiplexing</source>
        <translation>复用</translation>
    </message>
    <message>
        <source>Traffic Pattern</source>
        <translation>流量图案</translation>
    </message>
    <message>
        <source>Server Ports</source>
        <translation>服务器端口</translation>
    </message>
</context>
<context>
    <name>EditNaive</name>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>UDP over TCP</source>
        <translation>基于 TCP 的 UDP</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>Congestion Control</source>
        <translation>拥塞控制</translation>
    </message>
    <message>
        <source>QUIC</source>
        <translation>QUIC</translation>
    </message>
    <message>
        <source>Extra Headers</source>
        <translation>额外标头</translation>
    </message>
    <message>
        <source>Headers sent to the proxy server, e.g. X-Username=&quot;user&quot; X-Password=&quot;pass&quot;</source>
        <translation>发送到代理服务器的标头，如 X-Username=&quot;user&quot; X-Password=&quot;pass&quot;</translation>
    </message>
    <message>
        <source>Insecure Concurrency</source>
        <translation>不安全并发</translation>
    </message>
    <message>
        <source>Parallel tunnel connections to the server, 0 to disable. More connections are easier to detect.</source>
        <translation>到服务器的并行隧道连接数，0 表示禁用。连接越多越容易被检测到。</translation>
    </message>
</context>
<context>
    <name>EditOpenConnect</name>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenConnect protocol flavor. Leave empty to use the core default (anyconnect).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenConnect 协议类型。留空则使用核心的默认类型 (anyconnect)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Flavor</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Username used to fill matching authentication form fields.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于填写匹配的身份验证表单字段的用户名。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Password used to fill matching authentication form fields.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于填写匹配的身份验证表单字段的密码。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Preselects a matching group, realm, domain or gateway choice when the flavor supports it.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;档协议类型支持时，预选匹配的组、认证域(Realm)、域或网关选择项。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Auth Group</source>
        <translation>认证组</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Path part of the server URL, appended to the address above. Load-bearing on gp, f5 and fortinet portals.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;服务器 URL 的路径部分，追加到上方的地址之后。在 gp、f5 和 fortinet 门户中为必要项(Load-bearing)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Server Path</source>
        <translation>服务器路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Preferred tunnel MTU. Values below 576 are treated as 576; the maximum is 65535.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;首选隧道 MTU。低于 576 的值按 576 处理；最大值为 65535。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MTU</source>
        <translation>MTU</translation>
    </message>
    <message>
        <source>OTP</source>
        <translation>OTP</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Traffic that falls through to this profile reaches the tunnel only when the destination is inside a subnet the VPN server advertises; anything else is blocked. Routing rules that name this profile explicitly are not affected and always win.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;落入这个配置档的兜底(falls through)流量，仅当目标地址位于 VPN 服务器广告的子网内时才会进入该隧道；除此之外的任何流量将被拦截。而那些显式指定这个配置档的路由规则不受影响，且始终赢得优先级。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Only route advertised network</source>
        <translation>仅路由通告的网络</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;How DNS uses the resolvers the VPN server pushes when this profile is started.&lt;/p&gt;&lt;p&gt;None: ignore them. Use this if the server claims every domain and breaks public DNS.&lt;br/&gt;Prefer: resolve the names the server claims - its split-DNS suffixes and search domains - through them, and everything else as usual.&lt;br/&gt;Strict: also send every remote DNS query to them instead of the remote DNS server, and fail the lookups they cannot answer. Direct lookups are unchanged.&lt;/p&gt;&lt;p&gt;As an endpoint in a routing profile, Prefer and Strict both resolve only the names the server claims.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;当启动这个配置档时，DNS 如何使用 VPN 服务器推送的解析器。&lt;/p&gt;&lt;p&gt;None：无，忽略它们。如果服务器声明了所有域名并导致公共 DNS 失效则使用这个选项。&lt;br/&gt;Prefer：优先，仅通过它们（解析器）解析服务器声明的名称（即其分流 DNS 后缀和搜索域），而其余的名称则照常解析。&lt;br/&gt;Strict：严格，也发送每个远程 DNS 查询到解析器（而不是远程 DNS 服务器），若它们无法应答则使解析失败。直接查询不受影响。&lt;/p&gt;&lt;p&gt;作为路由配置档中的端点的情况下，“优先”和“严格”均仅解析服务器声明的名称。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Tunnel DNS</source>
        <translation>隧道 DNS</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Disables verification of the server certificate and hostname. This lets an active attacker impersonate the VPN server; prefer a CA certificate or a peer fingerprint.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;禁用服务器证书和主机名验证。这会使主动攻击者能够冒充 VPN 服务器；建议优先使用 CA 证书或对端指纹。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Allow insecure</source>
        <translation>允许不安全</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Server name used for TLS SNI and certificate hostname verification. The hostname from the address is used when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于 TLS SNI 和证书主机名验证的服务器名称。留空时使用来自地址中的主机名。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Server Name</source>
        <translation>服务器名称</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Additional trusted CA certificate content in PEM format, added to the system certificate pool.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;采用 PEM 格式的其他受信任 CA （证书颁发机构）证书，添加到系统证书池。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>CA Certificate</source>
        <translation>CA 证书</translation>
    </message>
    <message>
        <source>Not set</source>
        <translation>未设置</translation>
    </message>
    <message>
        <source>Client Certificate</source>
        <translation>客户端证书</translation>
    </message>
    <message>
        <source>Client Key</source>
        <translation>客户端钥匙</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Password for the encrypted client private key.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;加密客户端私钥的密码。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Client Key Password</source>
        <translation>客户端钥匙密码</translation>
    </message>
    <message>
        <source>Prefer</source>
        <translation>优先</translation>
    </message>
    <message>
        <source>Strict</source>
        <translation>严格</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Binds an authenticator entry to this profile. %1 in the username, password, software token or form entry fields is replaced with a generated code at connect time.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;绑定身份验证器条目到这个配置档。用户名、密码、软件令牌或表单条目字段中的 %1 会在连接时被生成的代码替换。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>%1 is replaced at connect time</source>
        <translation>%1 在连接时被替换</translation>
    </message>
    <message>
        <source>Already set</source>
        <translation>已设置</translation>
    </message>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
</context>
<context>
    <name>EditOpenConnectAdvanced</name>
    <message>
        <source>OpenConnect Advanced</source>
        <translation>OpenConnect 高级</translation>
    </message>
    <message>
        <source>Session</source>
        <translation>会话</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Existing authentication session used to connect without first prompting for credentials. The accepted format depends on the flavor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;使用现有认证会话连接，而无需先提示输入凭据。可接受的格式取决于协议类型。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Cookie</source>
        <translation>Cookie</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Operating system identity reported to the server. anyconnect, gp and pulse accept linux, linux-64, win, mac-intel, android and apple-ios. The system platform is used by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;向服务器报告的操作系统标识。anyconnect, gp 和 pulse 接受 linux, linux-64, win, mac-intel, android 和 apple-ios。默认使用系统平台。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Reported OS</source>
        <translation>报告的OS</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;User agent reported to the server. The default is flavor specific.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;报告给服务器的“用户代理”(User agent)。默认值因协议类型而定。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>User Agent</source>
        <translation>用户代理</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Client version reported separately from the user agent. Currently used by AnyConnect XML authentication.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;客户端版本与用户代理分开报告。目前由 AnyConnect XML 身份验证使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <source>v9.21 (default)</source>
        <translation>v9.21 (默认)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Local hostname reported to the server. The system hostname is used by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;报告给服务器的本地主机名。默认使用系统主机名。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Local Hostname</source>
        <translation>本地主机名</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;This is the token the core generates itself. To use a Throne OTP profile, bind it on the main editor instead.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;这是核心自己生成的令牌。要使用 Throne OTP 配置档，请改为在主编辑器上绑定它。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Software Token</source>
        <translation>软件令牌</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;totp and hotp are one-time password modes, stoken is an RSA SecurID software token and oidc is an access token used for HTTP Bearer authentication.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;totp 和 hotp 是一次性密码模式，stoken 是一个 RSA SecurID 软件令牌，oidc 是用于 HTTP Bearer 认证的访问令牌。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A Base32 secret, a base32: prefixed secret or an otpauth:// URI for totp and hotp; the encoded CTF content for stoken; the access token for oidc. Conflicts with the secret path.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;一个 Base32 密钥，一个前缀 base32: 的密钥或用于 TOTP 和 HOTP 的 otpauth://URI；用于 stoken 的编码 CTF 内容；用于 OIDC 的访问令牌。与密码路径不能同时使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Secret</source>
        <translation>密钥</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Path to the token secret or access token. Conflicts with the inline secret.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;令牌密钥或访问令牌的路径。与内联密钥冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Secret Path</source>
        <translation>密钥路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;RSA SecurID PIN for stoken mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于 stoken 模式的 RSA SecurID PIN。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>PIN</source>
        <translation>PIN</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Password for decrypting a password-protected RSA SecurID token.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于解密受密码保护的 RSA SecurID 令牌的密码。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Device ID for decrypting a device-bound RSA SecurID token.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于解密设备绑定 RSA SecurID 令牌的设备 ID。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Device ID</source>
        <translation>设备 ID</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Initial counter for hotp mode. Empty uses the counter from an otpauth:// URI, otherwise zero.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;HOTP 模式的初始计数器。为空时使用来自 otpauth:// URI 中的计数器，否则为零。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Counter</source>
        <translation>计数器</translation>
    </message>
    <message>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Allowed server certificate fingerprints, one per line. Accepts a bare SHA-1 fingerprint or sha1:, sha256: and pin-sha256: values, abbreviated to at least four characters.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;允许的服务器证书指纹，每行一个。可接受裸 SHA-1 指纹或 sha1:、sha256: 及 pin-sha256: 值，缩写为至少四个字符。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Peer Fingerprint</source>
        <translation>对端指纹</translation>
    </message>
    <message>
        <source>Not set</source>
        <translation>未设置</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Use a CA certificate or a peer fingerprint to establish trust when this is enabled.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用这个功能时，使用 CA 证书或对等方指纹来建立信任。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable the system CA certificate pool</source>
        <translation>禁用系统的 CA 证书池</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline CA certificate on the main editor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与主编辑器上的内联 CA 证书冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>CA Certificate Path</source>
        <translation>CA 证书路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline client certificate on the main editor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与主编辑器上的内联客户端证书冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Client Certificate Path</source>
        <translation>客户端证书路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline client key on the main editor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与主编辑器上的内联客户端密钥冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Client Key Path</source>
        <translation>客户端钥匙路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AnyConnect multiple-certificate authentication chain in PEM format. Conflicts with the MCA certificate path.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AnyConnect 多证书认证链，采用 PEM 格式。与 MCA 证书路径不能同时使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MCA Certificate</source>
        <translation>MCA 证书</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline MCA certificate.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与内联 MCA 证书冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MCA Certificate Path</source>
        <translation>MCA 证书路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AnyConnect multiple-certificate authentication private key in PEM format. Conflicts with the MCA key path.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AnyConnect 多证书认证私钥使用 PEM 格式。与 MCA 密钥路径冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MCA Key</source>
        <translation>MCA 钥匙</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline MCA key.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与内联 MCA 键冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MCA Key Path</source>
        <translation>MCA 钥匙路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Password for the encrypted MCA private key.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;加密的 MCA 私钥的密码。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MCA Key Password</source>
        <translation>MCA 钥匙密码</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;All three fields are required when a mobile identity is configured.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;当配置移动身份时，所有三个字段都是必需的。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Mobile Identity</source>
        <translation>移动身份</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Mobile operating system version reported to the AnyConnect server.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;向 AnyConnect 服务器报告的移动操作系统版本。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Platform Version</source>
        <translation>平台版本</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Mobile device model or type reported to the AnyConnect server.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;向 AnyConnect 服务器报告的移动设备型号或类型。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Device Type</source>
        <translation>设备类型</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Mobile device identifier reported to the AnyConnect server.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;向 AnyConnect 服务器报告的移动设备标识符。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Device Unique ID</source>
        <translation>设备唯一 ID</translation>
    </message>
    <message>
        <source>Compliance</source>
        <translation>合规检查</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;External AnyConnect CSD / host scan wrapper executable. Built-in handling is used when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;外部 AnyConnect CSD / 主机扫描封装可执行文件。为空时使用内置处理。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>CSD Wrapper Path</source>
        <translation>CSD 封装器路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;External GlobalProtect HIP report wrapper executable. Built-in reporting is used when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;外部 GlobalProtect HIP 报告封装可执行文件。当为空时使用内置报告。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>HIP Wrapper Path</source>
        <translation>HIP 封装器路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Fortinet hostcheck result string, conventionally security-status,os-version such as 0100,10.0.19042. An empty value disables hostcheck.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Fortinet 主机检查结果字符串，通常为 security-status,os-version，例如 0100,10.0.19042。空值将禁用主机检查。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Fortinet Hostcheck</source>
        <translation>Fortinet 主机检查</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Fortinet virtual desktop check result, conventionally colon separated MAC addresses joined by a vertical bar.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Fortinet 虚拟桌面检查结果，通常是冒号间隔的用竖线串连的 MAC 地址。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Fortinet Virtual Desktop</source>
        <translation>Fortinet 虚拟桌面</translation>
    </message>
    <message>
        <source>TNCC</source>
        <translation>TNCC</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;External Network Connect TNCC wrapper executable. Conflicts with every other field in this group.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;外部网络连接 TNCC 封装器可执行文件。与这个组中的每个其他字段冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Wrapper Path</source>
        <translation>封装器路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Device ID reported by the built-in TNCC handler.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;由内置 TNCC 处理程序报告的设备 ID。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;User agent used by the built-in TNCC handler. Neoteris HC Http is used by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;内置 TNCC 处理程序使用的用户代理。默认使用 Neoteris HC Http。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Reports the platform, hostname and observed MAC addresses. Required before machine certificates are used.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;报告平台、主机名和观察到的 MAC 地址。在使用机器证书前所需。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable machine identification</source>
        <translation>启用机器识别</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Machine certificates used by the built-in TNCC handler to answer certificate requests. Requires machine identification.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;内置 TNCC 处理程序用来响应证书请求的机器证书。需要机器身份识别。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Certificate</source>
        <translation>证书</translation>
    </message>
    <message>
        <source>Certificate Path</source>
        <translation>证书路径</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Edit Certificate</source>
        <translation>编辑证书</translation>
    </message>
    <message>
        <source>Authentication Forms</source>
        <translation>认证表单</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;An entry matches by submission key when set, or by the combination of form ID and name. Later matching entries take precedence. Ask interactively conflicts with a value.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;当设置了提交键时，条目会按提交键匹配，或者按表单 ID 和名称的组合匹配。靠后的匹配条目优先。交互式询问会与某个值冲突。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Form ID</source>
        <translation>表单 ID</translation>
    </message>
    <message>
        <source>Submission Key</source>
        <translation>提交键</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>值</translation>
    </message>
    <message>
        <source>Ask interactively</source>
        <translation>交互式提问</translation>
    </message>
    <message>
        <source>Transport</source>
        <translation>传输</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Uses the TLS data channel only.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;仅使用 TLS 数据通道。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable the DTLS or ESP data channel</source>
        <translation>禁用 DTLS 或 ESP 数据通道</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Local UDP port used by the secondary data channel. An ephemeral port is selected by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;次要数据通道使用的本地 UDP 端口。默认情况下会选择一个临时(ephemeral)端口。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>DTLS Local Port</source>
        <translation>DTLS 本地端口</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Compression can weaken traffic confidentiality. Conflicts with the compression mode all.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;压缩可能削弱流量的保密性。与压缩模式 all (全部)冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable compression negotiation</source>
        <translation>禁用压缩协商</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;stateless is used by default. all additionally advertises stateful deflate for CSTP and carries extra confidentiality risk.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;默认使用 stateless (无状态)。all 额外为 CSTP 宣传有状态 deflate (压缩)，并带来额外的机密性风险。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Compression Mode</source>
        <translation>压缩模式</translation>
    </message>
    <message>
        <source>Disable IPv6 tunnel configuration</source>
        <translation>禁用 IPv6 隧道配置</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Applies to authentication and configuration requests.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;适用于身份验证和配置请求。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable HTTP connection reuse</source>
        <translation>禁用 HTTP 连接重用</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Starts AnyConnect authentication with the legacy GET flow.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用旧版的 GET 流程启动 AnyConnect 认证。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable XML POST authentication</source>
        <translation>禁用 XML POST 认证</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;External authentication is not advertised and any unexpected SSO or SAML request is rejected.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;不宣告外部认证，并拒绝任何预期外的 SSO (单点登录)或 SAML (安全断言标记语言)请求。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable external browser authentication</source>
        <translation>禁用外部浏览器认证</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Matches OpenConnect --no-passwd. Does not affect other flavors or a session supplied by a cookie.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;匹配 OpenConnect --no-passwd 选项。对其他协议类型或通过 cookie 提供的会话不影响。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Abort on a non-success authentication form</source>
        <translation>认证表单不成功时中止</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Disabled by default to match OpenConnect.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;默认禁用以匹配 OpenConnect。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Enable TCP keep alive</source>
        <translation>启用 TCP 保活</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;For TLS 1.2 and earlier. Disabled by default for servers that require RSA key exchange.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;适用于 TLS 1.2 及更早版本。对于需要 RSA 密钥交换的服务器，默认禁用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Require forward-secret cipher suites</source>
        <translation>要求“前向保密”密码套件</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enables weak cipher suites and TLS 1.0 compatibility. It does not disable server certificate verification.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;启用弱密码套件并兼容 TLS 1.0 。它不会禁用服务器证书验证。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Allow legacy TLS and DTLS crypto</source>
        <translation>允许旧版 TLS 和 DTLS 加密算法</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Base path MTU used to calculate the tunnel MTU after outer IP, transport and protocol overhead. Values below 1280 are treated as 1280.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于在外部 IP、传输和协议开销之后计算隧道 MTU 的基础路径 MTU。低于 1280 的值将被视为 1280。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Base MTU</source>
        <translation>基本 MTU</translation>
    </message>
    <message>
        <source>1406 (default)</source>
        <translation>1406 (默认)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Overrides the dead peer detection interval. Positive values below 2s are treated as 2s.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;覆盖失效对端(dead peer)检测间隔。小于 2 秒的正值将被视为 2 秒。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>DPD Interval</source>
        <translation>DPD 间隔</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Maximum accumulated backoff time after failed reconnect attempts.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;重新尝试连接失败后的最大累计退避时间。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Reconnect Timeout</source>
        <translation>重新连接超时</translation>
    </message>
    <message>
        <source>300s (default)</source>
        <translation>300s (300秒，默认)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Overrides the interval between GlobalProtect HIP reports or Network Connect TNCC checks.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;覆盖 GlobalProtect HIP 报告或 Network Connect TNCC 检查之间的间隔。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Trojan Interval</source>
        <translation>Trojan 间隔</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Inbound and outbound packet queue length between the VPN transport and the tunnel interface.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;VPN 传输与隧道接口之间的入站和出站(收发)数据包队列长度。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Queue Length</source>
        <translation>队列长度</translation>
    </message>
    <message>
        <source>32 (default)</source>
        <translation>32 (默认)</translation>
    </message>
    <message>
        <source>Already set</source>
        <translation>已设置</translation>
    </message>
    <message>
        <source>TNCC Machine Certificate</source>
        <translation>TNCC 机器证书</translation>
    </message>
</context>
<context>
    <name>EditOpenVPN</name>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Default transport network. Leave empty to use the core default (udp).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;默认传输层网络(协议)。留空表示使用核心的默认设置 (udp)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>网络协议</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Static challenge text shown by the server when it asks for a second authentication response. When a challenge is set and an OTP profile is bound, Throne sends the answer itself and no interactive prompt appears.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;服务器在要求第二次身份验证响应时显示的静态质询文本。当设置了质询文本并绑定了 OTP 配置档时，Throne 将自行发送应答，而不出现交互式提示。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Static Challenge</source>
        <translation>静态质询</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Show the static challenge response as plain text.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;显示静态质询响应为纯文本。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Echo challenge response</source>
        <translation>回显质询响应</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Tunnel MTU. Empty uses 1500 until the server pushes a value.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;隧道 MTU。留空使用 1500，直至服务器推送一个值。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MTU</source>
        <translation>MTU</translation>
    </message>
    <message>
        <source>OTP</source>
        <translation>OTP</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Traffic that falls through to this profile reaches the tunnel only when the destination is inside a subnet the VPN server advertises; anything else is blocked. Routing rules that name this profile explicitly are not affected and always win.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;落入这个配置档的兜底(falls through)流量，仅当目标地址位于 VPN 服务器广告的子网内时才会进入该隧道；除此之外的任何流量将被拦截。而那些显式指定这个配置档的路由规则不受影响，且始终赢得优先级。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Only route advertised network</source>
        <translation>仅路由通告的网络</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;How DNS uses the resolvers the VPN server pushes when this profile is started.&lt;/p&gt;&lt;p&gt;None: ignore them. Use this if the server claims every domain and breaks public DNS.&lt;br/&gt;Prefer: resolve the names the server claims - its split-DNS suffixes and search domains - through them, and everything else as usual.&lt;br/&gt;Strict: also send every remote DNS query to them instead of the remote DNS server, and fail the lookups they cannot answer. Direct lookups are unchanged.&lt;/p&gt;&lt;p&gt;As an endpoint in a routing profile, Prefer and Strict both resolve only the names the server claims.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;当启动这个配置档时，DNS 如何使用 VPN 服务器推送的解析器。&lt;/p&gt;&lt;p&gt;None：无，忽略它们。如果服务器声明了所有域名并导致公共 DNS 失效则使用这个选项。&lt;br/&gt;Prefer：优先，仅通过它们（解析器）解析服务器声明的名称（即其分流 DNS 后缀和搜索域），而其余的名称则照常解析。&lt;br/&gt;Strict：严格，也发送每个远程 DNS 查询到解析器（而不是远程 DNS 服务器），若它们无法应答则使解析失败。直接查询不受影响。&lt;/p&gt;&lt;p&gt;作为路由配置档中的端点的情况下，“优先”和“严格”均仅解析服务器声明的名称。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Tunnel DNS</source>
        <translation>隧道 DNS</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Trusted CA certificate content (PEM).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;受信任的 CA (颁发机构)证书内容 (PEM)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>CA Certificate</source>
        <translation>CA 证书</translation>
    </message>
    <message>
        <source>Not set</source>
        <translation>未设置</translation>
    </message>
    <message>
        <source>Client Certificate</source>
        <translation>客户端证书</translation>
    </message>
    <message>
        <source>Client Key</source>
        <translation>客户端钥匙</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN tls-auth / tls-crypt / tls-crypt-v2 control channel wrapping. Disabled when the type is empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN tls-auth / tls-crypt / tls-crypt-v2 控制通道封装。类型为空时禁用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Control Channel Wrap</source>
        <translation>控制通道封装</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>Key</source>
        <translation>钥匙</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;tls-auth key direction. Only used when the type is tls_auth; the key is bidirectional when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;tls-auth 钥匙方向。仅当类型为 tls_auth 时使用；留空时则钥匙双向使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Direction</source>
        <translation>方向</translation>
    </message>
    <message>
        <source>Prefer</source>
        <translation>优先</translation>
    </message>
    <message>
        <source>Strict</source>
        <translation>严格</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Binds an authenticator entry to this profile. %1 in the username or password is replaced with a generated code at connect time, and a static challenge is answered with the same code.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;绑定一个认证条目到这个配置档。在用户名或密码中的 %1 会在连接时替换为生成的代码，并用相同的代码应答静态质询。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>%1 is replaced at connect time</source>
        <translation>%1 在连接时被替换</translation>
    </message>
    <message>
        <source>Control Channel Wrap Key</source>
        <translation>控制通道封装钥匙</translation>
    </message>
    <message>
        <source>Already set</source>
        <translation>已设置</translation>
    </message>
    <message>
        <source>None</source>
        <translation>无</translation>
    </message>
</context>
<context>
    <name>EditOpenVPNAdvanced</name>
    <message>
        <source>OpenVPN Advanced</source>
        <translation>OpenVPN 高级</translation>
    </message>
    <message>
        <source>Session</source>
        <translation>会话</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN session mode. tls is used by default; static_key is a deprecated mode without a TLS control channel.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN 会话模式，默认使用 TLS；static_key 是一种弃用的模式，没有 TLS 控制通道。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Tunnel topology. The topology pulled from the server is used when empty in TLS mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;隧道拓扑。TLS 模式下为空时，会使用从服务器获取的拓扑信息。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Topology</source>
        <translation>拓扑</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Behavior after username/password authentication fails. none is used by default and treats a permanent failure as terminal.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用户名/密码认证失败后的处理行为。默认不采取任何操作；把永久性失败视为终止状态。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Auth Retry</source>
        <translation>认证重试</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Randomize the server list before connecting.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;连接前随机化服务器列表。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Randomize server order</source>
        <translation>随机化服务器顺序</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Comma separated local tunnel prefixes. At least one is required in static_key mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;逗号间隔的本地隧道前缀。在 static_key 模式下，至少需要填写一个。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Local Address</source>
        <translation>本地地址</translation>
    </message>
    <message>
        <source>10.8.0.2/24, fd00::2/64</source>
        <translation>10.8.0.2/24, fd00::2/64</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;IPv4 tunnel peer address and VPN gateway. Required with an IPv4 local address in static_key mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;IPv4 隧道对端(peer)地址和 VPN 网关。在 static_key 模式下需要与 IPv4 本地地址一起使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Peer Address</source>
        <translation>对端地址</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;IPv6 tunnel peer address and VPN gateway. Required with an IPv6 local address in static_key mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;IPv6 隧道对端(peer)地址和 VPN 网关。在 static_key 模式下需要与 IPv6 本地地址一起使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Peer Address (IPv6)</source>
        <translation>对端地址 (IPv6)</translation>
    </message>
    <message>
        <source>Servers</source>
        <translation>服务器</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Servers are tried in order and the client moves to the next one when a connection fails. Leave empty to use the address and port from the profile.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;服务器会按序尝试，客户端会在失败时换到下一个。留空表示使用来自配置档的地址和端口。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Server</source>
        <translation>服务器</translation>
    </message>
    <message>
        <source>Port</source>
        <translation>端口</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>传输(网络)</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Static Key Mode</source>
        <translation>静态钥匙模式</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Static key content. Required in static_key mode. Conflicts with the static key path.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;静态钥匙(Static key)内容。在 static_key 模式下必需。与静态钥匙路径不能同时使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Static Key</source>
        <translation>静态钥匙</translation>
    </message>
    <message>
        <source>Not set</source>
        <translation>未设置</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline static key.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与内联静态钥匙不能同时使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Static Key Path</source>
        <translation>静态钥匙路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Static key direction. The key is used bidirectionally when empty. Only available in static_key mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;静态钥匙方向。留空时则双向使用该钥匙。仅在 static_key 模式下可用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Key Direction</source>
        <translation>钥匙方向</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Data channel cipher used in static_key mode. The upstream default BF-CBC is used when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在 static_key 模式下使用的数据通道密码算法。留空时使用上游默认的 BF-CBC。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Data Cipher</source>
        <translation>数据密码算法</translation>
    </message>
    <message>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Expected server certificate name. Name verification is disabled when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;预期的服务器证书名称。留空时禁用名称验证。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Server Name</source>
        <translation>服务器名称</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Certificate field matched by the server name. name is used by default and matches the common name exactly.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;被服务器名称匹配的证书字段。默认使用“name”（名称）并精确匹配“common name”（通用名称）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Server Name Type</source>
        <translation>服务器名称类型</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline CA certificate on the main editor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与主编辑器上的内联 CA 证书冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>CA Certificate Path</source>
        <translation>CA 证书路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline client certificate on the main editor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与主编辑器上的内联客户端证书冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Client Certificate Path</source>
        <translation>客户端证书路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline client key on the main editor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与主编辑器上的内联客户端密钥冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Client Key Path</source>
        <translation>客户端钥匙路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with the inline control channel wrap key on the main editor.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与主要编辑器上控制通道 wrap 钥匙不能同时使用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Control Wrap Key Path</source>
        <translation>控制 Wrap 钥匙路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Allowed SHA-256 fingerprints of the server leaf certificate, one per line, 64 lowercase hexadecimal characters without separators.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;允许的服务器叶证书的 SHA-256 指纹，每行一个，必须是 64 个小写十六进制字符，且不含分隔符。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Peer Fingerprint</source>
        <translation>对端指纹</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;PEM or DER certificate revocation list used to reject revoked server certificates.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于拒绝已撤销服务器证书的 PEM 或 DER 格式的 CRL (Certificate Revocation List 证书吊销列表)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>CRL Path</source>
        <translation>CRL 路径</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Comma separated hexadecimal key usage masks in OpenVPN remote-cert-ku format.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;逗号间隔的十六进制钥匙用法掩码，格式为 OpenVPN `remote-cert-ku` 格式。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Remote Certificate KU</source>
        <translation>远程证书钥匙用法</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Required extended key usage. Conflicts with an explicit remote certificate TLS check.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;需要 EKU (Extended Key Usage 扩展钥匙用法)。与显式远程证书 TLS 检查冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Remote Certificate EKU</source>
        <translation>远程证书扩展钥匙用法</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Peer certificate purpose check. server is used by default; none disables the check.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;对端证书用途检查。默认使用 server (服务器)；选择 none (无)将禁用该检查。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Remote Certificate TLS</source>
        <translation>远程证书 TLS</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;legacy is used by default. insecure accepts MD5 and SHA-1 signed chains; preferred requires stronger signatures and keys.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;默认使用 &quot;legacy&quot;。insecure 接受 MD5 和 SHA-1 签名的（证书）链；preferred 需要更强的签名和钥匙。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Certificate Profile</source>
        <translation>证书配置方案</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Deprecated Netscape certificate type check. Prefer Remote Certificate TLS.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;已弃用的 Netscape 证书类型检查。建议使用“远程证书 TLS”。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>NS Certificate Type</source>
        <translation>NS 证书类型</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;1.2 is used by default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;默认使用 1.2。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Min TLS Version</source>
        <translation>最小 TLS 版本</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;The maximum supported version is used by default. It cannot be lower than the minimum.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;默认使用支持的最高版本。它不能低于最低版本。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Max TLS Version</source>
        <translation>最大 TLS 版本</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Colon separated OpenSSL cipher suite names allowed for TLS 1.2 and earlier.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;允许用于 TLS 1.2 及更早版本的以冒号间隔的 OpenSSL 密码（算法）套件名称。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>TLS Cipher</source>
        <translation>TLS 密码套件</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Colon separated key exchange groups in preference order: X25519, SECP256R1, SECP384R1, SECP521R1.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;按偏好顺序以冒号间隔的密钥交换组：X25519、SECP256R1、SECP384R1、SECP521R1。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>TLS Groups</source>
        <translation>TLS 组</translation>
    </message>
    <message>
        <source>Data Channel</source>
        <translation>数据通道</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Comma separated allowed data channel ciphers. Only available in TLS mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;逗号间隔的允许的数据通道密码算法。仅在 TLS 模式下可用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Data Ciphers</source>
        <translation>数据密码算法</translation>
    </message>
    <message>
        <source>AES-256-GCM,AES-128-GCM,CHACHA20-POLY1305</source>
        <translation>AES-256-GCM,AES-128-GCM,CHACHA20-POLY1305</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Data channel cipher for peers that do not support cipher negotiation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于不支持密码算法协商的对端的数据通道密码算法。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Data Ciphers Fallback</source>
        <translation>数据密码算法回退</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Data channel authentication digest. SHA1 is used by default and only applies to non-AEAD ciphers and tls_auth.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;数据通道认证摘要算法(digest)。默认使用 SHA1，仅适用于非 AEAD 密码算法和 tls_auth。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Auth Digest</source>
        <translation>认证摘要算法</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Maximum UDP packet size used to clamp the MSS of TCP connections sent through the tunnel.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于限制通过隧道发送的 TCP 连接的 MSS 的最大 UDP 数据包大小。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MSS Fix</source>
        <translation>MSS 修正</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Disables MSS clamping including the default clamp. Conflicts with MSS Fix and MSS Fix Mode.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;禁用 MSS 限制，包括默认限制。与 MSS Fix (修正)和 MSS Fix Mode (修正模式)冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable MSS clamping</source>
        <translation>禁用 MSS 限制</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;mtu also accounts for the outer IP and transport headers; fixed treats MSS Fix as an inner IPv4 packet size. Requires MSS Fix.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;MTU 同样计入外部 IP 和传输层标头；`fixed` 将 MSS 修正视为内层 IPv4 数据包大小。需要（启用） MSS 修正。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>MSS Fix Mode</source>
        <translation>MSS 修正模式</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Maximum UDP packet size used for data channel fragmentation. A non-zero value must be at least 68. Conflicts with TCP transport.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于数据通道分片的最大 UDP 数据包大小。非零值必须至少为 68。与 TCP 传输冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Fragment</source>
        <translation>分片</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP replay window size. 64 is used by default and the maximum is 65536.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP 重放窗口大小。默认使用 64，最大值为 65536。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Replay Window</source>
        <translation>重放窗口</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP replay window duration in whole seconds. The maximum is 10m.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;UDP 重放窗口持续时间(以整秒为单位)。最大值为 10 分钟。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Replay Window Time</source>
        <translation>重放窗口时间</translation>
    </message>
    <message>
        <source>15s (default)</source>
        <translation>15s (15秒，默认)</translation>
    </message>
    <message>
        <source>Compression</source>
        <translation>压缩</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN compress framing mode. Disabled by default. Compression can weaken traffic confidentiality.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN 压缩帧模式。默认禁用。压缩可能削弱流量的机密性。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN comp-lzo mode. Disabled by default. Enable it only when required by the server.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;OpenVPN comp-lzo 模式。默认禁用。仅在服务器要求时启用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Compression LZO</source>
        <translation>压缩 LZO</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Policy for compression pushed by the server. no is used by default and permits only stub framing.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;服务器推送的压缩处理策略。默认使用 no，仅允许 stub (存根)帧格式。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Allow Compression</source>
        <translation>允许压缩</translation>
    </message>
    <message>
        <source>Routing</source>
        <translation>路由</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Ignores routes, DNS, route metrics, redirect-gateway, redirect-private and block-ipv6 pushed by the server.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;忽略服务器推送的路由、DNS、路由度量、redirect-gateway (重定向网关)、redirect-private (重定向私有)以及 block-ipv6 (阻止 IPv6) 设置。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Ignore pushed routes, DNS and gateway options</source>
        <translation>忽略推送的路由、DNS 和网关选项</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Comma separated prefixes preferred for this endpoint, in addition to routes accepted from the server.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;这个端点首选的前缀（逗号间隔），此外还使用接收自服务器的路由。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Routes</source>
        <translation>路由</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;IPv4 gateway for routes through the endpoint. The gateway received from the server is used when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;通过该端点的路由的 IPv4 网关。为空时使用从服务器接收的网关。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Route Gateway</source>
        <translation>路由网关</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Default metric for routes through the endpoint. The platform default is used when empty.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;通过该端点的路由的默认度量值。为空时使用平台默认值。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Route Metric</source>
        <translation>路由度量</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Does not install an operating system default route.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;不安装操作系统默认路由。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Prefer this endpoint for all IPv4 destinations</source>
        <translation>所有 IPv4 目标首选这个端点</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Comma separated OpenVPN redirect-gateway flags, for example !ipv4, def1 or ipv6.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;逗号间隔的 OpenVPN redirect-gateway (重定向网关)标志，例如 !ipv4、def1 或 ipv6。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Redirect Gateway Flags</source>
        <translation>“重定向网关”标志</translation>
    </message>
    <message>
        <source>Accept redirect gateway flags without a default route preference</source>
        <translation>接受 redirect gateway (重定向网关)标志而不使用默认路由偏好</translation>
    </message>
    <message>
        <source>Reject IPv6 traffic locally instead of sending it through the VPN</source>
        <translation>本地拒绝 IPv6 流量，而不是通过 VPN 发送它</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Ordered filters for options pushed by the server. The first filter whose text is a case-sensitive prefix of the complete pushed option is applied.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;用于服务器推送选项的有序过滤器。（过滤器）文本是完整推送选项的区分大小写的前缀的第一个过滤器将被应用。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>动作</translation>
    </message>
    <message>
        <source>Text</source>
        <translation>文本</translation>
    </message>
    <message>
        <source>Timers</source>
        <translation>计时器</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whole seconds of silence before a data channel ping is sent. A server-pushed value overrides it.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在发送数据通道 ping 前的静默整秒数。服务器推送值优先于它。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Ping Interval</source>
        <translation>Ping 间隔</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Whole seconds without a received packet before reconnecting. 120s is used for UDP with pull enabled.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;重新连接前允许没有收到数据包的整秒数。启用 pull (拉取)的 UDP 使用 120 秒。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Ping Restart</source>
        <translation>Ping 重启</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Disables the initial 120s UDP pull timeout and any configured ping restart. Conflicts with Ping Restart.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;禁用初始 120 秒 UDP pull (拉取)超时以及任何已配置的 ping 重启。与 Ping 重启冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable ping restart</source>
        <translation>禁用 ping 重启</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;TLS renegotiation interval.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;TLS 重新协商间隔。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Renegotiate Interval</source>
        <translation>重新协商间隔</translation>
    </message>
    <message>
        <source>1h (default)</source>
        <translation>1h (1小时，默认)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Conflicts with Renegotiate Interval.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;与“重新协商间隔”冲突（不能同时使用）。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable time based renegotiation</source>
        <translation>禁用基于时间的重新协商</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Renegotiate data channel keys after this many bytes. Empty uses the cipher-dependent default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在传输指定字节数后重新协商数据通道密钥。为空时使用取决于密码算法的默认值。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Renegotiate Bytes</source>
        <translation>重新协商字节数</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Renegotiate data channel keys after this many packets. Empty uses the cipher-dependent default.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;在传输指定数量数据包后重新协商数据通道密钥。为空则使用取决于密码算法的默认值。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Renegotiate Packets</source>
        <translation>重新协商数据包数</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Initial retransmission timeout for TLS control packets.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;TLS 控制数据包的初始重传超时。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>TLS Timeout</source>
        <translation>TLS 超时</translation>
    </message>
    <message>
        <source>2s (default)</source>
        <translation>2s (2秒，默认)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Maximum time allowed for the initial handshake and each renegotiation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;初始握手和每次重新协商允许的最长时间。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Handshake Window</source>
        <translation>握手窗口</translation>
    </message>
    <message>
        <source>1m (default)</source>
        <translation>1m (1分钟，默认)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Number of exit notifications sent one second apart when closing a UDP connection.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;关闭 UDP 连接时发送的退出通知数量(每条通知间隔一秒)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Explicit Exit Notify</source>
        <translation>显式退出通知</translation>
    </message>
    <message>
        <source>Already set</source>
        <translation>已设置</translation>
    </message>
</context>
<context>
    <name>EditSSH</name>
    <message>
        <source>User</source>
        <translation>用户</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Private Key</source>
        <translation>私钥</translation>
    </message>
    <message>
        <source>Private Key Password</source>
        <translation>私钥密码</translation>
    </message>
    <message>
        <source>Host Key</source>
        <translation>主机钥匙</translation>
    </message>
    <message>
        <source>Host Key Algorithms</source>
        <translation>主机钥匙算法</translation>
    </message>
    <message>
        <source>Client Version</source>
        <translation>客户端版本</translation>
    </message>
    <message>
        <source>Private Key Path</source>
        <translation>私钥路径</translation>
    </message>
    <message>
        <source>Choose File</source>
        <translation>选择文件</translation>
    </message>
</context>
<context>
    <name>EditShadowSocks</name>
    <message>
        <source>Plugin</source>
        <translation>插件</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>加密</translation>
    </message>
    <message>
        <source>Plugin Args</source>
        <translation>插件参数</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>UDP over TCP</source>
        <translation>基于 TCP 的 UDP</translation>
    </message>
</context>
<context>
    <name>EditShadowTLS</name>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>版本</translation>
    </message>
</context>
<context>
    <name>EditSnell</name>
    <message>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <source>PSK</source>
        <translation>PSK</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Per-user key on a multi-user server. Leave empty when the server only has a PSK.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;多用户服务器的每用户专属钥匙。当服务器仅有 PSK (Pre-Shared Key 预共享密钥)时留空。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>User Key</source>
        <translation>用户钥匙</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Restrict this outbound to one network. Leave empty to carry both TCP and UDP.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;限制这个出站到某个网络（协议）。留空表示同时承载 TCP 和 UDP。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>网络协议</translation>
    </message>
    <message>
        <source>Obfuscation</source>
        <translation>混淆</translation>
    </message>
    <message>
        <source>Obfuscation Host</source>
        <translation>混淆主机</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Traffic shaping used by Snell v6. &quot;unsafe-raw&quot; disables padding and is faster but easier to fingerprint.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Snell v6 使用了流量塑形。&quot;unsafe-raw&quot; (不安全原始数据)禁止填充且更快，但是更容易被指纹识别。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>模式</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Keep idle connections to the server open and reuse them for later requests.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;保持与服务器的空闲连接开启状态，并把它们重复用于之后的请求。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Reuse connections</source>
        <translation>重用连接</translation>
    </message>
</context>
<context>
    <name>EditSocks</name>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>版本</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>5</source>
        <translation></translation>
    </message>
    <message>
        <source>4</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>EditTailScale</name>
    <message>
        <source>State directory</source>
        <translation>状态目录</translation>
    </message>
    <message>
        <source>Auth key</source>
        <translation>认证钥匙</translation>
    </message>
    <message>
        <source>Control URL</source>
        <translation>控制 URL</translation>
    </message>
    <message>
        <source>Hostname</source>
        <translation>主机名</translation>
    </message>
    <message>
        <source>Accept routes</source>
        <translation>接受路由</translation>
    </message>
    <message>
        <source>Ephemeral</source>
        <translation>Ephemeral (短暂)</translation>
    </message>
    <message>
        <source>Exit node allow lan access</source>
        <translation>出口节点允许LAN访问</translation>
    </message>
    <message>
        <source>Advertise exit node</source>
        <translation>通告出口节点</translation>
    </message>
    <message>
        <source>Exit node</source>
        <translation>出口节点</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;comma seperated list of subnets&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;子网的逗号间隔列表&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Advertise routes</source>
        <translation>通告路由</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;use tailscale dns as the remote dns&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;使用 tailscale dns 作为远程 dns&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Global DNS</source>
        <translation>全局 DNS</translation>
    </message>
</context>
<context>
    <name>EditTrojan</name>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
</context>
<context>
    <name>EditTrustTunnel</name>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Custom SNI</source>
        <translation>自定义SNI</translation>
    </message>
    <message>
        <source>Server name sent in the TLS ClientHello instead of the TLS server name, which is still used to verify the certificate; not compatible with ECH or REALITY</source>
        <translation>在 TLS ClientHello 中发送的服务器名称（代替原 TLS 服务器名称），而原服务器名称仍用于验证证书；不兼容 ECH 或 REALITY</translation>
    </message>
    <message>
        <source>optional, e.g. cdn.example.net</source>
        <translation>可选，如 cdn.example.net</translation>
    </message>
    <message>
        <source>Client Random</source>
        <translation>客户端随机</translation>
    </message>
    <message>
        <source>TLS ClientHello random prefix required by the server&apos;s client_random_prefix rule; not compatible with ECH or REALITY</source>
        <translation>服务器的 client_random_prefix 规则所需要的 TLS ClientHello 随机前缀；不兼容 ECH 或 REALITY</translation>
    </message>
    <message>
        <source>prefix[/mask] (hex), e.g. a0b0/f0f0</source>
        <translation>前缀[/掩码] (hex), 如 a0b0/f0f0</translation>
    </message>
    <message>
        <source>Health Check</source>
        <translation>健康度检查</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>用户名</translation>
    </message>
    <message>
        <source>bbr</source>
        <translation>bbr</translation>
    </message>
    <message>
        <source>cubic</source>
        <translation>cubic</translation>
    </message>
    <message>
        <source>reno</source>
        <translation></translation>
    </message>
    <message>
        <source>bbr_standard</source>
        <translation>标准BBR</translation>
    </message>
    <message>
        <source>bbr2</source>
        <translation></translation>
    </message>
    <message>
        <source>bbr_variant</source>
        <translation>BBR变体</translation>
    </message>
    <message>
        <source>Congestion Control</source>
        <translation>拥塞控制</translation>
    </message>
    <message>
        <source>QUIC</source>
        <translation></translation>
    </message>
</context>
<context>
    <name>EditTuic</name>
    <message>
        <source>Heartbeat</source>
        <translation>心跳包</translation>
    </message>
    <message>
        <source>UDP Relay Mode</source>
        <translation>UDP 中继模式</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>密码</translation>
    </message>
    <message>
        <source>Zero RTT Handshake</source>
        <translation>零 RTT 握手</translation>
    </message>
    <message>
        <source>UUID</source>
        <translation></translation>
    </message>
    <message>
        <source>bbr</source>
        <translation>bbr</translation>
    </message>
    <message>
        <source>cubic</source>
        <translation>cubic</translation>
    </message>
    <message>
        <source>new_reno</source>
        <translation></translation>
    </message>
    <message>
        <source>Congestion Control</source>
        <translation>拥塞控制</translation>
    </message>
    <message>
        <source>native</source>
        <translation>native</translation>
    </message>
    <message>
        <source>quic</source>
        <translation></translation>
    </message>
    <message>
        <source>UDP over Stream</source>
        <translation>基于流的 UDP</translation>
    </message>
</context>
<context>
    <name>EditVMess</name>
    <message>
        <source>Generate UUID</source>
        <translation>生成 UUID</translation>
    </message>
    <message>
        <source>Alter Id</source>
        <translation>Alter Id (备用ID)</translation>
    </message>
    <message>
        <source>Security</source>
        <translation>安全性</translation>
    </message>
    <message>
        <source>UUID</source>
        <translation></translation>
    </message>
    <message>
        <source>Packet Encoding</source>
        <translation>数据包编码</translation>
    </message>
</context>
<context>
    <name>EditVless</name>
    <message>
        <source>UUID</source>
        <translation></translation>
    </message>
    <message>
        <source>Packet Encoding</source>
        <translation>数据包编码</translation>
    </message>
</context>
<context>
    <name>EditWireguard</name>
    <message>
        <source>Private Key</source>
        <translation>私钥</translation>
    </message>
    <message>
        <source>Public Key</source>
        <translation>公钥</translation>
    </message>
    <message>
        <source>Pre Shared Key</source>
        <translation>预共享钥匙</translation>
    </message>
    <message>
        <source>Reserved</source>
        <translation>保留</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;persistent_keepalive_interval in seconds, or an AmneziaWG range such as 22-30&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;以秒为单位的 persistent_keepalive_interval (持久保活间隔)值，或一个 AmneziaWG 范围，如 22-30&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Persistent Keepalive</source>
        <translation>持久保活</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;comma seperated list of subnets&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;子网的逗号间隔列表&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Local Address</source>
        <translation>本地地址</translation>
    </message>
    <message>
        <source>MTU</source>
        <translation>MTU</translation>
    </message>
    <message>
        <source>1420</source>
        <translation></translation>
    </message>
    <message>
        <source>Workers</source>
        <translation>工作线程</translation>
    </message>
    <message>
        <source>Use System Interface</source>
        <translation>使用系统接口</translation>
    </message>
    <message>
        <source>Enable Amnezia</source>
        <translation>启用 Amnezia</translation>
    </message>
    <message>
        <source>Edit the AmneziaWG obfuscation parameters (junk packets, magic headers, signatures).</source>
        <translation>编辑 AmneziaWG 混淆参数（垃圾数据包、魔法标头、签名）。</translation>
    </message>
    <message>
        <source>Amnezia Options</source>
        <translation>Amnezia 选项</translation>
    </message>
    <message>
        <source>Generate a Cloudflare WARP account and fill the key, address and endpoint fields above.</source>
        <translation>生成一个 Cloudflare WARP 账户并填写上面的钥匙、地址以及端点字段。</translation>
    </message>
    <message>
        <source>Generate Warp Config</source>
        <translation>生成 Warp 配置</translation>
    </message>
    <message>
        <source>Generating config...</source>
        <translation>正在生成配置…</translation>
    </message>
    <message>
        <source>Failed to generate warp config</source>
        <translation>生成 warp 配置失败</translation>
    </message>
    <message>
        <source>Success!</source>
        <translation>成功!</translation>
    </message>
</context>
<context>
    <name>EditWireguardAmnezia</name>
    <message>
        <source>Amnezia Options</source>
        <translation>Amnezia 选项</translation>
    </message>
    <message>
        <source>Junk Packet Count (Jc)</source>
        <translation>垃圾数据包数量 (Jc)</translation>
    </message>
    <message>
        <source>Junk Packet Min Size (Jmin)</source>
        <translation>垃圾数据包最小大小 (Jmin)</translation>
    </message>
    <message>
        <source>Junk Packet Max Size (Jmax)</source>
        <translation>垃圾数据包最大大小 (Jmax)</translation>
    </message>
    <message>
        <source>Init Packet Junk Size (S1)</source>
        <translation>初始数据包垃圾大小 (S1)</translation>
    </message>
    <message>
        <source>Response Packet Junk Size (S2)</source>
        <translation>响应数据包垃圾大小 (S2)</translation>
    </message>
    <message>
        <source>Cookie Reply Packet Junk Size (S3)</source>
        <translation>Cookie 回复数据包垃圾大小 (S3)</translation>
    </message>
    <message>
        <source>Transport Packet Junk Size (S4)</source>
        <translation>传送数据包垃圾大小 (S4)</translation>
    </message>
    <message>
        <source>Init Packet Magic Header (H1)</source>
        <translation>初始数据包魔法标头 (H1)</translation>
    </message>
    <message>
        <source>Response Packet Magic Header (H2)</source>
        <translation>响应数据包魔术标头 (H2)</translation>
    </message>
    <message>
        <source>Cookie Reply Packet Magic Header (H3)</source>
        <translation>Cookie 回复数据包魔术标头 (H3)</translation>
    </message>
    <message>
        <source>Transport Packet Magic Header (H4)</source>
        <translation>传输数据包魔法标头 (H4)</translation>
    </message>
    <message>
        <source>Signature Packet (I1)</source>
        <translation>签名数据包 (I1)</translation>
    </message>
    <message>
        <source>Signature Packet (I2)</source>
        <translation>签名数据包 (I2)</translation>
    </message>
    <message>
        <source>Signature Packet (I3)</source>
        <translation>签名数据包 (I3)</translation>
    </message>
    <message>
        <source>Signature Packet (I4)</source>
        <translation>签名数据包 (I4)</translation>
    </message>
    <message>
        <source>Signature Packet (I5)</source>
        <translation>签名数据包 (I5)</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. Base64 key. Requires S1-S4 to be at least 12.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0。 Base64 钥匙。要求 S1-S4 至少 12。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Header Protection Key</source>
        <translation>标头保护钥匙</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. Bytes of random trailing padding, as a value or range (e.g. 0-64).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0。 随机尾部填充的字节数，可以为一个值或范围 (如 0-64)。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Content Padding Addition</source>
        <translation>内容填充附加量</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. Seconds before a rekey is attempted, as a value or range.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. 尝试 rekey (重新密钥协商)前的秒数，可以是一个具体值或范围。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Rekey After Time</source>
        <translation>指定时间后 Rekey</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. Seconds before a handshake is retried, as a value or range.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0。 重试握手前的秒数，可以是一个具体值或范围。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Rekey Timeout</source>
        <translation>Rekey 超时</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. Seconds before keys are rejected, as a value or range.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0。 拒绝钥匙前的秒数，可以是一个具体值或范围。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Reject After Time</source>
        <translation>指定时间后拒绝</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. Seconds of idle time before a keepalive is sent, as a value or range.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0。 发送 keepalive (保活)前的空闲时间（秒数），可以是一个具体值或范围。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Keepalive Timeout</source>
        <translation>保活超时</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0. Handshake retries before giving up, as a value or range.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.0。 放弃前的握手重试次数，可以是一个具体值或范围。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Max Handshake Attempts</source>
        <translation>最多握手尝试次数</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.1. Appends a random trailer to every packet, so message types are no longer identifiable by size.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.1。附加一个随机的尾部到每个数据包，这样消息类型就不再能够通过大小识别。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Random Trailers</source>
        <translation>随机尾部</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.1. Never send cookie replies, so an under-load peer stays silent instead of answering with a fixed-size message.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;AmneziaWG 3.1。永不发送 cookie 回复，所以负载过低的对端节点会保持静默而不是用固定大小的消息回答。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <source>Disable Cookies</source>
        <translation>禁用 Cookies</translation>
    </message>
</context>
<context>
    <name>EditXrayVless</name>
    <message>
        <source>UUID</source>
        <translation>UUID</translation>
    </message>
    <message>
        <source>Encryption</source>
        <translation>加密</translation>
    </message>
    <message>
        <source>none</source>
        <translation>无</translation>
    </message>
    <message>
        <source>Flow</source>
        <translation>流</translation>
    </message>
</context>
<context>
    <name>GroupItem</name>
    <message>
        <source>Update Subscription</source>
        <translation>更新订阅</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Basic</source>
        <translation>基本</translation>
    </message>
    <message>
        <source>Subscription</source>
        <translation>订阅</translation>
    </message>
    <message>
        <source>Archive</source>
        <translation>档案</translation>
    </message>
    <message>
        <source>Last update: %1</source>
        <translation>最后更新 %1</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>确认</translation>
    </message>
    <message>
        <source>Remove %1?</source>
        <translation>删除 %1 吗?</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <source>Program</source>
        <translation>程序</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <source>Groups</source>
        <translation>分组</translation>
    </message>
    <message>
        <source>Routing</source>
        <translation>路由</translation>
    </message>
    <message>
        <source>Tools</source>
        <translation>工具</translation>
    </message>
    <message>
        <source>Tun Mode</source>
        <translation>Tun 模式</translation>
    </message>
    <message>
        <source>System DNS</source>
        <translation>系统 DNS</translation>
    </message>
    <message>
        <source>System Proxy</source>
        <translation>系统代理</translation>
    </message>
    <message>
        <source>Logs</source>
        <translation>日志</translation>
    </message>
    <message>
        <source>Connections</source>
        <translation>连接</translation>
    </message>
    <message>
        <source>Traffic Graph</source>
        <translation>流量图</translation>
    </message>
    <message>
        <source>Preferences</source>
        <translation>首选项</translation>
    </message>
    <message>
        <source>Server</source>
        <translation>服务器</translation>
    </message>
    <message>
        <source>Share</source>
        <translation>分享</translation>
    </message>
    <message>
        <source>Hidden menu</source>
        <translation>隐藏菜单</translation>
    </message>
    <message>
        <source>Operation Mode</source>
        <translation>操作模式</translation>
    </message>
    <message>
        <source>Routing Menu</source>
        <translation>路由菜单</translation>
    </message>
    <message>
        <source>Exit</source>
        <translation>退出</translation>
    </message>
    <message>
        <source>Show Window</source>
        <translation>显示窗口</translation>
    </message>
    <message>
        <source>Basic Settings</source>
        <translation>基本设置</translation>
    </message>
    <message>
        <source>New profile</source>
        <translation>新建配置档</translation>
    </message>
    <message>
        <source>Manage Groups</source>
        <translation>管理分组</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>启动</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message>
        <source>Routing Settings</source>
        <translation>路由设置</translation>
    </message>
    <message>
        <source>Add profile from clipboard</source>
        <translation>添加剪贴板中的配置档</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Debug Info</source>
        <translation>调试信息</translation>
    </message>
    <message>
        <source>QR Code and link</source>
        <translation>二维码和链接</translation>
    </message>
    <message>
        <source>Copy Link</source>
        <translation>复制链接</translation>
    </message>
    <message>
        <source>Clear Group test result</source>
        <translation>清除本组测试结果</translation>
    </message>
    <message>
        <source>Export Sing-box config</source>
        <translation>导出 Sing-box 配置</translation>
    </message>
    <message>
        <source>Reset Traffic</source>
        <translation>重置流量</translation>
    </message>
    <message>
        <source>Scan QR Code</source>
        <translation>扫描二维码</translation>
    </message>
    <message>
        <source>Disable</source>
        <translation>禁用</translation>
    </message>
    <message>
        <source>Remove Duplicates</source>
        <translation>移除重复项</translation>
    </message>
    <message>
        <source>fake</source>
        <translation>Fake</translation>
    </message>
    <message>
        <source>Move</source>
        <translation>移动</translation>
    </message>
    <message>
        <source>Start with system</source>
        <translation>随系统启动</translation>
    </message>
    <message>
        <source>Remember last profile</source>
        <translation>记住上次的配置档</translation>
    </message>
    <message>
        <source>Allow other devices to connect</source>
        <translation>允许其他设备连接</translation>
    </message>
    <message>
        <source>Remove Unavailable</source>
        <translation>移除不可用项</translation>
    </message>
    <message>
        <source>Full Test</source>
        <translation>完整测试</translation>
    </message>
    <message>
        <source>Hotkey Settings</source>
        <translation>热键设置</translation>
    </message>
    <message>
        <source>Select All</source>
        <translation>全选</translation>
    </message>
    <message>
        <source>Copy links of selected (Deep Links)</source>
        <translation>复制选定项的链接 (深度链接)</translation>
    </message>
    <message>
        <source>Copy links of selected</source>
        <translation>复制选定项的链接</translation>
    </message>
    <message>
        <source>Clone</source>
        <translation>克隆</translation>
    </message>
    <message>
        <source>Update subscription</source>
        <translation>更新订阅</translation>
    </message>
    <message>
        <source>Resolve Domain for group</source>
        <translation>为本组解析域名</translation>
    </message>
    <message>
        <source>Tun Settings</source>
        <translation>Tun 设置</translation>
    </message>
    <message>
        <source>Preset Settings</source>
        <translation>预设设置</translation>
    </message>
    <message>
        <source>OTP Manager</source>
        <translation>OTP 管理器</translation>
    </message>
    <message>
        <source>Restart Program</source>
        <translation>重启程序</translation>
    </message>
    <message>
        <source>Open Config Folder</source>
        <translation>打开配置文件夹</translation>
    </message>
    <message>
        <source>Open Web dashboard</source>
        <translation>打开网络仪表盘</translation>
    </message>
    <message>
        <source>Restart Core</source>
        <translation>重启核心</translation>
    </message>
    <message>
        <source>Stop Testing</source>
        <translation>停止测试</translation>
    </message>
    <message>
        <source>Url Test Selected</source>
        <translation>URL 测试选定项</translation>
    </message>
    <message>
        <source>Url Test Group</source>
        <translation>URL 测试本组</translation>
    </message>
    <message>
        <source>Resolve Selected Domain</source>
        <translation>解析选定域名</translation>
    </message>
    <message>
        <source>Remove Invalid</source>
        <translation>移除无效项</translation>
    </message>
    <message>
        <source>Remove Insecure Configs</source>
        <translation>移除不安全的配置</translation>
    </message>
    <message>
        <source>Open Manager</source>
        <translation>打开管理器</translation>
    </message>
    <message>
        <source>Speedtest Current</source>
        <translation>速度测试当前项</translation>
    </message>
    <message>
        <source>Speedtest Selected</source>
        <translation>速度测试选定项</translation>
    </message>
    <message>
        <source>Speedtest Group</source>
        <translation>速度测试本组</translation>
    </message>
    <message>
        <source>Hide window</source>
        <translation>隐藏窗口</translation>
    </message>
    <message>
        <source>Add profile from File(s)</source>
        <translation>添加文件中的配置档</translation>
    </message>
    <message>
        <source>Resolve out IP for group</source>
        <translation>为本组解析 IP</translation>
    </message>
    <message>
        <source>Add new Group</source>
        <translation>添加新分组</translation>
    </message>
    <message>
        <source>Edit current Group</source>
        <translation>编辑当前分组</translation>
    </message>
    <message>
        <source>Delete current Group</source>
        <translation>删除当前分组</translation>
    </message>
    <message>
        <source>Update all subscriptions</source>
        <translation>更新所有订阅</translation>
    </message>
    <message>
        <source>Resolve Selected Out IP</source>
        <translation>解析选定的出口 IP</translation>
    </message>
    <message>
        <source>Refresh Column Widths</source>
        <translation>刷新列宽</translation>
    </message>
    <message>
        <source>Export Xray config</source>
        <translation>导出 Xray 配置</translation>
    </message>
    <message>
        <source>Copy Test Result</source>
        <translation>复制测试结果</translation>
    </message>
    <message>
        <source>Clear Test Result</source>
        <translation>清理测试结果</translation>
    </message>
    <message>
        <source>Update Rule-Sets</source>
        <translation>更新规则集</translation>
    </message>
    <message>
        <source>Runtime Stats</source>
        <translation>运行时统计</translation>
    </message>
    <message>
        <source>Auto Selector Stats</source>
        <translation>自动选择器统计</translation>
    </message>
    <message>
        <source>Traffic Stats</source>
        <translation>流量统计</translation>
    </message>
    <message>
        <source>Check For Update</source>
        <translation>检查更新</translation>
    </message>
    <message>
        <source>[Auto selector] Reusing existing test results; ranked %1 profiles.</source>
        <translation>[自动选择器] 正在重用现有测试结果； 已排名 %1 个配置档。</translation>
    </message>
    <message>
        <source>[Auto selector] Measuring %1 not-yet-tested profiles...</source>
        <translation>[自动选择器] 正在测量 %1 个尚未测试的配置档...</translation>
    </message>
    <message>
        <source>[Auto selector] Ranked %1 profiles.</source>
        <translation>[自动选择器] 已排名 %1 个配置档。</translation>
    </message>
    <message>
        <source>[Auto selector] The subscription replaced profiles it was running on — rebuilding.</source>
        <translation>[自动选择器] 订阅替换了它正在运行的配置档 - 正在重建。</translation>
    </message>
    <message>
        <source>[Auto selector] Every running profile stopped working — rebuilding from the next best candidates.</source>
        <translation>[自动选择器] 所有正在运行的配置档都停止运作 - 正在从下一个最好的候选配置项重新构建。</translation>
    </message>
    <message>
        <source>Enable Filter</source>
        <translation>启用筛选</translation>
    </message>
    <message>
        <source>Close every connection listed below</source>
        <translation>关闭下面列出的每个连接</translation>
    </message>
    <message>
        <source>Total</source>
        <translation>合计(Σ)</translation>
    </message>
    <message>
        <source>Downloaded</source>
        <translation>下载(↓)</translation>
    </message>
    <message>
        <source>Uploaded</source>
        <translation>上传(↑)</translation>
    </message>
    <message>
        <source>Download Speed</source>
        <translation>下载速度(↓)</translation>
    </message>
    <message>
        <source>Upload Speed</source>
        <translation>上传速度(↑)</translation>
    </message>
    <message>
        <source>Sort By:</source>
        <translation>排序依据:</translation>
    </message>
    <message>
        <source>Failed to close connections: %1</source>
        <translation>关闭连接失败: %1</translation>
    </message>
    <message>
        <source>IPC error</source>
        <translation>IPC 错误</translation>
    </message>
    <message>
        <source>Collapse All</source>
        <translation>折叠全部</translation>
    </message>
    <message>
        <source>Expand All</source>
        <translation>展开全部</translation>
    </message>
    <message>
        <source>No active routing profile found.</source>
        <translation>找不到活动的路由配置档。</translation>
    </message>
    <message>
        <source>The current routing profile is locked against modifications.</source>
        <translation>当前路由配置档被锁定不得修改。</translation>
    </message>
    <message>
        <source>The current routing profile is raw JSON.</source>
        <translation>当前路由配置档是原始的 JSON。</translation>
    </message>
    <message>
        <source>The current routing profile auto-updates from a URL.</source>
        <translation>当前路由配置档从一个 URL 自动更新。</translation>
    </message>
    <message>
        <source>Failed to add routing rule: %1</source>
        <translation>添加路由规则失败: %1</translation>
    </message>
    <message>
        <source>Failed to save routing rule: %1</source>
        <translation>保存路由规则失败: %1</translation>
    </message>
    <message>
        <source>Appended %1 to the %2 rules of &quot;%3&quot;</source>
        <translation>追加 %1 到 &quot;%3&quot; 的 %2 条规则</translation>
    </message>
    <message>
        <source>Direct</source>
        <translation>直连</translation>
    </message>
    <message>
        <source>Proxy</source>
        <translation>代理</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>阻止</translation>
    </message>
    <message>
        <source>Appended to the %1 rules:
%2</source>
        <translation>追加到 %1 条规则:
%2</translation>
    </message>
    <message>
        <source>Copied: %1</source>
        <translation>已复制: %1</translation>
    </message>
    <message>
        <source>Append &quot;%1&quot; to</source>
        <translation>追加 &quot;%1&quot; 到</translation>
    </message>
    <message>
        <source>Append process &quot;%1&quot; to</source>
        <translation>追加进程 &quot;%1&quot; 到</translation>
    </message>
    <message>
        <source>Copy Destination (%1)</source>
        <translation>复制目标 (%1)</translation>
    </message>
    <message>
        <source>Copy Process Name (%1)</source>
        <translation>复制进程名称 (%1)</translation>
    </message>
    <message>
        <source>Close all connections (%1)</source>
        <translation>关闭所有连接 (%1)</translation>
    </message>
    <message>
        <source>Close connection</source>
        <translation>关闭连接</translation>
    </message>
    <message>
        <source>Copy Process Name</source>
        <translation>复制进程名称</translation>
    </message>
    <message>
        <source>Close all connections for &quot;%1&quot; (%2)</source>
        <translation>关闭 &quot;%1&quot; 的所有连接 (%2)</translation>
    </message>
    <message>
        <source>%1: cannot be opened</source>
        <translation>%1: 无法打开</translation>
    </message>
    <message>
        <source>%1: larger than 50 MB, skipped</source>
        <translation>%1: 大于 50 MB，已跳过</translation>
    </message>
    <message>
        <source>%1: no QR code found</source>
        <translation>%1: 找不到二维码</translation>
    </message>
    <message>
        <source>%1: not a readable config file</source>
        <translation>%1: 不是一个可读取的配置文件</translation>
    </message>
    <message>
        <source>Nothing could be imported:</source>
        <translation>没有可被导入的内容:</translation>
    </message>
    <message>
        <source>Ignored deeplink with unknown command: %1</source>
        <translation>忽略了带未知命令的深度链接: %1</translation>
    </message>
    <message>
        <source>Import routing profile</source>
        <translation>导入路由配置档</translation>
    </message>
    <message>
        <source>The link could not be parsed:
</source>
        <translation>该链接无法解析:
</translation>
    </message>
    <message>
        <source>Imported profile</source>
        <translation>已导入配置档</translation>
    </message>
    <message>
        <source>Add this routing profile?
Name: %1</source>
        <translation>添加这个路由配置档吗?
名称: %1</translation>
    </message>
    <message>
        <source>Note:</source>
        <translation>备注:</translation>
    </message>
    <message>
        <source>Add remote routing profiles</source>
        <translation>添加远程路由配置档</translation>
    </message>
    <message>
        <source>The link did not contain any valid remote routing profiles.</source>
        <translation>该链接不包含任何有效的远程路由配置档。</translation>
    </message>
    <message>
        <source>Add these remote routing profiles?</source>
        <translation>添加这些远程路由配置档吗?</translation>
    </message>
    <message>
        <source>Auto update</source>
        <translation>自动更新</translation>
    </message>
    <message>
        <source>Add subscription</source>
        <translation>添加订阅</translation>
    </message>
    <message>
        <source>The link did not contain a subscription URL.</source>
        <translation>该链接不包含订阅 URL。</translation>
    </message>
    <message>
        <source>Add this subscription?
Name: %1
URL: %2</source>
        <translation>添加这个订阅吗?
名称: %1
URL: %2</translation>
    </message>
    <message>
        <source>Tun Settings changed</source>
        <translation>Tun 设置已改变</translation>
    </message>
    <message>
        <source>Restart Tun to take effect.</source>
        <translation>重启 Tun 以生效。</translation>
    </message>
    <message>
        <source>Confirmation</source>
        <translation>确认</translation>
    </message>
    <message>
        <source>Settings changed</source>
        <translation>设置已改变</translation>
    </message>
    <message>
        <source>Restart the program to take effect.</source>
        <translation>重启程序以生效。</translation>
    </message>
    <message>
        <source>Profile</source>
        <translation>配置档</translation>
    </message>
    <message>
        <source>Imported %1 profile(s)</source>
        <translation>导入了 %1 个配置档</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <source>Edit selected Group</source>
        <translation>编辑选定分组</translation>
    </message>
    <message>
        <source>Delete selected Group</source>
        <translation>删除选定分组</translation>
    </message>
    <message>
        <source>Remove %1?</source>
        <translation>删除 %1 吗?</translation>
    </message>
    <message>
        <source>Url Test selected Group</source>
        <translation>URL 测试选定分组</translation>
    </message>
    <message>
        <source>Speed Test selected Group</source>
        <translation>速度测试选定分组</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>清除</translation>
    </message>
    <message>
        <source>You need to enable hijack DNS server first</source>
        <translation>您需要先启用劫持 DNS 服务器</translation>
    </message>
    <message>
        <source>Failed to set system dns: </source>
        <translation>设置系统 DNS 失败： </translation>
    </message>
    <message>
        <source>a required category</source>
        <translation>一个必需的类别</translation>
    </message>
    <message>
        <source>Geo asset missing category</source>
        <translation>Geo 资源缺失类别</translation>
    </message>
    <message>
        <source>The Xray config &quot;%1&quot; needs &quot;%2&quot;, but the installed %3 does not contain it.
Re-downloading from the same source will not fix this — the data file does not include that category. Set the GeoIP/GeoSite asset URL in Settings to a source that provides &quot;%2&quot;, then delete %3 from the app folder and download it again.</source>
        <translation>Xray 配置 &quot;%1&quot; 需要 &quot;%2&quot;, 但安装的 %3 不包含它。
从同一来源重新下载无法修复这个问题 — 数据文件不包含该列表。在「设置」中设置 GeoIP/GeoSite 资源 URL 为一个提供 &quot;%2&quot; 的来源，然后从应用文件夹中删除 %3 并重新下载它。</translation>
    </message>
    <message>
        <source>Geo asset files required</source>
        <translation>需要 Geo 资源文件</translation>
    </message>
    <message>
        <source>The Xray config &quot;%1&quot; uses geoip/geosite routing rules, but the required data files (geoip.dat / geosite.dat) are not installed.
Download them now?</source>
        <translation>Xray 配置 &quot;%1&quot; 使用了 geoip/geosite 路由规则，但未安装所需的数据文件 (geoip.dat / geosite.dat)。
立即安装它们吗?</translation>
    </message>
    <message>
        <source>Geo asset download failed</source>
        <translation>Geo 资源下载失败</translation>
    </message>
    <message>
        <source>Downloaded Xray geo asset files.</source>
        <translation>已下载的 Xray geo 资源文件。</translation>
    </message>
    <message>
        <source>Geo assets installed</source>
        <translation>Geo 资源已安装</translation>
    </message>
    <message>
        <source>Geo data files were downloaded successfully.
Please try again.</source>
        <translation>成功下载过 Geo 数据文件。
请再试一次。</translation>
    </message>
    <message>
        <source>BuildConfig return error</source>
        <translation>BuildConfig 返回错误</translation>
    </message>
    <message>
        <source>Strict routing unavailable</source>
        <translation>严格的路由不可用</translation>
    </message>
    <message>
        <source>Windows could not enable strict routing. Open Tun Settings, disable Strict Route, and start the profile again.
Disabling Strict Route may cause DNS leaks.
Error: %1</source>
        <translation>Windows 无法启用严格路由。打开 Tun 设置，禁用“严格路由”，并再次启动该配置档。
禁用严格路由可能导致 DNS 泄露。
错误: %1</translation>
    </message>
    <message>
        <source>Tun device misbehaving</source>
        <translation>Tun 设备运行异常</translation>
    </message>
    <message>
        <source>If you have trouble starting VPN, you can force reset Core process here and then try starting the profile again. The error is %1</source>
        <translation>如果启动 VPN 时有问题，您可以在这里强制重置 Core 进程，然后再次尝试启动配置档。错误是 %1</translation>
    </message>
    <message>
        <source>Reset</source>
        <translation>重置</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>[Auto selector] Running the best %1 of %2 ranked profiles.</source>
        <translation>[自动选择器] 正在运行排名最优的 %1 / %2 个配置档。</translation>
    </message>
    <message>
        <source>Another profile is starting...</source>
        <translation>另一个配置档正在启动...</translation>
    </message>
    <message>
        <source>Another profile is stopping...</source>
        <translation>另一个配置档正在停止...</translation>
    </message>
    <message>
        <source>Try to start the config, but the core has not listened to the RPC port, so restart it...</source>
        <translation>尝试启动该配置，但核心尚未监听到 RPC 端口，因此请重启它...</translation>
    </message>
    <message>
        <source>If there is no response for a long time, it is recommended to restart the software.</source>
        <translation>如果长时间没有反应，建议重启软件。</translation>
    </message>
    <message>
        <source>Starting profile %1</source>
        <translation>正在启动配置档 %1</translation>
    </message>
    <message>
        <source>Failed to start profile %1</source>
        <translation>启动配置档 %1 失败</translation>
    </message>
    <message>
        <source>Stop return error</source>
        <translation>停止返回错误</translation>
    </message>
    <message>
        <source>Stopping profile %1</source>
        <translation>正在停止配置档 %1</translation>
    </message>
    <message>
        <source>Failed to stop, please restart the program.</source>
        <translation>停止失败，请重启程序。</translation>
    </message>
    <message>
        <source>[VPN] %1: %2</source>
        <translation></translation>
    </message>
    <message>
        <source>VPN endpoint problem</source>
        <translation>VPN 端点问题</translation>
    </message>
    <message>
        <source>VPN endpoint</source>
        <translation>VPN 端点</translation>
    </message>
    <message>
        <source>[VPN] %1: the core did not answer the sign-in prompt.</source>
        <translation>[VPN] %1: 核心未应答登录提示。</translation>
    </message>
    <message>
        <source>[VPN] %1: could not answer the sign-in prompt: %2</source>
        <translation>[VPN] %1: 无法应答登录提示: %2</translation>
    </message>
    <message>
        <source>[VPN] %1: signed in again with a new one-time code.</source>
        <translation>[VPN] %1: 用新的一次性代码再次登录。</translation>
    </message>
    <message>
        <source>[VPN] %1 rejected the saved credentials; restarting the profile with a new one-time code.</source>
        <translation>[VPN] %1 拒绝了保存的凭据; 正在用新的一次性代码重启该配置档。</translation>
    </message>
    <message>
        <source>The server refused the credentials saved with this profile. Enter the ones to use for this session; the profile itself is left unchanged.</source>
        <translation>服务器拒绝了随这个配置档保存的凭据。请输入用于本次会话的凭据；该配置档本身将保持不变。</translation>
    </message>
    <message>
        <source>[VPN] %1 rejected the saved credentials.</source>
        <translation>[VPN] %1 拒绝了保存的凭据。</translation>
    </message>
    <message>
        <source>Clone %1 item(s)</source>
        <translation>克隆 %1 项</translation>
    </message>
    <message>
        <source>Remove %1 item(s) ?</source>
        <translation>删除 %1 项吗？</translation>
    </message>
    <message>
        <source>Copied %1 item(s)</source>
        <translation>复制了 %1 项</translation>
    </message>
    <message>
        <source>Config copied</source>
        <translation>配置已复制</translation>
    </message>
    <message>
        <source>Copy core config</source>
        <translation>复制核心配置</translation>
    </message>
    <message>
        <source>Copy test config</source>
        <translation>复制测试配置</translation>
    </message>
    <message>
        <source>QR Code not found</source>
        <translation>未找到二维码</translation>
    </message>
    <message>
        <source>Unable to capture screen</source>
        <translation>无法捕获屏幕</translation>
    </message>
    <message>
        <source>Remove %1 Invalid item(s) ?</source>
        <translation>移除 %1 个无效项吗？</translation>
    </message>
    <message>
        <source>No insecure configs found.</source>
        <translation>找不到不安全配置。</translation>
    </message>
    <message>
        <source>Remove %1 insecure config(s)?</source>
        <translation>移除 %1 个不安全配置吗?</translation>
    </message>
    <message>
        <source>Replace domain server addresses with their resolved IPs?</source>
        <translation>替换域名服务器地址为其解析后的 IP 地址吗？</translation>
    </message>
    <message>
        <source>Remove %1 Unavailable item(s) ?</source>
        <translation>移除 %1 个不可用项吗？</translation>
    </message>
    <message numerus="yes">
        <source>%n remote rule-set(s) refreshed</source>
        <translation>
            <numerusform>刷新了 %n 个远程规则集</numerusform>
        </translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>Security</source>
        <translation>安全</translation>
    </message>
    <message>
        <source>Include:</source>
        <translation>包含:</translation>
    </message>
    <message>
        <source>Out IP</source>
        <translation>出口 IP</translation>
    </message>
    <message>
        <source>Speed</source>
        <translation>速度</translation>
    </message>
    <message>
        <source>Latency</source>
        <translation>延迟</translation>
    </message>
    <message>
        <source>IP Out</source>
        <translation>IP 出口</translation>
    </message>
    <message>
        <source>Select Profile</source>
        <translation>选择配置档</translation>
    </message>
    <message>
        <source>Select Routing</source>
        <translation>选择路由</translation>
    </message>
    <message>
        <source>OTP Codes</source>
        <translation>OTP 代码</translation>
    </message>
    <message>
        <source>Update all subscriptions?</source>
        <translation>更新所有订阅吗？</translation>
    </message>
    <message>
        <source>Enable AdBlock</source>
        <translation>启用 AdBlock (广告屏蔽)</translation>
    </message>
    <message>
        <source>Enable Warp</source>
        <translation>启用 Warp</translation>
    </message>
    <message>
        <source> Test result(s) copied to clipboard!</source>
        <translation> 测试结果已被复制到剪贴板!</translation>
    </message>
    <message>
        <source>All files (*)</source>
        <translation>所有文件 (*)</translation>
    </message>
    <message>
        <source>Config files (*.json *.conf *.txt *.yaml *.yml *.ini *.ovpn *.xml)</source>
        <translation>配置文件 (*.json *.conf *.txt *.yaml *.yml *.ini *.ovpn *.xml)</translation>
    </message>
    <message>
        <source>QR code images (*.png *.jpg *.jpeg *.bmp *.gif *.webp)</source>
        <translation>QR 码图像 (*.png *.jpg *.jpeg *.bmp *.gif *.webp)</translation>
    </message>
    <message>
        <source>Select profile files</source>
        <translation>选择配置档文件</translation>
    </message>
    <message>
        <source>subscriptions</source>
        <translation>订阅</translation>
    </message>
    <message>
        <source>routing profiles</source>
        <translation>路由配置档</translation>
    </message>
    <message>
        <source>User opted for no privilege req, some features may not work</source>
        <translation>用户选择无权限请求，某些功能可能不起作用</translation>
    </message>
    <message>
        <source>Please give the core root privileges</source>
        <translation>请赋予核心 root 权限</translation>
    </message>
    <message>
        <source>Please run Throne as admin</source>
        <translation>请以管理员身份运行 Throne</translation>
    </message>
    <message>
        <source>Requesting permission</source>
        <translation>正在请求权限</translation>
    </message>
    <message>
        <source>Please Enter your password in the opened terminal, then try again</source>
        <translation>请在打开的终端中输入您的密码，然后重试</translation>
    </message>
    <message>
        <source>The sing-box API is disabled. Set a listen port in Preferences &gt; Basic Settings &gt; Core.</source>
        <translation>sing-box API 被禁用。在“首选项 &gt; 基本设置 &gt; 核心” 中设置一个监听端口。</translation>
    </message>
    <message>
        <source>Start a profile first; the dashboard is served by the running core.</source>
        <translation>首先启动一个配置档； 该仪表盘由正在运行的核心提供服务。</translation>
    </message>
    <message>
        <source>Web dashboard</source>
        <translation>网络仪表盘</translation>
    </message>
    <message>
        <source>The dashboard is not installed yet. Download it now?</source>
        <translation>仪表盘未安装。立即下载吗?</translation>
    </message>
    <message>
        <source>Cannot start</source>
        <translation>无法启动</translation>
    </message>
    <message>
        <source>A dashboard download is already running</source>
        <translation>仪表盘下载已在运行中</translation>
    </message>
    <message>
        <source>The core did not answer.</source>
        <translation>核心不应答。</translation>
    </message>
    <message>
        <source>Failed to install the dashboard</source>
        <translation>安装仪表盘失败</translation>
    </message>
    <message>
        <source>Last download request has not finished yet</source>
        <translation>上次的下载请求尚未完成</translation>
    </message>
    <message>
        <source>Failed to download update assets</source>
        <translation>下载更新资源失败</translation>
    </message>
    <message>
        <source>Not Running</source>
        <translation>未在运行</translation>
    </message>
    <message>
        <source>Listening on all interfaces (%1)</source>
        <translation>正在监听所有接口 (%1)</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>选择</translation>
    </message>
    <message>
        <source>Select mode, double-click or press Enter to select a profile, press ESC to exit.</source>
        <translation>选择模式，双击或按 ENTER 键选择一个配置档，按 ESC 键退出。</translation>
    </message>
    <message>
        <source>Connect OK</source>
        <translation>连接通过</translation>
    </message>
    <message>
        <source>Connecting</source>
        <translation>正在连接</translation>
    </message>
    <message>
        <source>Waiting for authentication</source>
        <translation>正在等待认证</translation>
    </message>
    <message>
        <source>Tunnel error</source>
        <translation>隧道错误</translation>
    </message>
    <message>
        <source>Testing</source>
        <translation>测试</translation>
    </message>
    <message>
        <source>Test Result</source>
        <translation>测试结果</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>不可用</translation>
    </message>
    <message>
        <source>Failed to stop tests</source>
        <translation>停止测试失败</translation>
    </message>
    <message>
        <source>a tested profile</source>
        <translation>已测试的配置档</translation>
    </message>
    <message>
        <source>[%1] test error: %2</source>
        <translation>[%1] 测试错误: %2</translation>
    </message>
    <message>
        <source>[%1] IP test error: %2</source>
        <translation>[%1] IP 测试错误: %2</translation>
    </message>
    <message>
        <source>Profile test aborted</source>
        <translation>配置档测试中止</translation>
    </message>
    <message>
        <source>Something is very wrong, the subject ent cannot be found!</source>
        <translation>发生了非常严重的问题，找不到主题 ent！</translation>
    </message>
    <message>
        <source>Profile manager data is corrupted, try again.</source>
        <translation>配置档管理器数据损坏，请重试。</translation>
    </message>
    <message>
        <source>The last url test did not exit completely, please wait. If it persists, please restart the program.</source>
        <translation>上次的 URL 测试未完全退出，请稍候。如果持续存在，则请重启程序。</translation>
    </message>
    <message>
        <source>The last test did not exit completely, please wait. If it persists, please restart the program.</source>
        <translation>上次的测试未完全退出，请稍候。如果情况持续，请重启该程序。</translation>
    </message>
    <message>
        <source>Failed to build test config for batch: </source>
        <translation>为批处理构建测试配置失败: </translation>
    </message>
    <message>
        <source>URL test finished!</source>
        <translation>URL 测试完成！</translation>
    </message>
    <message>
        <source>IP test finished!</source>
        <translation>IP 测试完成!</translation>
    </message>
    <message>
        <source>The last test did not finish completely, please wait. If it persists, please restart the program.</source>
        <translation>上次的测试未完全完成，请稍候。如果情况持续，请重启该程序。</translation>
    </message>
    <message>
        <source>Failed to build batch test config: </source>
        <translation>构建批处理测试配置失败: </translation>
    </message>
    <message>
        <source>Speedtest finished!</source>
        <translation>测速完成！</translation>
    </message>
    <message>
        <source>Profile speed test aborted</source>
        <translation>配置档速度测试已中止</translation>
    </message>
    <message>
        <source>[%1] speed test error: %2</source>
        <translation>[%1] 速度测试错误：%2</translation>
    </message>
</context>
<context>
    <name>OtpItem</name>
    <message>
        <source>Edit</source>
        <translation>编辑</translation>
    </message>
    <message>
        <source>Export</source>
        <translation>导出</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>invalid</source>
        <translation>无效</translation>
    </message>
    <message>
        <source>%1s</source>
        <translation>%1秒</translation>
    </message>
</context>
<context>
    <name>ProfilesTableFilterHeader</name>
    <message>
        <source>Filter...</source>
        <translation>筛选...</translation>
    </message>
    <message>
        <source>Filter by country...</source>
        <translation>按国别筛选...</translation>
    </message>
    <message>
        <source>Disable Filter</source>
        <translation>禁用筛选</translation>
    </message>
    <message>
        <source>Enable Filter</source>
        <translation>启用筛选</translation>
    </message>
</context>
<context>
    <name>ProfilesTableModel</name>
    <message>
        <source>This config&apos;s traffic is not properly protected.</source>
        <translation>这个配置的流量未适当保护。</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>类型</translation>
    </message>
    <message>
        <source>Address</source>
        <translation>地址</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Test Result</source>
        <translation>测试结果</translation>
    </message>
    <message>
        <source>Traffic</source>
        <translation>流量</translation>
    </message>
</context>
<context>
    <name>ProxyItem</name>
    <message>
        <source>Confirmation</source>
        <translation>确认</translation>
    </message>
    <message>
        <source>Remove %1?</source>
        <translation>删除 %1 吗?</translation>
    </message>
</context>
<context>
    <name>QGuiApplication</name>
    <message>
        <source>QT_LAYOUT_DIRECTION</source>
        <translation>LTR</translation>
    </message>
</context>
<context>
    <name>QHotkey</name>
    <message>
        <source>Failed to register %1. Error: %2</source>
        <translation>注册 %1 失败。 错误: %2</translation>
    </message>
    <message>
        <source>Failed to unregister %1. Error: %2</source>
        <translation>注销注册 %1 失败。错误: %2</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Auto Selector</source>
        <translation>自动选择器</translation>
    </message>
    <message>
        <source>Chain Proxy</source>
        <translation>链式代理</translation>
    </message>
    <message>
        <source>Direct</source>
        <translation>直连</translation>
    </message>
    <message>
        <source>Endpoint</source>
        <translation>端点</translation>
    </message>
    <message>
        <source>missing profile</source>
        <translation>缺少配置档</translation>
    </message>
    <message>
        <source>chain or auto selector</source>
        <translation>链式或自动选择器</translation>
    </message>
    <message>
        <source>needs too many core switches</source>
        <translation>需要过多的核心切换</translation>
    </message>
    <message>
        <source>extra-core profile</source>
        <translation>附加核心配置档</translation>
    </message>
    <message>
        <source>full config profile</source>
        <translation>完整配置档</translation>
    </message>
    <message>
        <source>config does not parse</source>
        <translation>配置解析失败</translation>
    </message>
    <message>
        <source>Tailscale profile</source>
        <translation>Tailscale 配置档</translation>
    </message>
    <message>
        <source>OpenVPN or OpenConnect profile</source>
        <translation>OpenVPN 或 OpenConnect 配置档</translation>
    </message>
    <message>
        <source>filtered out by name</source>
        <translation>按名称过滤掉</translation>
    </message>
    <message>
        <source>filtered out by country</source>
        <translation>按国别过滤掉</translation>
    </message>
    <message>
        <source>last test failed</source>
        <translation>上次测试失败</translation>
    </message>
    <message>
        <source>Xray full config cannot be combined with the group&apos;s proxies</source>
        <translation>Xray 完整配置无法与该组的代理一起使用</translation>
    </message>
    <message>
        <source>Reality</source>
        <translation>Reality</translation>
    </message>
    <message>
        <source>Insecure TLS</source>
        <translation>不安全 TLS</translation>
    </message>
    <message>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <source>Raw</source>
        <translation>原始</translation>
    </message>
    <message>
        <source>The routing profile lists an endpoint profile (id %1) that no longer exists</source>
        <translation>路由配置中引用了一个不再存在的端点配置 (id %1)</translation>
    </message>
    <message>
        <source>%1 is listed as a routing profile endpoint but is empty or corrupted</source>
        <translation>%1 被列为路由配置档端点，但内容为空或已损坏</translation>
    </message>
    <message>
        <source>%1 is listed as a routing profile endpoint but a hop of it no longer exists</source>
        <translation>%1 被列为路由配置档端点，但它的其中一跳转节点不再存在</translation>
    </message>
    <message>
        <source>%1 is listed as a routing profile endpoint, so its last hop must be an OpenVPN or OpenConnect profile</source>
        <translation>%1 被列为路由配置档端点，因此它的最后一跳节点必须是 OpenVPN 或 OpenConnect 配置档</translation>
    </message>
    <message>
        <source>Hops of the routing profile endpoint %1 cannot use an extra core, a full config, or be a chain</source>
        <translation>路由配置档端点 %1 的跳转节点不能使用额外核心、完整配置，也不能构成链</translation>
    </message>
    <message>
        <source>Hops of the routing profile endpoint %1 cannot run on the Xray core</source>
        <translation>路由配置档端点 %1 的跳转节点不能运行在 Xray 核心上</translation>
    </message>
    <message>
        <source>%1 is used as an endpoint of the routing profile and by the started profile at the same time, remove it from one of them</source>
        <translation>%1 同时被用作路由配置档的端点和被启动的配置档使用，请从其中一个中移除它</translation>
    </message>
    <message>
        <source>%1 is listed twice in the endpoints of the routing profile</source>
        <translation>%1 在路由配置档的端点中重复出现</translation>
    </message>
    <message>
        <source>no group</source>
        <translation>无分组</translation>
    </message>
    <message>
        <source>missing group</source>
        <translation>缺少分组</translation>
    </message>
    <message>
        <source>Encrypted</source>
        <translation>加密</translation>
    </message>
    <message>
        <source>Static Key</source>
        <translation>静态钥匙</translation>
    </message>
    <message>
        <source>Unverified TLS</source>
        <translation>未验证的 TLS</translation>
    </message>
    <message>
        <source>Weak Cipher</source>
        <translation>弱密码算法</translation>
    </message>
    <message>
        <source>Subscription update already queued: %1</source>
        <translation>订阅更新已排队: %1</translation>
    </message>
    <message>
        <source>Requesting subscription: %1</source>
        <translation>正在请求订阅: %1</translation>
    </message>
    <message>
        <source>Requesting subscription %1 error: %2</source>
        <translation>请求订阅 %1 时出错: %2</translation>
    </message>
    <message>
        <source>Subscription request fininshed: %1</source>
        <translation>完成了订阅请求: %1</translation>
    </message>
    <message>
        <source>Processing subscription data...</source>
        <translation>正在处理订阅数据...</translation>
    </message>
    <message>
        <source>Process complete, applying...</source>
        <translation>处理完成，正在应用...</translation>
    </message>
    <message>
        <source>Clearing servers...</source>
        <translation>正在清空服务器...</translation>
    </message>
    <message>
        <source>Added %1 profiles:
%2
Updated %3 profiles:
%4
Deleted %5 Profiles:
%6</source>
        <translation>增加了 %1 个配置档：
%2
更新了 %3 个配置档：
%4
删除了 %5 个配置档：
%6</translation>
    </message>
    <message>
        <source>Still in use, so kept instead of deleted:
%1</source>
        <translation>仍在使用中，因此保留而不是删除:
%1</translation>
    </message>
    <message>
        <source>Nothing</source>
        <translation>无</translation>
    </message>
    <message>
        <source>Change of %1:</source>
        <translation>「%1」的变化:</translation>
    </message>
    <message>
        <source>Change of %1</source>
        <translation>「%1」的变化</translation>
    </message>
    <message>
        <source>internal error: null profile</source>
        <translation>内部错误： 虚配置档</translation>
    </message>
    <message>
        <source>not a remote routing profile</source>
        <translation>不是一个远程路由配置档</translation>
    </message>
    <message>
        <source>remote URL is empty</source>
        <translation>远程 URL 为空</translation>
    </message>
    <message>
        <source>could not parse a routing profile from the response</source>
        <translation>无法解析响应中的路由配置档</translation>
    </message>
    <message>
        <source>the remote content is a raw routing profile, which is not supported for remote profiles yet</source>
        <translation>远程内容是一个原始的路由配置档，它尚未被远程配置档支持</translation>
    </message>
    <message>
        <source>Updating remote routing profile: %1</source>
        <translation>正在更新远程路由器配置档: %1</translation>
    </message>
    <message>
        <source>Remote routing profile %1 failed: %2</source>
        <translation>远程路由配置档 %1 失败: %2</translation>
    </message>
    <message>
        <source>Remote routing profile updated: %1</source>
        <translation>远程路由配置档已更新: %1</translation>
    </message>
    <message>
        <source>Remote routing profiles: %1 updated, %2 failed</source>
        <translation>远程路由配置档： 更新了 %1 个，失败了 %2 个</translation>
    </message>
    <message>
        <source>Failed to parse the Clash configuration.</source>
        <translation>解析 Clash 配置失败。</translation>
    </message>
    <message>
        <source>Failed to import the OpenVPN profile.</source>
        <translation>导入 OpenVPN 配置档失败。</translation>
    </message>
    <message>
        <source>Failed to import the OpenConnect profile.</source>
        <translation>导入 OpenConnect 配置档失败。</translation>
    </message>
    <message>
        <source>Failed to decode the vpn:// link.</source>
        <translation>解码 vpn:// 链接失败。</translation>
    </message>
    <message>
        <source>No importable profile found in the vpn:// link.</source>
        <translation>在 vpn:// 链接中找不到可导入的配置档。</translation>
    </message>
    <message>
        <source>Empty OpenVPN configuration.</source>
        <translation>空 OpenVPN 配置。</translation>
    </message>
    <message>
        <source>&lt;connection&gt; block without a remote, skipped.</source>
        <translation>&lt;connection&gt; 块未带 remote，已跳过。</translation>
    </message>
    <message>
        <source>Ignored an unreadable peer fingerprint: %1</source>
        <translation>已忽略不可读取的对端指纹: %1</translation>
    </message>
    <message>
        <source>PKCS#12 bundles are not supported; export the CA, certificate and key as PEM.</source>
        <translation>不支持 PKCS#12 捆绑包；请将 CA 证书、客户端证书和钥匙导出为 PEM 格式。</translation>
    </message>
    <message>
        <source>Ignored inline block: &lt;%1&gt;</source>
        <translation>已忽略内联块： &lt;%1&gt;</translation>
    </message>
    <message>
        <source>This is an OpenVPN server configuration (%1), not a client profile.</source>
        <translation>这是 OpenVPN 服务器配置 (%1)，不是客户端配置档。</translation>
    </message>
    <message>
        <source>TAP (layer 2) tunnels are not supported; only `dev tun` profiles can be imported.</source>
        <translation>不支持 TAP (第2层) 隧道，仅可以导入 `dev tun` 配置档。</translation>
    </message>
    <message>
        <source>This is an OpenVPN server configuration (mode server), not a client profile.</source>
        <translation>这是 OpenVPN 服务器配置(模式服务器)，不是客户端配置档。</translation>
    </message>
    <message>
        <source>`proto %1` is a server transport.</source>
        <translation>`proto %1` 是服务器传输（协议）。</translation>
    </message>
    <message>
        <source>Unknown transport: proto %1</source>
        <translation>未知传输： 协议 %1</translation>
    </message>
    <message>
        <source>Ignored an unreadable IPv6 interface address: %1</source>
        <translation>已忽略无法读取的 IPv6 接口地址: %1</translation>
    </message>
    <message>
        <source>Credentials live in %1; enter them in the profile editor.</source>
        <translation>凭据存在 %1 中；请在配置档编辑器中输入。</translation>
    </message>
    <message>
        <source>A hash-directory CRL is not supported; point `crl-verify` at a PEM or DER file.</source>
        <translation>不支持哈希目录形式的 CRL；请在 PEM 或 DER 文件处指向 `crl-verify`。</translation>
    </message>
    <message>
        <source>Ignored a symbolic route target: route %1</source>
        <translation>已忽略符号路由目标: 路由 %1</translation>
    </message>
    <message>
        <source>Ignored an unreadable route: %1</source>
        <translation>已忽略不可达的路由: %1</translation>
    </message>
    <message>
        <source>redirect-gateway flag has no sing-box equivalent: %1</source>
        <translation>redirect-gateway (重定向网关)标志没有对应的 sing-box 设置： %1</translation>
    </message>
    <message>
        <source>Not supported by the OpenVPN endpoint, ignored: %1</source>
        <translation>不被 OpenVPN 端点支持，已忽略： %1</translation>
    </message>
    <message>
        <source>Unknown OpenVPN directive, ignored: %1</source>
        <translation>未知的 OpenVPN 指令，已忽略： %1</translation>
    </message>
    <message>
        <source>`%1` turns the client certificate off; it was dropped and the server has to accept password login.</source>
        <translation>`%1` 关闭客户端证书；证书已被取消，服务器必须接受密码登录。</translation>
    </message>
    <message>
        <source>`cert` without a `key`: add the private key, or `client-cert-not-required` for password-only login.</source>
        <translation>`cert` 没有 `key`: 添加私钥，或使用 `client-cert-not-required` 进行仅密码登录。</translation>
    </message>
    <message>
        <source>`key` without a `cert`: add the client certificate.</source>
        <translation>`key` 没有 `cert`: 添加客户端证书。</translation>
    </message>
    <message>
        <source>No `remote` server in the OpenVPN configuration.</source>
        <translation>OpenVPN 配置中没有 `remote` 服务器。</translation>
    </message>
    <message>
        <source>Ignored an unreadable interface address: %1</source>
        <translation>忽略了无法读取的接口地址： %1</translation>
    </message>
    <message>
        <source>`remote-cert-eku` replaces `remote-cert-tls`; the latter was dropped.</source>
        <translation>`remote-cert-eku` 替代了 `remote-cert-tls`；后者已被弃用。</translation>
    </message>
    <message>
        <source>Unsupported OpenConnect protocol, ignored: %1</source>
        <translation>不支持的 OpenConnect 协议，已忽略： %1</translation>
    </message>
    <message>
        <source>Unknown compression mode, ignored: %1</source>
        <translation>未知的压缩模式，已忽略： %1</translation>
    </message>
    <message>
        <source>Unknown reported OS, ignored: %1</source>
        <translation>未知的报告操作系统，已忽略： %1</translation>
    </message>
    <message>
        <source>Unsupported token mode, ignored: %1</source>
        <translation>不支持的令牌模式，已忽略： %1</translation>
    </message>
    <message>
        <source>Expected --form-entry=FORM:OPTION=VALUE, ignored: %1</source>
        <translation>预期 --form-entry=FORM:OPTION=VALUE，已忽略： %1</translation>
    </message>
    <message>
        <source>Configure a proxy through Throne&apos;s chain instead, ignored: %1</source>
        <translation>改为通过 Throne 的链来配置代理，已忽略： %1</translation>
    </message>
    <message>
        <source>Unknown OpenConnect option, ignored: %1</source>
        <translation>未知的 OpenConnect 选项，已忽略： %1</translation>
    </message>
    <message>
        <source>Unknown OpenConnect option, ignored: -%1</source>
        <translation>未知的 OpenConnect 选项，已忽略： -%1</translation>
    </message>
    <message>
        <source>An AnyConnect profile carrying a DTD is not accepted.</source>
        <translation>承载 DTD 的 AnyConnect 配置档不被接受。</translation>
    </message>
    <message>
        <source>Malformed AnyConnect profile: %1</source>
        <translation>格式错误的 AnyConnect 配置档： %1</translation>
    </message>
    <message>
        <source>The AnyConnect profile lists no host entry.</source>
        <translation>AnyConnect 配置档未列出主机条目。</translation>
    </message>
    <message>
        <source>Skipped a host entry without an address.</source>
        <translation>跳过了无地址的主机条目。</translation>
    </message>
    <message>
        <source>Skipped &quot;%1&quot;: IKEv2/IPsec is not spoken by the OpenConnect endpoint.</source>
        <translation>跳过了 &quot;%1&quot;： OpenConnect 端点不使用 IKEv2/IPsec。</translation>
    </message>
    <message>
        <source>Skipped an unreadable host address: %1</source>
        <translation>跳过了无法读取的主机地址: %1</translation>
    </message>
    <message>
        <source>Empty OpenConnect profile.</source>
        <translation>空的 OpenConnect 配置档。</translation>
    </message>
    <message>
        <source>The AnyConnect profile has no host entry this endpoint can use.</source>
        <translation>AnyConnect 配置档没有这个终端可以使用的主机条目。</translation>
    </message>
    <message>
        <source>No OpenConnect options found.</source>
        <translation>未找到 OpenConnect 选项。</translation>
    </message>
    <message>
        <source>No OpenConnect server address found.</source>
        <translation>未找到 OpenConnect 服务器地址。</translation>
    </message>
    <message>
        <source>Request with proxy but no profile started.</source>
        <translation>有用代理的请求，但未启动配置档。</translation>
    </message>
    <message>
        <source>Failed to reach the core.</source>
        <translation>连接到核心失败。</translation>
    </message>
    <message>
        <source>Cloudflare WARP</source>
        <translation>Cloudflare WARP</translation>
    </message>
    <message>
        <source>Generating a WARP identity registers a new device with Cloudflare.&lt;br&gt;&lt;br&gt;Do you accept the &lt;a href=&quot;%1&quot;&gt;Cloudflare WARP terms of service&lt;/a&gt;?</source>
        <translation>生成 WARP 身份识别会用 Cloudflare 注册新设备。&lt;br&gt;&lt;br&gt;你接受&lt;a href=&quot;%1&quot;&gt;Cloudflare WARP 服务条款&lt;/a&gt;吗?</translation>
    </message>
    <message>
        <source>Connect OK</source>
        <translation>连接成功</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>不可用</translation>
    </message>
    <message>
        <source>%1 route prefer</source>
        <translation>%1 路由优选</translation>
    </message>
    <message>
        <source>Default</source>
        <translation>默认</translation>
    </message>
    <message>
        <source>Response larger than %1 MB</source>
        <translation>响应大于 %1 MB</translation>
    </message>
    <message>
        <source>Download failed: server returned HTTP status %1.</source>
        <translation>下载失败： 服务器返回 HTTP 状态 %1。</translation>
    </message>
    <message>
        <source>Download failed: the server returned an empty response.</source>
        <translation>下载失败： 服务器返回一个空响应。</translation>
    </message>
    <message>
        <source>Could not open file.</source>
        <translation>无法打开文件。</translation>
    </message>
    <message>
        <source>Could not write file.</source>
        <translation>无法写入文件。</translation>
    </message>
    <message>
        <source>Could not save downloaded file.</source>
        <translation>无法保存下载的文件。</translation>
    </message>
    <message>
        <source>Secret is empty</source>
        <translation>密钥是空的</translation>
    </message>
    <message>
        <source>Secret is not valid base32</source>
        <translation>密钥不是有效的 base32</translation>
    </message>
    <message>
        <source>Secret is too short</source>
        <translation>密钥太短</translation>
    </message>
    <message>
        <source>Digits must be between %1 and %2</source>
        <translation>数字必须在 %1 和 %2 之间</translation>
    </message>
    <message>
        <source>Period must be between %1 and %2 seconds</source>
        <translation>周期必须介于 %1 和 %2 秒之间</translation>
    </message>
    <message>
        <source>Not a readable OTP export</source>
        <translation>不是可读的 OTP 导出</translation>
    </message>
    <message>
        <source>Unreadable migration link</source>
        <translation>无法读取的迁移链接</translation>
    </message>
    <message>
        <source>Not an otpauth link or secret: %1</source>
        <translation>不是 otpauth 链接或密钥: %1</translation>
    </message>
    <message>
        <source>Auto-update: running %1</source>
        <translation>自动更新： 正在运行 %1</translation>
    </message>
    <message>
        <source>[Warn] Throne did not shut down cleanly last time. Diagnostics were saved to: %1</source>
        <translation>[警告] 上次 Throne 没有正常干净的关闭。诊断信息已被保存到： %1</translation>
    </message>
    <message>
        <source>never</source>
        <translation>从不</translation>
    </message>
    <message>
        <source>%1s ago</source>
        <translation>%1 秒前</translation>
    </message>
    <message>
        <source>%1m ago</source>
        <translation>%1 分钟前</translation>
    </message>
    <message>
        <source>%1h ago</source>
        <translation>%1 小时前</translation>
    </message>
    <message>
        <source>Auto selector paused — no network connection (%1 profiles held)</source>
        <translation>自动选择器已暂停 — 没有网络连接(保留了 %1 个配置档)</translation>
    </message>
    <message>
        <source>Auto selector starting — checking %1 profiles</source>
        <translation>自动选择器正在启动 — 正在检查 %1 个配置档</translation>
    </message>
    <message>
        <source>Auto selector checking profiles (%1/%2 measured)</source>
        <translation>自动选择器正在检查配置档 (已测量 %1/%2 个)</translation>
    </message>
    <message>
        <source>Auto selector — no working profile out of %1, still checking</source>
        <translation>自动选择器 — 在 %1 个配置档中无可用的配置档，仍在检查中</translation>
    </message>
    <message>
        <source>Auto selector on %1 (%2 of %3 working)</source>
        <translation>自动选择器在使用「%1」 (可用 %2 个/共 %3 个)</translation>
    </message>
    <message>
        <source>, switched %1</source>
        <translation>, 切换于 %1</translation>
    </message>
    <message>
        <source>%1 working</source>
        <translation>%1 个正在运作</translation>
    </message>
    <message>
        <source>%1 cooling down</source>
        <translation>%1 个正在冷却</translation>
    </message>
    <message>
        <source>%1 not checked yet</source>
        <translation>%1 个尚未检查</translation>
    </message>
    <message>
        <source>%1 being checked</source>
        <translation>%1 个正在检查</translation>
    </message>
    <message>
        <source>balancing over %1</source>
        <translation>在 %1 个上负载均衡</translation>
    </message>
    <message>
        <source>%1 profiles: %2</source>
        <translation>%1 个配置档: %2</translation>
    </message>
    <message>
        <source>, </source>
        <translation>, </translation>
    </message>
    <message>
        <source>No auto selector is running.</source>
        <translation>没有自动选择器正在运行。</translation>
    </message>
    <message>
        <source>That profile is not in the running pool.</source>
        <translation>该配置档不在运行池中。</translation>
    </message>
    <message>
        <source>Could not reach the core.</source>
        <translation>无法访问核心。</translation>
    </message>
    <message>
        <source>[Auto selector] Every profile is failing, but this machine has no network connection — keeping the current pool.</source>
        <translation>[自动选择器] 每个配置档都在失败，但是这个机器没有网络连接 — 保留当前的（配置）池。</translation>
    </message>
    <message>
        <source>Proxy: %1
Direct: %2</source>
        <translation>代理: %1
直连: %2</translation>
    </message>
    <message>
        <source>Core exited, cleaning up...</source>
        <translation>核心已退出，正在清理...</translation>
    </message>
    <message>
        <source>Core exits too frequently, stop automatic restart this profile.</source>
        <translation>核心退出太频繁，停止自动重启这个配置档。</translation>
    </message>
    <message>
        <source>Restarting the core ...</source>
        <translation>正在重启核心...</translation>
    </message>
    <message>
        <source>Used: %1 Remain: %2 Expire: %3</source>
        <translation>已用: %1 剩余: %2 过期: %3</translation>
    </message>
    <message>
        <source>Added remote routing profiles: %1 of %2 fetched</source>
        <translation>添加了远程路由配置档: 取得了 %1 / %2</translation>
    </message>
    <message>
        <source>Add profiles to this group</source>
        <translation>添加配置档到这个分组</translation>
    </message>
    <message>
        <source>Create new subscription group</source>
        <translation>创建新的订阅分组</translation>
    </message>
    <message>
        <source>Import HTTP proxy profile</source>
        <translation>导入 HTTP 代理配置档</translation>
    </message>
    <message>
        <source>url detected</source>
        <translation>检测到 URL</translation>
    </message>
    <message>
        <source>%1
How to update?</source>
        <translation>%1
如何更新？</translation>
    </message>
    <message>
        <source>Download Profiles</source>
        <translation>下载配置档</translation>
    </message>
    <message>
        <source>Requesting profile error: %1</source>
        <translation>请求配置档时出错: %1</translation>
    </message>
    <message>
        <source>Update</source>
        <translation>更新</translation>
    </message>
    <message>
        <source>Not official support platform</source>
        <translation>非官方支持平台</translation>
    </message>
    <message>
        <source>Requesting update error: %1</source>
        <translation>请求更新时出错：%1</translation>
    </message>
    <message>
        <source>No update</source>
        <translation>无更新</translation>
    </message>
    <message>
        <source>Update found: %1
Release note:
%2</source>
        <translation>发现更新: %1
更新日志:
%2</translation>
    </message>
    <message>
        <source>Open in browser</source>
        <translation>浏览器中打开</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
    <message>
        <source>Update is ready, restart to install?</source>
        <translation>更新已准备好，重启进行安装吗？</translation>
    </message>
    <message>
        <source>a profile that no longer exists</source>
        <translation>不再存在的配置档</translation>
    </message>
    <message>
        <source>An auto selector cannot be a hop in a chain: it moves to a different server on its own whenever one degrades.</source>
        <translation>自动选择器不能作为链式代理中的中间跳点： 它会在某个节点性能下降时自行转移到不同的服务器。</translation>
    </message>
    <message>
        <source>Select</source>
        <translation>选择</translation>
    </message>
    <message>
        <source>Downloaded Xray geo asset: %1</source>
        <translation>已下载 Xray geo 资源: %1</translation>
    </message>
    <message>
        <source>Download geo asset</source>
        <translation>下载 geo 资源</translation>
    </message>
    <message>
        <source>%1 was downloaded successfully.</source>
        <translation>%1 被成功下载。</translation>
    </message>
    <message>
        <source>Failed to download %1:
%2</source>
        <translation>下载 %1 失败:
%2</translation>
    </message>
    <message>
        <source>Too much data to fit in a QR code.</source>
        <translation>数据太多，无法放入二维码中。</translation>
    </message>
    <message>
        <source>Copy</source>
        <translation>复制</translation>
    </message>
    <message>
        <source>just now</source>
        <translation>刚刚</translation>
    </message>
    <message>
        <source>Working</source>
        <translation>运作中</translation>
    </message>
    <message>
        <source>Unstable</source>
        <translation>不稳定</translation>
    </message>
    <message>
        <source>Not checked</source>
        <translation>未检查</translation>
    </message>
    <message>
        <source>Failing</source>
        <translation>失败中</translation>
    </message>
    <message>
        <source>Paused</source>
        <translation>已暂停</translation>
    </message>
    <message>
        <source>your choice, carrying traffic now</source>
        <translation>你的选择，正在承载流量</translation>
    </message>
    <message>
        <source>your choice, but not usable right now</source>
        <translation>你的选择，但现在不可用</translation>
    </message>
    <message>
        <source>carrying traffic now</source>
        <translation>正在承载流量</translation>
    </message>
    <message>
        <source>failed to connect, retrying in %1s</source>
        <translation>连接失败，%1 秒后重试</translation>
    </message>
    <message>
        <source>failed to connect</source>
        <translation>连接失败</translation>
    </message>
    <message>
        <source>every check failed</source>
        <translation>每个检查失败</translation>
    </message>
    <message>
        <source>ready to take over</source>
        <translation>准备好接管</translation>
    </message>
    <message>
        <source>check in progress</source>
        <translation>检查进行中</translation>
    </message>
    <message>
        <source>queued for checking</source>
        <translation>已排队等待检查</translation>
    </message>
    <message>
        <source>%1 of %2 checks failed</source>
        <translation>%1 / %2 个检查失败</translation>
    </message>
    <message>
        <source>Connected</source>
        <translation>已连接</translation>
    </message>
    <message>
        <source>Connecting…</source>
        <translation>连接中…</translation>
    </message>
    <message>
        <source>Waiting for sign-in</source>
        <translation>正在等待登录</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>错误</translation>
    </message>
    <message>
        <source>Unknown</source>
        <translation>未知</translation>
    </message>
    <message>
        <source>The schema is empty</source>
        <translation>模式(Schema)为空</translation>
    </message>
    <message>
        <source>The schema has no definition at %1</source>
        <translation>在 %1 处没有定义模式</translation>
    </message>
    <message>
        <source>Expected %1, got %2</source>
        <translation>预期 %1，实际 %2</translation>
    </message>
    <message>
        <source> or </source>
        <translation> 或 </translation>
    </message>
    <message>
        <source>Expected %1 here</source>
        <translation>这里预期为 %1</translation>
    </message>
    <message>
        <source>%1 is not valid here (expected: %2)</source>
        <translation>%1 在这里无效 (预期: %2)</translation>
    </message>
    <message>
        <source>This option is deprecated</source>
        <translation>这个选项已弃用</translation>
    </message>
    <message>
        <source>&quot;%1&quot; is not in the expected format</source>
        <translation>&quot;%1&quot; 不是采用预期的格式</translation>
    </message>
    <message>
        <source>Value must be at least %1</source>
        <translation>值必须至少为 %1</translation>
    </message>
    <message>
        <source>Value must be at most %1</source>
        <translation>值必须至多为 %1</translation>
    </message>
    <message>
        <source>Unknown field &quot;%1&quot;</source>
        <translation>未知字段 &quot;%1&quot;</translation>
    </message>
    <message>
        <source>Missing required field &quot;%1&quot;</source>
        <translation>缺少必需字段 &quot;%1&quot;</translation>
    </message>
    <message>
        <source>Unknown %1 %2 (expected: %3)</source>
        <translation>未知 %1 %2 (预期: %3)</translation>
    </message>
    <message>
        <source>Value does not match any accepted form</source>
        <translation>值不符合任何接受的形式</translation>
    </message>
    <message>
        <source>null</source>
        <translation>null</translation>
    </message>
    <message>
        <source>boolean</source>
        <translation>boolean</translation>
    </message>
    <message>
        <source>number</source>
        <translation>number</translation>
    </message>
    <message>
        <source>string</source>
        <translation>string</translation>
    </message>
    <message>
        <source>array</source>
        <translation>array</translation>
    </message>
    <message>
        <source>object</source>
        <translation>object</translation>
    </message>
    <message>
        <source>Empty document</source>
        <translation>空文档</translation>
    </message>
    <message>
        <source>Unexpected content after the end of the document</source>
        <translation>文档结尾后有意外内容</translation>
    </message>
    <message>
        <source>The document is nested too deeply</source>
        <translation>文档嵌套太深</translation>
    </message>
    <message>
        <source>Unexpected end of document</source>
        <translation>文档意外结束</translation>
    </message>
    <message>
        <source>Expected a property name in quotes</source>
        <translation>预期引号中的属性名</translation>
    </message>
    <message>
        <source>Expected a colon after the property name</source>
        <translation>预期在属性名称后有一个冒号</translation>
    </message>
    <message>
        <source>Trailing comma</source>
        <translation>尾随逗号</translation>
    </message>
    <message>
        <source>Expected a comma or a closing brace</source>
        <translation>预期出现逗号或右大括号</translation>
    </message>
    <message>
        <source>Expected a comma or a closing bracket</source>
        <translation>预期出现逗号或右括号</translation>
    </message>
    <message>
        <source>Unterminated string</source>
        <translation>未终止的字符串</translation>
    </message>
    <message>
        <source>Unterminated escape sequence</source>
        <translation>未终止的转义序列</translation>
    </message>
    <message>
        <source>Incomplete unicode escape sequence</source>
        <translation>不完整的 Unicode 转义序列</translation>
    </message>
    <message>
        <source>Invalid unicode escape sequence</source>
        <translation>无效的 Unicode 转义序列</translation>
    </message>
    <message>
        <source>Invalid escape sequence</source>
        <translation>无效的转义序列</translation>
    </message>
    <message>
        <source>Control character in string</source>
        <translation>字符串中的控制字符</translation>
    </message>
    <message>
        <source>Invalid value</source>
        <translation>无效值</translation>
    </message>
    <message>
        <source>Invalid number</source>
        <translation>无效数字</translation>
    </message>
    <message>
        <source>Database error</source>
        <translation>数据库错误</translation>
    </message>
    <message>
        <source>%1 failed: %2. Details are in the log file.</source>
        <translation>%1 失败： %2。详情在日志文件中。</translation>
    </message>
    <message>
        <source>Traffic statistics paused</source>
        <translation>流量统计已暂停</translation>
    </message>
    <message>
        <source>The statistics database is unusable (%1). Statistics are paused for this session and the file will be rebuilt when Throne restarts.</source>
        <translation>统计数据库不可用 (%1)。 本次会话将暂停统计功能，将在 Throne 重启时重建该文件。</translation>
    </message>
    <message>
        <source>Writing statistics keeps failing (%1). Statistics are paused until Throne restarts.</source>
        <translation>写入统计信息持续失败（%1）。统计功能将暂停，直至 Throne 重启。</translation>
    </message>
    <message>
        <source>Local</source>
        <translation>本地</translation>
    </message>
    <message>
        <source>Empty</source>
        <translation>空</translation>
    </message>
    <message numerus="yes">
        <source>%n problem(s)</source>
        <translation>
            <numerusform>%n 个问题</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <source>%n warning(s)</source>
        <translation>
            <numerusform>%n 个警告</numerusform>
        </translation>
    </message>
    <message>
        <source>Valid JSON</source>
        <translation>有效 JSON</translation>
    </message>
    <message>
        <source>JSON Editor</source>
        <translation>JSON 编辑器</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>格式化</translation>
    </message>
    <message>
        <source>Invalid JSON</source>
        <translation>无效 JSON</translation>
    </message>
    <message>
        <source>Fix the errors before formatting the document.</source>
        <translation>在格式化文档前修复错误。</translation>
    </message>
    <message>
        <source>The document must be a JSON object.</source>
        <translation>文档必须是 JSON 对象。</translation>
    </message>
    <message>
        <source>Line %1: %2</source>
        <translation>第 %1 行: %2</translation>
    </message>
    <message>
        <source>%1: the private key is empty</source>
        <translation>%1: 私钥是空的</translation>
    </message>
    <message>
        <source>%1: no address is set</source>
        <translation>%1: 未设定地址</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>设置</translation>
    </message>
    <message>
        <source>Settings changed, restart to apply</source>
        <translation>设置已更改，重启进行应用</translation>
    </message>
    <message>
        <source>Restart</source>
        <translation>重启</translation>
    </message>
    <message>
        <source>Ignore</source>
        <translation>忽略</translation>
    </message>
</context>
<context>
    <name>QPlatformTheme</name>
    <message>
        <source>Cancel</source>
        <translation>取消</translation>
    </message>
    <message>
        <source>Apply</source>
        <translation>应用</translation>
    </message>
    <message>
        <source>Yes</source>
        <translation>是</translation>
    </message>
    <message>
        <source>No</source>
        <translation>否</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>确定</translation>
    </message>
</context>
<context>
    <name>Qv2ray::ui::widgets::AutoCompleteTextEdit</name>
    <message>
        <source>You can not input space characters here.</source>
        <translation>你不能在这里输入空格字符。</translation>
    </message>
</context>
<context>
    <name>RawRouteItem</name>
    <message>
        <source>Raw routing profile</source>
        <translation>原始路由配置档</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Prevent modifications</source>
        <translation>防止修改</translation>
    </message>
    <message>
        <source>Use the route object exactly as written (outbound ids are still resolved to tags).
Throne will NOT add its DNS-hijack or xray bridge plumbing, so DNS, chained/xray
outbounds and other Throne features may break. For advanced users only.</source>
        <translation>按原样使用路由对象 (outbounds ids (出站标识符)仍被解析为标记)。
在 Throne 中「不会」添加它的 DNS-hijack (DNS劫持)或 xray bridge plumbing (桥接)等底层机制，
所以 DNS、链式/xray 出口和其它 Throne 功能可能会失效。仅限高级用户使用。</translation>
    </message>
    <message>
        <source>Format JSON</source>
        <translation>格式化 JSON</translation>
    </message>
    <message>
        <source>Raw route</source>
        <translation>原始路由</translation>
    </message>
    <message>
        <source>The route must be a valid JSON object</source>
        <translation>路由必须是一个有效的 JSON 对象</translation>
    </message>
    <message>
        <source>Invalid operation</source>
        <translation>无效操作</translation>
    </message>
    <message>
        <source>Cannot create Route Profile with empty name</source>
        <translation>无法创建带空名称的路由配置档</translation>
    </message>
    <message>
        <source>Invalid route</source>
        <translation>无效路由</translation>
    </message>
</context>
<context>
    <name>RouteItem</name>
    <message>
        <source>Route Profile</source>
        <translation>路由配置档</translation>
    </message>
    <message>
        <source>General</source>
        <translation>常规</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>名称</translation>
    </message>
    <message>
        <source>Default outbound</source>
        <translation>默认出站</translation>
    </message>
    <message>
        <source>Remote source</source>
        <translation>远程来源</translation>
    </message>
    <message>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <source>https://... (throne://route link, base64, or JSON)</source>
        <translation>https://... (throne://路由链接, base64 或 JSON)</translation>
    </message>
    <message>
        <source>Re-fetch this profile from the URL when subscriptions auto-update.
Your local edits are overwritten on each update.</source>
        <translation>订阅自动更新时从该 URL 重新获取这个配置档。
每次更新时都会覆盖您的本地编辑。</translation>
    </message>
    <message>
        <source>Auto update</source>
        <translation>自动更新</translation>
    </message>
    <message>
        <source>Fetch the URL and show the routing profile without changing the current rules.</source>
        <translation>获取该 URL 并显示路由配置档，而不更改当前规则。</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>预览</translation>
    </message>
    <message>
        <source>Fetch the URL and replace the current rules with the fetched ones.</source>
        <translation>获取该 URL 并用取回的规则替换当前的。</translation>
    </message>
    <message>
        <source>Fetch</source>
        <translation>获取</translation>
    </message>
    <message>
        <source>Basic</source>
        <translation>基本</translation>
    </message>
    <message>
        <source>How to use</source>
        <translation>如何使用</translation>
    </message>
    <message>
        <source>Direct</source>
        <translation>直连</translation>
    </message>
    <message>
        <source>Proxy</source>
        <translation>代理</translation>
    </message>
    <message>
        <source>Block</source>
        <translation>阻止</translation>
    </message>
    <message>
        <source>Warp-bypass</source>
        <translation>Warp-bypass</translation>
    </message>
    <message>
        <source>Endpoints</source>
        <translation>端点</translation>
    </message>
    <message>
        <source>OpenVPN / OpenConnect profiles started alongside this routing profile. Traffic for the networks they advertise goes through them; everything else follows this profile&apos;s rules. Each endpoint gets a rule in the Advanced tab that you can move among your own rules. A chain endpoint can hand out one rule per inner OpenVPN / OpenConnect hop too, so traffic can be routed to a hop before the exit.</source>
        <translation>随这个路由配置档同步启动的 OpenVPN / OpenConnect 配置档。它们宣告的网络的流量将通过它们处理；其余的则遵循这个配置档的规则。每个端点都会在「高级」选项卡中得到一条规则，你可以在它们自有的规则中随意移动。链式端点也可以为每个内部 OpenVPN / OpenConnect 跳点分配一条规则，从而使流量可以在到达 Exit (最终出口)前被路由到某个（中间）跳点。</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>添加</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Advanced</source>
        <translation>高级</translation>
    </message>
    <message>
        <source>Rules</source>
        <translation>规则</translation>
    </message>
    <message>
        <source>New</source>
        <translation>新建</translation>
    </message>
    <message>
        <source>Move Up</source>
        <translation>上移</translation>
    </message>
    <message>
        <source>Move Down</source>
        <translation>下移</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>删除</translation>
    </message>
    <message>
        <source>Rule Settings</source>
        <translation>规则设置</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>动作</translation>
    </message>
    <message>
        <source>This rule is managed by the Endpoints tab. You can only move it.</source>
        <translation>这个规则由“端点”选项卡管理。只能调整其位置。</translation>
    </message>
    <message>
        <source>Invalid rules</source>
        <translation>无效规则</translation>
    </message>
    <message>
        <source>Some rules could not be added:
</source>
        <translation>无法添加某些规则：
</translation>
    </message>
    <message>
        <source>Simple rule manual</source>
        <translation>简单规则手册</translation>
    </message>
    <message>
        <source>Invalid URL</source>
        <translation>无效 URL</translation>
    </message>
    <message>
        <source>Enter a valid http(s) URL first.</source>
        <translation>首先输入一个有效的 http(s) URL。</translation>
    </message>
    <message>
        <source>Fetch from remote</source>
        <translation>从远端获取</translation>
    </message>
    <message>
        <source>This will replace the current rules with the ones fetched from the URL. Continue?</source>
        <translation>这样将会用从该 URL 获取的规则来替换当前规则。 继续吗?</translation>
    </message>
    <message>
        <source>Fetching...</source>
        <translation>获取中…</translation>
    </message>
    <message>
        <source>Could not fetch routing profile</source>
        <translation>无法获取路由配置档</translation>
    </message>
    <message>
        <source>Loaded %1 rule(s) from the remote URL.</source>
        <translation>已从远程 URL 加载 %1 条规则。</translation>
    </message>
    <message>
        <source>Fetched</source>
        <translation>已获取</translation>
    </message>
    <message>
        <source>Fetched with warnings</source>
        <translation>已获取完成，但有警告</translation>
    </message>
    <message>
        <source>Remote routing profile preview</source>
        <translation>远程路由配置档预览</translation>
    </message>
    <message>
        <source>%1 — %2 rule(s)</source>
        <translation>%1 — %2 条规则</translation>
    </message>
    <message>
        <source>(unnamed)</source>
        <translation>(未命名)</translation>
    </message>
    <message>
        <source>Profile #%1 — deleted, dropped when you save</source>
        <translation>配置档 #%1 — 已删除，保存时丢弃</translation>
    </message>
    <message>
        <source>Allow routing to inner hops</source>
        <translation>允许路由到内部跳点</translation>
    </message>
    <message>
        <source>Give each OpenVPN/OpenConnect hop behind the exit its own rule, so traffic can be routed to it as well.</source>
        <translation>赋予出口节点(exit)后每个 OpenVPN/OpenConnect 跳点自己的规则，以便流量也可路由到这些跳点。</translation>
    </message>
    <message>
        <source>%1 route prefer</source>
        <translation>%1 路由首选</translation>
    </message>
    <message>
        <source>Invalid operation</source>
        <translation>无效操作</translation>
    </message>
    <message>
        <source>Cannot create Route Profile with empty name</source>
        <translation>无法创建带空名称的路由配置档</translation>
    </message>
    <message>
        <source>Remote routing profiles need a URL.</source>
        <translation>远程路由配置档需要一个 URL。</translation>
    </message>
    <message>
        <source>Some rules could not be added, fix them before saving:
</source>
        <translation>某些规则无法添加，请在保存前修复它们：
</translation>
    </message>
    <message>
        <source>Empty Route Profile</source>
        <translation>空路由配置档</translation>
    </message>
    <message>
        <source>No valid rules are in the profile</source>
        <translation>配置档中没有有效的规则</translation>
    </message>
    <message>
        <source>%1 endpoint profile(s) no longer exist and were removed from this routing profile.</source>
        <translation>%1 个端点配置档已不存在，已从这个路由配置档中移除。</translation>
    </message>
    <message>
        <source>Endpoint rule: move it to choose where the endpoint claims traffic. Managed by the Endpoints tab.</source>
        <translation>端点规则： 调整规则位置以选择该端点声明接管的流量的位置。由“端点”选项卡管理。</translation>
    </message>
    <message>
        <source>Check attributes to show as tabs; unchecking clears their values.</source>
        <translation>勾选要显示为选项卡的属性；取消勾选则清除它们的值。</translation>
    </message>
    <message>
        <source>This rule installs a &apos;preferred by&apos; rule so that the networks advertised by the endpoint %1 get routed into the endpoint tunnel.</source>
        <translation>这个规则安装一个“优先使用”规则，以便由端点 %1 通告（播发）的网络被路由到该端点隧道。</translation>
    </message>
    <message>
        <source>Endpoint rule</source>
        <translation>端点规则</translation>
    </message>
    <message>
        <source>This rule belongs to &quot;%1&quot;, an inner hop of the endpoint &quot;%2&quot;.
Stop routing to that endpoint&apos;s inner hops?</source>
        <translation>这个规则属于 &quot;%1&quot;，它是端点 &quot;%2&quot; 的内部跳点。
停止路由到该端点的内部跳点吗?</translation>
    </message>
    <message>
        <source>This rule belongs to the endpoint &quot;%1&quot; and cannot be deleted on its own.
Remove that endpoint from this routing profile as well?</source>
        <translation>这条规则属于端点“%1”，且无法单独删除。
同时从这个路由配置档中移除该端点吗？</translation>
    </message>
</context>
<context>
    <name>RuntimeStatsWidget</name>
    <message>
        <source>Process</source>
        <translation>进程</translation>
    </message>
    <message>
        <source>Core</source>
        <translation>核心</translation>
    </message>
    <message>
        <source>Running Config</source>
        <translation>正在运行的配置</translation>
    </message>
    <message>
        <source>Country</source>
        <translation>国别</translation>
    </message>
    <message>
        <source>Config</source>
        <translation>配置</translation>
    </message>
    <message>
        <source>Out IP</source>
        <translation>出口 IP</translation>
    </message>
    <message>
        <source>Ping</source>
        <translation>Ping</translation>
    </message>
    <message>
        <source>Endpoint</source>
        <translation>端点</translation>
    </message>
    <message>
        <source>State</source>
        <translation>状态</translation>
    </message>
    <message>
        <source>Network</source>
        <translation>网络</translation>
    </message>
    <message>
        <source>Connections</source>
        <translation>连接</translation>
    </message>
    <message>
        <source>Proxy</source>
        <translation>代理</translation>
    </message>
    <message>
        <source>Direct</source>
        <translation>直连</translation>
    </message>
    <message>
        <source>System</source>
        <translation>系统</translation>
    </message>
    <message>
        <source>Databases</source>
        <translation>数据库</translation>
    </message>
    <message>
        <source>Uptime</source>
        <translation>正常运行时间</translation>
    </message>
    <message>
        <source>Next sub update</source>
        <translation>下次订阅更新</translation>
    </message>
    <message>
        <source>Next remote route update</source>
        <translation>下次远程路由更新</translation>
    </message>
    <message>
        <source>CPU</source>
        <translation>CPU</translation>
    </message>
    <message>
        <source>RAM</source>
        <translation>内存</translation>
    </message>
    <message>
        <source>Disabled</source>
        <translation>禁用</translation>
    </message>
    <message>
        <source>Due now</source>
        <translation>到期</translation>
    </message>
    <message>
        <source>in %1</source>
        <translation>于 %1</translation>
    </message>
    <message>
        <source>No active config</source>
        <translation>无活动配置</translation>
    </message>
    <message>
        <source>%1 active   ·   %2 TCP   ·   %3 UDP</source>
        <translation>活动: %1   ·   TCP: %2   ·   UDP: %3</translation>
    </message>
    <message>
        <source>Details</source>
        <translation>详情</translation>
    </message>
    <message>
        <source>Unavailable</source>
        <translation>不可用</translation>
    </message>
    <message>
        <source>N/A</source>
        <translation>不可用</translation>
    </message>
</context>
<context>
    <name>SpeedWidget</name>
    <message>
        <source>Proxy</source>
        <translation>代理</translation>
    </message>
    <message>
        <source>Direct</source>
        <translation>直连</translation>
    </message>
</context>
<context>
    <name>StartStopButton</name>
    <message>
        <source>Select a profile to start</source>
        <translation>选择要启动的一个配置档</translation>
    </message>
    <message>
        <source>Start</source>
        <translation>启动</translation>
    </message>
    <message>
        <source>Connecting…</source>
        <translation>连接中…</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>停止</translation>
    </message>
    <message>
        <source>Stopping…</source>
        <translation>正在停止…</translation>
    </message>
</context>
<context>
    <name>Sys::CoreDiagnostics</name>
    <message>
        <source>The core is not running.</source>
        <translation>核心未在运行。</translation>
    </message>
    <message>
        <source>Could not reach the core. See the log for details.</source>
        <translation>无法访问核心。查看日志了解详情。</translation>
    </message>
    <message>
        <source>The core could not capture the profile: %1</source>
        <translation>核心无法捕获剖析文件: %1</translation>
    </message>
    <message>
        <source>The core returned an empty profile.</source>
        <translation>该核心返回了一个空剖析文件。</translation>
    </message>
    <message>
        <source>Could not save %1: %2</source>
        <translation>无法保存 %1: %2</translation>
    </message>
    <message>
        <source>Performance profile saved to %1</source>
        <translation>性能剖析数据已保存到 %1</translation>
    </message>
    <message>
        <source>The performance profile was saved (%1).</source>
        <translation>性能剖析已保存 (%1)。</translation>
    </message>
    <message>
        <source>Performance profile failed: %1</source>
        <translation>性能剖析失败: %1</translation>
    </message>
    <message>
        <source>Performance profile</source>
        <translation>性能剖析</translation>
    </message>
    <message>
        <source>Show in folder</source>
        <translation>在文件夹中显示</translation>
    </message>
</context>
<context>
    <name>TrafficChartWidget</name>
    <message>
        <source>No traffic recorded for this period</source>
        <translation>这个周期无流量记录</translation>
    </message>
    <message>
        <source>Download</source>
        <translation>下载(↓)</translation>
    </message>
    <message>
        <source>Upload</source>
        <translation>上传(↑)</translation>
    </message>
</context>
<context>
    <name>TrayOtpCodes</name>
    <message>
        <source>No OTP profiles yet</source>
        <translation>尚无 OTP 配置档</translation>
    </message>
    <message>
        <source>No matches</source>
        <translation>无匹配</translation>
    </message>
    <message>
        <source>Invalid secret</source>
        <translation>无效密钥</translation>
    </message>
    <message>
        <source>Copied</source>
        <translation>已复制</translation>
    </message>
</context>
<context>
    <name>TrayPopupFrame</name>
    <message>
        <source>Search…</source>
        <translation>搜索...</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>关闭</translation>
    </message>
</context>
<context>
    <name>TrayProfileSelector</name>
    <message>
        <source>Back to groups</source>
        <translation>返回分组</translation>
    </message>
    <message>
        <source>Select Routing</source>
        <translation>选择路由</translation>
    </message>
    <message>
        <source>No matches</source>
        <translation>无匹配</translation>
    </message>
    <message>
        <source>No routing profiles</source>
        <translation>无路由配置档</translation>
    </message>
    <message>
        <source>Select Server</source>
        <translation>选择服务器</translation>
    </message>
    <message>
        <source>Stop: %1</source>
        <translation>停止: %1</translation>
    </message>
    <message>
        <source>No servers</source>
        <translation>无服务器</translation>
    </message>
    <message>
        <source>Page %1/%2</source>
        <translation>页面 %1/%2</translation>
    </message>
</context>
</TS>
