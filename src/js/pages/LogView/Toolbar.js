import { connect } from 'react-redux';
import SearchModal from './SearchModal';
import { Button } from 'antd';
import action from 'actions/logView';

class Toolbar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showSearch: false
        };
    }
    render () {
        const { onSearch } = this.props;
        return (
            <div className={'toolbar'}>
                <SearchModal show={this.state.showSearch} onSearch={onSearch} onClose={() => { this.setState({ showSearch: false }); }}/>
                <Button onClick={() => { this.setState({ showSearch: true }); }} icon={'search'}>查询</Button>
            </div>
        );
    }
}
Toolbar = connect(null, dispatch => ({
    onSearch (params) {
        dispatch({ type: 'LOGVIEW_SEARCHPARAMS_CHANGE', params });
        dispatch(action.loadList(1));
    }
}))(Toolbar);
export default Toolbar;
