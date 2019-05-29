import React from 'react';
import { Radio,Dropdown,Menu,Icon } from 'antd';
import action from 'actions/app';
import { connect } from 'react-redux';

const LanguageMap = {
    'en-US':'English',
    'zh-CN':'中文'
};

class LocaleToggle extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
        const curLocale = this.props.locale;
        const menu = (
            <Menu onClick={(item)=>this.props.changeLocale(item.key)}>
                <Menu.Item key={'en-US'}><a>{LanguageMap['en-US']}</a></Menu.Item>
                <Menu.Item key={'zh-CN'}><a>{LanguageMap['zh-CN']}</a></Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    {LanguageMap[curLocale]} <Icon type="down" />
                </a>
            </Dropdown>

        );
    }
}

LocaleToggle = connect(state => {
    const { locale } = state.app;
    return { locale };
}, dispatch => ({
    changeLocale (key) {
        const localeValue = key;
        dispatch(action.toggleLocale(localeValue));
    }
}))(LocaleToggle);

export default LocaleToggle;
