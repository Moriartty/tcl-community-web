import {connect} from 'react-redux';
import TagsUnit from './TagsUnit';
import {Spin} from 'antd';
import action from 'actions/tags';
require('less/tags.less');

class TagsManagement extends React.Component{
    componentDidMount () {
        this.props.init();
    }
    render(){
        const {loading,data} = this.props;
        return (
            <div className='tagsContainer'>
                <Spin size={'large'} spinning={loading}>
                    {
                        data&&data.length>0&&data.map(o=>{
                            return <TagsUnit title={o.name} list={o.list} key={o.name}/>
                        })
                    }
                </Spin>
            </div>
        )
    }
}

TagsManagement = connect(state=>{
    const {loading,data} = state['tags'];
    return {loading,data};
},dispatch=>({
    init(){
        dispatch(action.loadAllTags());
    }
}))(TagsManagement);

module.exports = TagsManagement;
