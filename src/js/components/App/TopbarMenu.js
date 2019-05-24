import { Menu } from 'antd';
import { FormattedMessage } from 'react-intl';

class TopbarMenu extends React.Component {
    constructor(props){
        super(props);
    }
    handleClick = (e) => {
        const { menuData, onChange } = this.props;
        const item = menuData.find(m => m.no === e.key);
        onChange(item);
    };
    simulateClick = (key,activeTab) => {
        const { menuData, onChange } = this.props;
        const item = menuData.find(m => m.no === key);
        onChange(item,activeTab);
    }
    componentWillMount(){
        this.initData(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.initData(nextProps);
    }
    //这里改用此生命周期而不用pureComponent
    shouldComponentUpdate(nextProps){
        const {menuData,activeTab} = nextProps;
        return menuData && activeTab &&
            ((JSON.stringify(menuData)!==JSON.stringify(this.props.menuData))
                ||JSON.stringify(activeTab)!==JSON.stringify(this.props.activeTab));
    }
    initData = (nextProps) => {
        const {menuData,activeTab} = nextProps;
        if(menuData&&activeTab){
            this.result = menuData.find((o)=>{
                return o.name.indexOf(activeTab.split('/')[0])>-1;
            })
            this.simulateClick(this.result.no,activeTab);
        }
    }

    render () {
        const {menuData,activeTab} = this.props;
        return menuData &&activeTab&& (
            <Menu
                mode="horizontal"
                defaultSelectedKeys={[this.result.no]}
                // defaultSelectedKeys={['>0']}
                onClick={this.handleClick}
                selectedKeys={[this.result.no]}
            >
                {
                    menuData.map((item) => {
                        return <Menu.Item key={item.no}><FormattedMessage id={item.name}/></Menu.Item>;
                    })
                }
            </Menu>
        );
    }
}

export default TopbarMenu;
