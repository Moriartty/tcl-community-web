import { connect } from 'react-redux';
import SearchModal from './SearchModal';
import EditModal from './EditModal';
import { Button } from 'antd';
import action from 'actions/autoTask';

class Toolbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showSearchModal: false,
            showEditModal: false
        };
    }
    render () {
        const { onSearch } = this.props;
        return (
            <div className={'toolbar'}>
                {/* <SearchModal show={this.state.showSearchModal} onSearch={onSearch} onClose={() => { this.setState({ showSearchModal: false }); }}/> */}
                <Button onClick={() => { this.setState({ showSearchModal: true }); }} icon={'search'}>查询</Button>
                <Button onClick={() => { this.setState({ showEditModal: true }); }} icon={'plus'}>新建任务</Button>
            </div>
        );
    }
}
Toolbar = connect(null, dispatch => ({
    onSearch (params) {
        dispatch({ type: 'AUTOTASK_SEARCHPARAMS_CHANGE', params });
        dispatch(action.loadList(1));
    }
}))(Toolbar);
export default Toolbar;
