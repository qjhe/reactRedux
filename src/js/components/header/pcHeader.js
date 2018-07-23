import React, { Component } from 'react';
import { Row, Col, Menu, Icon, Tabs, message, Form, Input, Button, Checkbox, Modal, } from 'antd';
import pcStyle from '../../../css/pc.scss';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class PcHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userId: 0,
            logo: require("../../../images/logo.png"),
        };
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
        if (e.key = "register") {
            this.setModalVisible(true);
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                fetch(`http://newsapi.gugujiankong.com/Handler.ashx?ation=register&r_userName=${values.r_userName}&r_password=${values.r_password}&r_confirmPassword=${values.r_confirmPassword}`,{
                    method: 'GET',
                })
                .then(res => {
                    if(res.ok) {
                        this.setState({
                            userNickName: values.r_userName,
                            userId: values.r_password,
                        });
                        message.success('请求成功！');
                        this.setModalVisible(false);
                    }
                });
            }
        });
    }
    setModalVisible(flg) {
        this.setState({
            modalVisible: flg
        });
    }
    render() {
        let { getFieldProps } = this.props.form;
        const userShow = this.state.hasLogined
            ?
            <Menu.Item key="logout" className="pcStyle.register">
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link target="_blank">
                    <Button type="dashed" htmlType="button">个人中心</Button>
                    &nbsp;&nbsp;
                    <Button type="ghost" htmlType="button">退出</Button>
                </Link>
            </Menu.Item>
            :
            <Menu.Item key="register" className="pcStyle.register">
                <Icon type="appstore" />注册/登录
            </Menu.Item>;
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className={pcStyle.logo}>
                            {/* <img src={require("../../../images/logo.png")} alt="log" /> */}
                            <img src={this.state.logo} />
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore" />头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type="appstore" />社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type="appstore" />国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type="appstore" />国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type="appstore" />娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type="appstore" />体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type="appstore" />科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type="appstore" />时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>

                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)} okText="关闭">
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form horizontal="true" onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入密码" {...getFieldProps('r_password')} />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type="password" placeholder="请再次输入密码" {...getFieldProps('r_confirmPassword')} />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        );
    }
}

export default PcHeader = Form.create({})(PcHeader);