import React, { Component } from 'react';
import { Tabs } from 'antd';
import mobileStyle from '../../../css/mobile.scss';

const TabPane = Tabs.TabPane;

export default class MHeader extends Component {
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <div className={mobileStyle.logo}>
                        <img src={require('../../../images/logo.png')} />
                        <span>ReactNews</span>
                    </div>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="头条" key="1">头条</TabPane>
                        <TabPane tab="社会" key="2">社会</TabPane>
                        <TabPane tab="国内" key="3">国内</TabPane>
                        <TabPane tab="国际" key="4">国际</TabPane>
                        <TabPane tab="娱乐" key="5">娱乐</TabPane>
                        <TabPane tab="体育" key="6">体育</TabPane>
                        <TabPane tab="科技" key="7">科技</TabPane>
                        <TabPane tab="时尚" key="8">时尚</TabPane>
                    </Tabs>
                </header>
            </div>
        );
    }
}