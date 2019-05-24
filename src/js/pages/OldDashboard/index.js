import { Row, Col,Button,Card } from 'antd';
import { connect } from 'react-redux';
import action from 'actions/dashboard';
import AppList from './AppList';
import 'less/dashboard.less';
import DetailPage from './DetailPage';


class Dashboard extends React.Component {

    componentWillMount () {
        this.props.init();
    }

    render () {
        const {subPageShow:show,selectedProduct,handleClick,onClose} = this.props;
        return (
            <React.Fragment>
                <AppList onClick={handleClick}/>
                {
                    //这里有个小问题，如果仅仅是一开始就渲染好，再根据this.state.show来控制显示与否，
                    //会出现图表width为100px的问题，这是因为Subpage的render树并没有实装，导致100%无法
                    //识别，被当做100px，所以还是需要根据state来控制渲染与否
                    show? <DetailPage show={show} selectedProduct={selectedProduct} onClose={onClose}/> : ''
                }
            </React.Fragment>
        );
    }
}
Dashboard = connect(state=>{
    const {subPageShow,selectedProduct} = state['dashboard'];
    return {subPageShow,selectedProduct};
}, dispatch => ({
    init () {
        dispatch(action.loadProducts());
    },
    handleClick(prod){
        dispatch({type:'DASHBOARD_SUBPAGE_SHOW',subPageShow:true,selectedProduct:prod});
    },
    onClose() {
        dispatch({type:'DASHBOARD_SUBPAGE_SHOW',subPageShow:false,selectedProduct:''});
    }

}))(Dashboard);

module.exports = Dashboard;