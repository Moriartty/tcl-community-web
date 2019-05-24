import action from 'actions/care_electron_card';
import { connect } from 'react-redux';
// import Toolbar from './Toolbar';
import Table from './Table';
import TestTable from './TestTable'

class Care_Electron_Card extends React.Component {
    componentWillMount () {
        this.props.loadList();
    }
    render () {
        return (
            <div>
                {/* <Toolbar/> */}
                {/*<Table/>*/}
                <TestTable/>
            </div>
        );
    }
}

Care_Electron_Card = connect(null, dispatch => ({
    loadList () {
        dispatch(action.loadList());
    }
}))(Care_Electron_Card);

module.exports = Care_Electron_Card;
