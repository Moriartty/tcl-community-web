import {Button} from 'antd';

class Toolbar extends React.Component{
    render(){
        const {onRefresh,children,bodyStyle} = this.props;
        return (
            <div className={'toolbar'}>
                <div className={'left'} style={bodyStyle}>
                    {children}
                </div>
                <div className={'right'}>
                    <Button type={'primary'} onClick={onRefresh} icon={'reload'}>刷新</Button>
                </div>
            </div>
        )
    }
}
export default Toolbar;