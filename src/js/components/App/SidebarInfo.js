import { connect } from 'react-redux';
import { Avatar } from 'antd';
import defaultAvatar from 'img/logo.svg';
import appAction from 'actions/app';
import Icon from 'components/Icon';

class SidebarInfo extends React.Component {
    render () {
        const { info, onNav, onLogout,locale } = this.props;

        return (
            <div className="sidebar-info">
                {/*<a onClick={onNav.bind(this, 'avatar')} className="hd" title="修改头像">*/}
                    {/*/!* <Avatar src={info.avatar || defaultAvatar}/> *!/*/}
                    {/*/!*<Avatar src={defaultAvatar}/>*!/*/}
                    {/*<Avatar style={{ backgroundColor: '#40a9ff' }} icon="user" size={'large'} />*/}
                {/*</a>*/}
                {/*<div className="bd">*/}
                    {/*<small>{info.no}</small>*/}
                    {/*<div className="text-lg margin-v-sm">{info.name}</div>*/}
                    {/*<ul className="unstyled">*/}
                        {/*<li><a title="消息通知" onClick={onNav.bind(this, 'message')}><Icon type="mail"/></a></li>*/}
                        {/*<li><a title="我的信息" onClick={onNav.bind(this, 'profile')}><Icon type="user"/></a></li>*/}
                        {/*<li><a title="修改密码" onClick={onNav.bind(this, 'password')}><Icon type="key"/></a></li>*/}
                        {/*<li><a title="退出登录" onClick={onLogout}><Icon type="logout"/></a></li>*/}
                    {/*</ul>*/}
                {/*</div>*/}
                <img src={locale=='zh-CN'?APP_LOGO_ZH:APP_LOGO_EN} style={{ height: 35, marginRight: 5 }}/>
            </div>
        );
    }
}

SidebarInfo = connect(state => {
    const { userInfo,locale } = state.app;
    return { info: userInfo,locale };
}, dispatch => ({
    /**
     * 导航菜单页面
     * @param module
     */
    onNav (module) {
        dispatch(appAction.loadTabPage(module));
    },
    /**
     * 退出
     */
    onLogout () {
        dispatch(appAction.logout()).then(() => {
            location.href = 'login.html';
        });
    }
}))(SidebarInfo);

export default SidebarInfo;
