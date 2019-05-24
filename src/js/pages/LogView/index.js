import { connect } from 'react-redux';
import action from 'actions/logView';
import Table from './Table';
import Toolbar from './Toolbar';
class LogView extends React.Component {
    componentWillMount () {
        this.props.init();
    }
    render () {
        return (
            <React.Fragment>
                {/* <Toolbar/> */}
                <Table/>
            </React.Fragment>
        );
    }
}
LogView = connect(null, dispatch => ({
    init () {
        dispatch(action.loadList());
    }
}))(LogView);
module.exports = LogView;
