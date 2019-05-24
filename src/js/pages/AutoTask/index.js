import { connect } from 'react-redux';
import action from 'actions/autoTask';
// import Table from './Table';
// import SearchModal from './SearchModal';
// import EditModal from './EditModal';
import Toolbar from './Toolbar';

class AutoTask extends React.Component {
    render () {
        return (
            <div>
                <Toolbar/>
                {/* <SearchModal/> */}
                {/* <EditModal/> */}
                {/* <Table/> */}
            </div>
        );
    }
}

AutoTask = connect(null, dispatch => ({
    loadList () {
        dispatch(action.loadList());
    }
}))(AutoTask);

module.exports = AutoTask;
