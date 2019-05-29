import { connect } from 'react-redux';
import action from 'actions/app';
import { Layout, Row, Col, Divider,Icon,Modal,Dropdown,Menu,Avatar,Badge } from 'antd';
import TopbarMenu from './TopbarMenu';
import LocaleToggle from 'components/LocaleToggle';
import { FormattedMessage, injectIntl } from 'react-intl';
const { Header } = Layout;
import PotentialError from 'components/PotentialError';
import defaultAvatar from 'img/logo.svg';
import screenfull from 'screenfull';
import { isAuthenticated } from '../../utils/Session'


class Topbar extends React.Component {
    state = {
        icon: 'arrows-alt',
        count: 100,
        visible: false
    };
    componentDidMount () {
        screenfull.onchange(() => {
            this.setState({
                icon: screenfull.isFullscreen ? 'shrink' : 'arrows-alt'
            })
        })
    }
    componentWillUnmount () {
        screenfull.off('change')
    }
    screenfullToggle = () => {
        if (screenfull.enabled) {
            screenfull.toggle()
        }
    };

    render () {
        const { menuData, onMenuChange,locale,activeTab,userInfo,isLogin,onNav,onLogout } = this.props;
        const { visible,icon } = this.state;

        const menu = (
            <Menu className='menu'>
                <Menu.ItemGroup title='用户中心' className='menu-group'>
                    <Menu.Item>你好 - {isAuthenticated()}</Menu.Item>
                    <Menu.Item onClick={onNav.bind(this, 'profile')}>个人信息</Menu.Item>
                    {/*<Menu.Item><span>切换系统</span></Menu.Item>*/}
                    <Menu.Item><span onClick={onLogout}>退出登录</span></Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title='设置中心' className='menu-group'>
                    <Menu.Item>个人设置</Menu.Item>
                    <Menu.Item>系统设置</Menu.Item>
                </Menu.ItemGroup>
            </Menu>
        )
        const login = (
            <Dropdown overlay={menu}>
                <Avatar onClick={() => this.setState({visible: true})} src={userInfo.avatar||defaultAvatar} alt=""/>
            </Dropdown>
        )
        const notLogin = (
            <div>
                {/*<Link to={{pathname: '/login', state: {from: location}}} style={{color: 'rgba(0, 0, 0, 0.65)'}}>登录</Link>&nbsp;*/}
                <Avatar src={userInfo.avatar || defaultAvatar} alt=""/>
            </div>
        )

        return (
            <PotentialError>
                <Header className="topbar">
                    <Row style={{ 'width': '100%' }}>
                        <Col className="header-left" xs={12} md={10} xl={7}>
                            <div className={'header-tools'}>
                                <LocaleToggle/>
                            </div>
                        </Col>
                        <Col className="header-right" xs={12} md={14} xl={17}>

                            <div style={{lineHeight: '50px', float: 'right'}}>
                                <ul className='header-ul'>
                                    <li><Icon type={icon} onClick={this.screenfullToggle}/></li>
                                    <li onClick={() => this.setState({count: 0})}>
                                        <Badge count={10} overflowCount={99} style={{marginRight: -17}}>
                                            <Icon type="notification"/>
                                        </Badge>
                                    </li>
                                    <li>
                                        {isLogin ? login : notLogin}
                                    </li>
                                </ul>
                            </div>
                            <Modal
                                footer={null} closable={false}
                                visible={visible}
                                wrapClassName="vertical-center-modal"
                                onCancel={() => this.setState({visible: false})}>
                                <img src={userInfo.avatar || defaultAvatar} alt="" width='100%'/>
                            </Modal>

                        </Col>
                    </Row>
                </Header>
            </PotentialError>
        );
    }
}

Topbar = connect(state => {
    const { menuData ,locale,activeTab,userInfo,isLogin} = state.app;
    return { menuData ,locale,activeTab,userInfo,isLogin};
}, dispatch => ({
    /**
     * 切换侧边栏菜单
     * @param item
     */
    onMenuChange (item,activeTab) {
        // 如果是链接则直接跳转
        if (!(item.list && item.list.length)) {
            dispatch(action.loadTabPage(item.module));
        } else {
            dispatch({ type: 'APP_SET_SIDEBAR_MENU', data: item.list || [] });
            if(activeTab)
                dispatch(action.loadTabPage(activeTab));
            else
                // 默认加载该目录下第一个页面
                //tBase暂时这么处理！
                if(item.id==7)
                    dispatch(action.loadTabPage(item.list[2].list[0].module));
                else
                    dispatch(action.loadTabPage(item.list[0].module));
        }
    },
    /**
     * 导航菜单页面
     * @param module
     */
    onNav (module) {
        dispatch(action.loadTabPage(module));
    },
    /**
     * 退出
     */
    onLogout () {
        dispatch(action.logout()).then(() => {
            location.href = 'login.html';
        });
    }
}))(Topbar);

export default Topbar;
