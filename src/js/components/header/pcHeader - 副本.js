import React, { Component } from 'react';
import { DatePicker, message, Cascader } from 'antd';

const options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }];

export default class PcHeader extends Component{
    constructor() {
        super();
        this.state = {
            date: '',
        };
    }
    handleChange(date) {
        message.info(`您选择的日期是：${date.toString()}`);
        this.setState({ date });
    }
    onChange(value) {
        console.log(value);
    }
    render() {
        return(
            <div>
                <p>PC header</p>
                <DatePicker onChange={value => this.handleChange(value)} />
                <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
                <Cascader options={options} onChange={this.onChange} placeholder="请选择地区" />
            </div>
        );
    }
}