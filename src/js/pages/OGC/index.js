import action from 'actions/ogc';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';
import Toolbar from 'components/App/Toolbar';
import SearchModal from './SearchModal';
import {Button} from "antd"

class OGC extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showSearchModal:false
        }
    }
    componentWillMount () {
        this.props.loadList();
    }
    render () {
        const {onRefresh,onSearch} = this.props;
        return (
            <div>
                <Toolbar onRefresh={onRefresh}>
                    <Button onClick={() => { this.setState({ showSearchModal: true }); }} icon={'search'}>查询</Button>
                </Toolbar>
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
    loadList () {
        dispatch(action.loadList());
    },
    onRefresh(){
        dispatch(action.loadList());
    },
    onSearch (params) {
        dispatch({ type: 'OGC_SEARCHPARAM_CHANGE', params });
        dispatch(action.loadList(1));
    }
}))(OGC);

module.exports = OGC;
