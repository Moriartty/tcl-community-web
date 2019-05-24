import action from 'actions/care_problem_report';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';

class Care_Problem_Report extends React.Component {
    componentWillMount () {
        this.props.loadList();
    }
    render () {
        return (
            <div>
                {/* <Toolbar/> */}
                <Table/>
            </div>
        );
    }
}

Care_Problem_Report = connect(null, dispatch => ({
    loadList () {
        dispatch(action.loadList());
    }
}))(Care_Problem_Report);

module.exports = Care_Problem_Report;
