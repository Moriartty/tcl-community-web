import {connect} from 'react-redux';
import {Card,Icon} from 'antd';
const {Meta} = Card;

class AppList extends React.PureComponent{
    render(){
        const {productList:list,onClick} = this.props;
        return (
            <div className={'appListContainer'}>
                {
                    list.map(o=>{
                        return (
                            <Card
                                style={{ width: 250,margin:20 }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                // cover={<img alt="example" src={require('img/apk.png')} />}
                                actions={[<Icon type="area-chart" onClick={this.props.onClick.bind(this,o)} />]}
                                key={o}
                            >
                                <Meta
                                    title={o}
                                    // description="This is the description"
                                />
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}
AppList = connect(state=>{
    const {productList} = state['dashboard'];
    return {productList};
},null)(AppList);

export default AppList;