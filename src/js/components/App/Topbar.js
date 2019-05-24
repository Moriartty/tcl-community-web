import { connect } from 'react-redux';
import action from 'actions/app';
import { Layout, Row, Col, Divider } from 'antd';
import TopbarMenu from './TopbarMenu';
import LocaleToggle from 'components/LocaleToggle';
import { FormattedMessage, injectIntl } from 'react-intl';
const { Header } = Layout;
import PotentialError from 'components/PotentialError';

class Topbar extends React.Component {
    render () {
        const { menuData, onMenuChange,locale,activeTab } = this.props;
        return (
            <PotentialError>
                <Header className="topbar">
                    <Row style={{ 'width': '100%' }}>
                        <Col className="header-left" xs={12} md={10} xl={7}>
                            <div className="brand">
                                <img src={locale=='zh-CN'?APP_LOGO_ZH:APP_LOGO_EN} style={{ height: 35, marginRight: 5 }}/>
                                {/* <FormattedMessage id={'app_name'} tagName={'b'}/> */}
                            </div>
                        </Col>
                        <Col className="header-right" xs={12} md={14} xl={17}>
                            {/*<TopbarMenu menuData={menuData} onChange={onMenuChange} activeTab={activeTab}/>*/}
                            <Divider type={'vertical'} style={{ height: '30px' }}/>
                            <div className={'header-tools'}>
                                <LocaleToggle/>
                            </div>
                        </Col>
                    </Row>
                </Header>
            </PotentialError>
        );
    }
}

Topbar = connect(state => {
    const { menuData ,locale,activeTab} = state.app;
    return { menuData ,locale,activeTab};
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
    }
}))(Topbar);

export default Topbar;
