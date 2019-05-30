import {connect} from 'react-redux';
import {Divider,Tag,Input,Button} from 'antd';

class TagsUnit extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            searchedItems:[],
            editState:false
        }
    }
    itemSearch = (target) => {

        const items = [];
        this.props.list.forEach(o=>{
            o.tagName.indexOf(target)>-1&&items.push(o.id);
        });
        this.setState({searchedItems:items});
    };
    onClose = (e) => {
        console.log(e);
    }
    render(){
        const {title,list} = this.props;
        return (
            <div className='tagsUnit'>
                <div className='tagsUnit_header'>
                    <span className='tagsUnit_title'>{title}</span>
                    <div className='tagsUnit_actions'>
                        <Input.Search
                            placeholder="input search text"
                            onSearch={this.itemSearch}
                            style={{ width: 200 }}
                        />
                        <Button type="primary" shape="circle" icon="edit" style={{marginLeft:'10px'}} onClick={()=>this.setState({editState:true})}/>
                    </div>
                </div>
                <Divider type={'horizontal'}/>
                <div className='tagsUnit_content'>
                    {
                        list&&list.map(o=>{
                            return (
                                <Tag
                                    key={o.id}
                                    closable={this.state.editState}
                                    onClose={()=>{this.onClose(o.id);return false}}
                                    color={this.state.searchedItems.some(item=>item==o.id)?'#108ee9':''}
                                >
                                    <span style={{fontSize:'16px',lineHeight:'30px'}}>{o.tagName}</span>
                                </Tag>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TagsUnit;
