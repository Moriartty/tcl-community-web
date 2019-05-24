import { Button } from 'antd';

class CircleBtn extends React.PureComponent {
    render () {
        const { title, icon, onClick } = this.props;
        return (
            <Button
                title={title}
                shape="circle"
                icon={icon}
                size="small"
                onClick={onClick}
                className="margin-left-sm"/>
        );
    }
}

export default CircleBtn;
