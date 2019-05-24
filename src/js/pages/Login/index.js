import { connect } from 'react-redux';
import action from 'actions/app';
import { Form, Icon, Input, Button, Checkbox, Tabs, Alert } from 'antd';
import ReactCanvasNest from 'components/react-canvas-nest';
import EvanYou from 'components/evan-you';
import headerIcon from 'img/bg2.png';
import { FormattedMessage, injectIntl } from 'react-intl';
import LocaleToggle from 'components/LocaleToggle';

import 'less/login';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const configs = {
    pointColor: '105,192,255 ',
    pointR: 5,
    pointOpacity: 0.4,
    lineColor: '105,192,255',
    count: '55',
    dist: '10000'
};

class Login extends React.Component {
    state = {
        showIncorrect: false,
        loading: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, data) => {
            if (!err) {
                this.setState({ loading: true });
                this.props.onLogin.call(this, data);
            }
        });
    };

    render () {
        const { getFieldDecorator } = this.props.form;
        const {locale} = this.props;
        const intl = this.props.intl;
        return (
            <div style={{ height: '100%' }}>
                <ReactCanvasNest config = {configs} style = {{ zIndex: -2 }}/>
                {/*<EvanYou/>*/}
                <div className="banner">
                    <div className="title">
                        <img src={locale=='zh-CN'?APP_LOGO_ZH:APP_LOGO_EN}/>
                        {/* <span className="appName"><FormattedMessage id="app_name"/></span> */}
                    </div>
                    <div className={'languageToggle'}>
                        <LocaleToggle/>
                    </div>
                </div>
                <div className="login">
                    <div>
                        <div className="title">
                            <img src={headerIcon}/>
                            <div className="split"></div>
                        </div>
                        <Form onSubmit={this.handleSubmit} className="main">
                            <Tabs defaultActiveKey="1" animated={false}>
                                <TabPane tab={<FormattedMessage id="login_index_msg1" />} key="1">
                                    <FormItem>
                                        {/* 这应该是个bug,getFieldDecorator的id必须设置为FormattedMessage的id才能找到对应字段 */}
                                        {getFieldDecorator('username', {
                                            rules: [{ required: true, message: <FormattedMessage id="login_index_msg2"/> }]
                                        })(
                                            <Input size="large"
                                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                placeholder={intl.formatMessage({ id: 'login_index_msg3' })} />
                                        )}
                                    </FormItem>
                                    <FormItem>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: <FormattedMessage id="login_index_msg4"/> }]
                                        })(
                                            <Input size="large"
                                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                onChange={() => { this.state.showIncorrect && this.setState({ showIncorrect: false }); }}
                                                type="password"
                                                placeholder={intl.formatMessage({ id: 'login_index_msg5' })} />
                                        )}
                                    </FormItem>
                                    {this.state.showIncorrect && <Alert message={<FormattedMessage id={'login_index_msg6'}/>} type="error" showIcon />}
                                </TabPane>
                            </Tabs>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true
                                })(
                                    <Checkbox><FormattedMessage id={'login_index_msg7'}/></Checkbox>
                                )}
                            </FormItem>
                            <div>
                                <Button size="large" type="primary" htmlType="submit" icon="login" loading={this.state.loading}>
                                    <FormattedMessage id={'login_index_msg8'}/>
                                </Button>
                            </div>
                        </Form>
                    </div>
                    <div className="login-copyright">
                        <span><FormattedMessage id={'copyright'}/> © 2018 All Rights Reserved <FormattedMessage id={'app_name'}/></span>
                    </div>
                </div>
            </div>
        );
    }
}

Login = Form.create()(Login);

Login = connect(state=>{
    const {locale} = state.app;
    return {locale}
}, dispatch => ({
    /**
     * 登录
     * @param data
     */
    onLogin (data) {
        // 发送请求
        dispatch(action.login(data.username, data.password, data.remember)).then(data => {
            // 跳转
            location.href = 'index.html';
        }).catch(msg => {
            this.setState({ loading: false, showIncorrect: true });
        });
    }
}))(Login);

module.exports = injectIntl(Login);
