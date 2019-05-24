import Toolbar from '../Dashboard/Toolbar';
import {connect} from 'react-redux';

class Retention extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="head-toolbar display-flex flex-column">
                <Toolbar/>
            </div>
        )
    }
}
Retention = connect(state=>{

},null)(Retention);

module.exports = Retention;
