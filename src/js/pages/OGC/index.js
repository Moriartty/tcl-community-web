import action from 'actions/ogc';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';
import Toolbar from 'components/App/Toolbar';
import SearchModal from './SearchModal';
import {Button} from "antd"
import EditModal from './EditModal';

class OGC extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showSearchModal:false
        }
    }
    componentWillMount () {
        this.props.init();
    }
    render () {
        const {onRefresh,onSearch} = this.props;
        return (
            <div>
                <Toolbar onRefresh={onRefresh}>
                    <Button onClick={() => { this.setState({ showSearchModal: true }); }} icon={'search'}>查询</Button>
                </Toolbar>
                <EditModal/>
                <SearchModal
                    show={this.state.showSearchModal}
                    onSearch={onSearch}
                    onClose={() => { this.setState({ showSearchModal: false }); }}/>
                <Table/>
            </div>
        );
    }
}

OGC = connect(null, dispatch => ({
    /**
     * page数据初始化加载
     */
    init () {
        dispatch(action.loadList());
    },
    /**
     * 点击刷新或操作
     */
    onRefresh(){
        dispatch(action.loadList());
    },
    /**
     * 查询
     * @param params
     */
    onSearch (params) {
        dispatch({ type: 'OGC_SEARCHPARAM_CHANGE', params });
        dispatch(action.loadList(1));
    }
}))(OGC);

module.exports = OGC;
