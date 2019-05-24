import { connect } from 'react-redux';
import action from 'actions/menu';
import ExTable from 'components/ExTable';
import { Badge, Tag, Divider, Popconfirm } from 'antd';
import CircleBtn from './CircleBtn';
import { FormattedMessage } from 'react-intl';

class Table extends React.Component {
    constructor (props) {
        super(props);

        const { operations, onMove, onSubAdd, onEdit, onDelete } = this.props;
        this.columns = [
            { title: '根菜单',
                dataIndex: 'name',
                render: (value, data) => (
                    <div>
                        {
                            data.indents.map((indent, i) => <span key={i} className="indent">{indent}</span>)
                        }
                        <Tag color={['purple', 'blue', 'cyan', 'green'][data.indents.length - 1]} style={{ marginLeft: 8 }}><FormattedMessage id={value}/></Tag>
                        <CircleBtn onClick={onMove.bind(this, data.id, true)} title="上移" icon="arrow-up"/>
                        <CircleBtn onClick={onMove.bind(this, data.id, false)} title="下移" icon="arrow-down"/>
                        {
                            !data.module && <CircleBtn title="添加子菜单" icon="plus" onClick={onSubAdd.bind(this, data.id)}/>
                        }
                    </div>
                )
            },
            { title: '菜单标签', dataIndex: 'module', render: (value) => value && <Tag color="geekblue">{value}</Tag> },
            { title: '状态', dataIndex: 'display', render: (value) => value === 1 ? <Badge status="success" text="显示"/> : <Badge status="default" text="隐藏"/> }
        ];

        if (operations.include('UPDATE', 'DELETE')) {
            this.columns.push({
                title: '操作',
                render: (value, data) => {
                    let actions = [];
                    if (operations.include('UPDATE')) {
                        actions.push(<a key="b1" onClick={onEdit.bind(this, data)}><FormattedMessage id={'menu_operation_edit'}/></a>);
                    }
                    if (operations.include('DELETE')) {
                        actions.push(
                            <Popconfirm key="b2" placement="left" title="确定删除该菜单吗？（其子菜单将一并删除！）" onConfirm={onDelete.bind(this, data.id)}>
                                <a><FormattedMessage id={'menu_operation_delete'}/></a>
                            </Popconfirm>
                        );
                    }
                    return <div>{actions.joinItem(i => <Divider key={i} type="vertical"/>)}</div>;
                }
            });
        }
    }

    render () {
        return (
            <ExTable
                loading={this.props.loading}
                columns={this.columns}
                dataSource={this.props.list}/>
        );
    }
}

Table = connect(state => {
    const operations = state.app.menuObj['systemConfig/menu'].functions;
    const { list, loading } = state.menu;
    return { operations, list, loading };
}, dispatch => ({
    /**
     * 修改菜单
     * @param item
     */
    onEdit (item) {
        dispatch({ type: 'MENU_EDIT', data: item });
    },
    /**
     * 删除菜单
     * @param id
     */
    onDelete (id) {
        dispatch(action.deleteMenu(id)).then(() => {
            dispatch(action.loadList());
        });
    },
    /**
     * 菜单排序
     * @param id
     * @param isUp
     */
    onMove (id, isUp) {
        dispatch(action.moveMenu(id, isUp)).then(() => {
            dispatch(action.loadList());
        });
    }
}))(Table);

export default Table;
