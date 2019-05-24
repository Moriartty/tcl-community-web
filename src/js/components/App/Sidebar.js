import { connect } from 'react-redux';
import appAction from 'actions/app';
import { Layout, Menu, Icon } from 'antd';
import SidebarInfo from './SidebarInfo';
import SidebarDate from './SidebarDate';
import PotentialError from 'components/PotentialError';
import { FormattedMessage } from 'react-intl';
const { SubMenu } = Menu;
const { Sider } = Layout;

class Sidebar extends React.Component {
    state = {
        openKeys: [],
        tempOpenKeys: [],
        collapsed: false
    };
    componentWillMount(){
        const props = this.props;
        if(props.activeTab.indexOf('tBase')>-1){
            this.setState({openKeys:props.sidebarMenuData.map(o=>o.no)})
        }
    }

    componentWillReceiveProps (nextProps) {
        // if (nextProps.activeTab === 'home' && nextProps.sidebarMenuData !== this.props.sidebarMenuData) {
        //     this.setState({ openKeys: ['entry'] });
        // }
        if(nextProps.activeTab.indexOf('tBase')>-1 && nextProps.sidebarMenuData !== this.props.sidebarMenuData){
            this.setState({openKeys:nextProps.sidebarMenuData.map(o=>o.no)})
        }
    }

    onOpenChange = (openKeys) => {
        // 假设当前侧边栏最多只有一个一级菜单
        //默认submenu全部展开
        // const lastLevelIndex = openKeys.findIndex(key => key.length >= 4 && key.length < 6); // 假设一级菜单key值格式为：>\d{1}>\d{1,2}
        // if (lastLevelIndex >= 0 && openKeys.length > 1) {
        //     openKeys.splice(lastLevelIndex, 1);
        // }
        this.setState({ openKeys });
    };
    toggle = (e) => {
        // 当收缩存在展开的文件夹的侧边栏时，需要先关闭文件夹，展开时再打开
        let temp1 = []; let temp2 = [];
        if (!this.state.collapsed) {
            temp1 = [];
            temp2 = this.state.openKeys;
        } else {
            temp1 = this.state.tempOpenKeys;
            temp2 = [];
        }
        this.setState({
            openKeys: temp1,
            tempOpenKeys: temp2,
            collapsed: !this.state.collapsed
        });
    }

    /**
     * 渲染子菜单
     * @param item
     * @param level
     * @returns {XML}
     */
    renderItem (item, level) {
        if (item.list && item.list.length) {
            return (
                <SubMenu key={item.no} title={<span><Icon type="folder-open" /><span><FormattedMessage id={item.name}/></span></span>}>
                    {
                        item.list.map((subItem, index) => {
                            subItem.index = index;
                            return this.renderItem(subItem, level + 1);
                        })
                    }
                </SubMenu>
            );
        } else {
            return <Menu.Item key={item.module}><Icon type={item.icon} /><span data-key={item.module}><FormattedMessage id={item.name}/></span></Menu.Item>;
        }
    }

    render () {
        const { sidebarMenuData: menu, onClick,menuData } = this.props;
        // if (!menu.length) {
        //     return <Sider className="sidebar" width={0}></Sider>;
        // }
        return (
            <PotentialError>
                <Sider
                    className="sidebar"
                    width={250}
                    onCollapse={this.toggle}
                    collapsible
                    collapsed={this.state.collapsed}>
                    <SidebarInfo/>
                    <div className="menu-wrapper">
                        <Menu
                            mode="inline"
                            // theme={APP_EDITION=='jianjiao'?'light':'dark'}
                            // theme={'dark'}
                            openKeys={this.state.openKeys}
                            onOpenChange={this.onOpenChange}
                            selectable={false}
                            onClick={onClick}
                            inlineCollapsed={true}
                        >
                            {
                                menuData&&menuData.map((item, index) => {
                                    item.index = index;
                                    return this.renderItem(item, 1);
                                })
                            }
                        </Menu>
                    </div>
                    <SidebarDate/>
                </Sider>
            </PotentialError>
        );
    }
}

Sidebar = connect(state => {
    const { sidebarMenuData, activeTab,menuData } = state.app;
    return { sidebarMenuData, activeTab,menuData };
}, dispatch => ({
    /**
     * 点击菜单
     * @param e
     */
    onClick (e) {
        dispatch(appAction.loadTabPage(e.key));
    }
}))(Sidebar);

export default Sidebar;
