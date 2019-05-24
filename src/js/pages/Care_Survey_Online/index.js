import action from 'actions/care_survey_online';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';

class Care_Survey_Online extends React.Component {
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

Care_Survey_Online = connect(null, dispatch => ({
    loadList () {
        dispatch(action.loadList());
    }
}))(Care_Survey_Online);

module.exports = Care_Survey_Online;
