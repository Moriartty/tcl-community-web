import action from 'actions/care_suggestion';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';

class Care_Suggestion extends React.Component {
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

Care_Suggestion = connect(null, dispatch => ({
    loadList () {
        dispatch(action.loadList());
    }
}))(Care_Suggestion);

module.exports = Care_Suggestion;
