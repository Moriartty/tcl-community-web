import {Card,Divider,Tooltip,Icon,Skeleton} from 'antd';
import React from "react"
require('less/theme/card.less');

class ExCard extends React.Component{
    render(){
        const {children,customizeTitle,title,tooltip,actions,height,className,headStyle} = this.props;
        const bodyHeight = actions&&actions.length>0?height-98:height-72;
        return (
            <Card
                className={'card '+className}
                style={{height:height}}
                headStyle={headStyle}
                title={
                    customizeTitle?customizeTitle:
                    <div>
                        <Skeleton loading={!title} paragraph={false} title={{width:100}}>
                            {title}
                            {
                                tooltip?
                                    <React.Fragment>
                                        <Divider type={'vertical'}/>
                                        <Tooltip placement={'top'} title={tooltip}>
                                            <Icon type="question-circle" />
                                        </Tooltip>
                                    </React.Fragment>
                                    :''
                            }
                        </Skeleton>
                    </div>}
                bodyStyle={{height:bodyHeight}}
                hoverable={true}
                actions={actions}
            >
                {children}
            </Card>
        )
    }
}

export default ExCard;