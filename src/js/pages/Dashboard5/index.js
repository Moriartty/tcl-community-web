import {Button} from 'antd';
import {connect} from 'react-redux';
import DetailPage from './DetailPage';
import 'less/dashboard_5.less';

class Dashboard5 extends React.PureComponent {
    componentWillMount(){

    }
    render(){
        const {handleClick,subPageShow,onClose} = this.props;
        return (
            <React.Fragment>
                {
                    subPageShow?
                        <DetailPage show={subPageShow} onClose={onClose}/>
                        :
                        <Button type={'primary'} onClick={handleClick}> Click </Button>
                }
            </React.Fragment>
        )
    }
}

Dashboard5 = connect(state=>{
    const {subPageShow} = state['dashboard5'];
    return {subPageShow};
},dispatch=>({
    handleClick(){
        dispatch({type:'DASHBOARD5_SUBPAGE_SHOW',subPageShow:true});
    },
    onClose() {
        dispatch({type:'DASHBOARD5_SUBPAGE_SHOW',subPageShow:false});
    }
}))(Dashboard5);

module.exports = Dashboard5;