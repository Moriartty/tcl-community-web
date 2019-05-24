import { connect } from 'react-redux';
import action from 'actions/user';
import ExModal from 'components/ExModal';
import { Avatar, Tag, Button, Popconfirm, message } from 'antd';
import { FormattedMessage } from 'react-intl';

import defaultAvatar from 'img/avatar-default.png';

class DetailModal extends React.Component {
    render () {
        const { operations, userInfoData: info, userInfoShow, onEdit, onDismiss, onPasswordReset, onClose } = this.props;
        return (
            <ExModal className="user-info" visible={userInfoShow} footer={null} onCancel={onClose}>
                <div className="hd">
                    <Avatar shape="square" src={defaultAvatar}/>
                    <div className="hd-content">
                        <strong className="text-xl">{info.name}</strong>
                        <Tag color="cyan" style={{ marginLeft: 8 }}>{info.role}</Tag>
                        <div>手机：<span>{info.phone}</span> </div>
                        <div>所属组织：<span>{info.org}</span> </div>
                    </div>
                </div>
                <div className="bd">
                    <ul className="unstyled detail-list">
                        <li><label>邮箱：</label>{info.email}</li>
                        {/* <li><label>学历：</label>{info.education}</li> */}
                        {/* <li><label>毕业院校：</label>{info.school}</li> */}
                        <li><label>生日：</label>{info.birthday}</li>
                        <li><label>籍贯：</label>{info.nativePlace}</li>
                        <li><label>上次登录时间：</label>{info.lastLogin}</li>
                        <li><label>创建时间：</label>{info.createTime}</li>
                    </ul>
                    <div className="margin-top">
                        {
                            operations.include('UPDATE') && <Button onClick={onEdit.bind(this, info)} type="primary" icon="edit"><FormattedMessage id={'common_operation_modify'}/></Button>
                        }
                        {
                            operations.include('RESET') && (
                                <Popconfirm title="确定要重置该用户密码吗？（重置成功初始密码为：123456）" onConfirm={onPasswordReset.bind(this, info.id)}>
                                    <Button icon="lock" className="margin-left"><FormattedMessage id={'user_operation_reset'}/></Button>
                                </Popconfirm>
                            )
                        }
                        {
                            operations.include('LEAVE') && (
                                <Popconfirm title="确定要把该用户设为离职吗？" onConfirm={onDismiss.bind(this, info.id, info.orgId)}>
                                    <Button type="danger" icon="warning" className="margin-left"><FormattedMessage id={'user_operation_leave'}/></Button>
                                </Popconfirm>
                            )
                        }
                    </div>
                </div>
            </ExModal>
        );
    }
}

DetailModal = connect(state => {
    const operations = state.app.menuObj['systemConfig/user'].functions;
    const { userInfoData, userInfoShow } = state.user;
    return { operations, userInfoData, userInfoShow };
}, dispatch => ({
    /**
     * 编辑
     * @param item
     */
    onEdit (item) {
        this.props.onClose();
        dispatch({ type: 'USER_EDIT', data: item });
    },
    /**
     * 设为离职
     * @param id
     * @param orgId
     */
    onDismiss (id, orgId) {
        this.props.onClose();
        dispatch(action.dismissUser(id)).then(() => {
            // 重新加载列表
            dispatch(action.selectOrg(orgId));
        });
    },
    /**
     * 密码重置
     * @param id
     */
    onPasswordReset (id) {
        dispatch(action.resetPassword(id)).then(() => {
            message.success('密码重置成功！');
        });
    },
    /**
     * 关闭
     */
    onClose () {
        dispatch({ type: 'USER_INFO_SHOW', show: false });
    }
}))(DetailModal);

export default DetailModal;
