import React from 'react';
import { Radio } from 'antd';
import action from 'actions/app';
import { connect } from 'react-redux';

class LocaleToggle extends React.Component {
    render () {
        const curLocale = this.props.locale;
        return (
            <Radio.Group size={'small'} onChange={this.props.changeLocale} defaultValue={curLocale}>
                <Radio.Button key="en" value='en-US'>English</Radio.Button>
                <Radio.Button key="cn" value='zh-CN'>中文</Radio.Button>
            </Radio.Group>
        );
    }
}

LocaleToggle = connect(state => {
    const { locale } = state.app;
    return { locale };
}, dispatch => ({
    changeLocale (e) {
        const localeValue = e.target.value;
        dispatch(action.toggleLocale(localeValue));
    }
}))(LocaleToggle);

export default LocaleToggle;
