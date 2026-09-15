#pragma once

#include <QSortFilterProxyModel>
#include <QString>

class ConnectionsTreeModel;

namespace ConnectionsTree {
struct ProcessGroupItem;
struct ConnectionLeafItem;
}

class ConnectionsTreeFilterProxyModel : public QSortFilterProxyModel {
    Q_OBJECT
public:
    explicit ConnectionsTreeFilterProxyModel(QObject *parent = nullptr);

    void setFilters(const QString &source, const QString &target, const QString &protocol, const QString &outbound);

    bool hasActiveFilter() const;

    ConnectionsTreeModel *treeModel() const;

protected:
    bool filterAcceptsRow(int sourceRow, const QModelIndex &sourceParent) const override;

private:
    bool leafMatches(const ConnectionsTree::ProcessGroupItem *group, const ConnectionsTree::ConnectionLeafItem *leaf) const;

    QString m_source;
    QString m_target;
    QString m_protocol;
    QString m_outbound;
};
