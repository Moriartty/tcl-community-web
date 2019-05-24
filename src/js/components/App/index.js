import PerformanceX from 'components/PerformanceX';
import PotentialError from 'components/PotentialError';
class App extends React.Component {
    render () {
        return (
            <div className="admin-app full-height">
                <PotentialError>{this.props.children}</PotentialError>
            </div>
        );
    }
}
App = PerformanceX(App);
export default App;
