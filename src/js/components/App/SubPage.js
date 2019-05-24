import { Button, Spin } from 'antd';

class SubPage extends React.Component {
    //正常来说只需要在componentWillReceiveProps中进行处理就行，但dashboard页面的subpage由于图表的原因
    //是采用每次都重新加载和卸载的方式，所以一般不会进入更新的生命周期，只好在初始化的生命周期中作处理
    componentWillMount(){
        if (this.props.show) {
            this.handleShow();
        }
    }
    componentWillReceiveProps (nextProps) {
        if (nextProps.show && !this.props.show) {
            this.handleShow();
        } else if (!nextProps.show && this.props.show) {
            this.handleHide();
        }
    }
    componentWillUnmount(){
        this.handleHide();
    }

    handleShow = () => {
        // open
        const ele = document.querySelector('.ant-tabs-tabpane-active')||document.querySelector('.main-page');
        // 滚动条回到顶部并隐藏
        this.scrollTop = ele.scrollTop; // 保存初始位置
        ele.scrollTop = 0;

        ele.style.overflow = 'hidden';
    }
    handleHide = () => {
        const ele = document.querySelector('.ant-tabs-tabpane-active')||document.querySelector('.main-page');
        if(ele){
            ele.scrollTop = this.scrollTop; // 还原
            ele.style.overflow = '';
        }
    }

    render () {
        const { show, title, loading, children, bodyStyle, onClose, header } = this.props;
        return (
            <div className="sub-page display-flex flex-column" style={{display: show ? '' : 'none' }}>
                <div className="hd">
                    <div className="actions">
                        <Button type={'primary'} onClick={onClose} icon="rollback">返回</Button>
                    </div>
                    <span className="text-lg">{title}</span>
                    {header}
                </div>
                <div className="flex-grow-1 display-flex" style={{overflow:'auto'}}>
                    <div className="bd flex-grow-1" style={bodyStyle}>
                        {
                            loading ? (
                                <div style={{ textAlign: 'center', paddingTop: 100 }}><Spin/></div>
                            ) : children
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SubPage;