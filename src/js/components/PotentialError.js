/**
 * 异常边界处理，暂时在界面中打印出错误信息，以便调试
 */
class PotentialError extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {error:false};
    }
    componentDidCatch(error,info){
        this.setState({error,info});
    }
    render(){
        if(this.state.error){
            return (
                <div className={'potential-error-content'}>
                    <h1 style={{color:'red'}}>Error: {this.state.error.toString()}</h1>
                    {this.state.info &&
                    this.state.info.componentStack.split("\n").map(i => {
                        return (
                            <div key={i}>
                                {i}
                            </div>
                        );
                    })}
                </div>
            )
        }
        return this.props.children;
    }
}
export default PotentialError;