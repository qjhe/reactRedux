import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Icon, Button } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as types from '../../../actions';
import mStyle from '../../../css/mobile.scss';

class MFooter extends Component {
    render() {
        const { counter, user, increment, decrement } = this.props;
        let query = {
          id: 3,
          name: 'Lucy',
          age: 29,  
        };
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className={mStyle.footer}>
                        &copy;&nbsp;2018 ReactNews. All Rights Reserved.
                        <p>数值:{counter} - { user }</p>
                        <p><Button onClick={() => increment()}>incr</Button>&nbsp;&nbsp;<Button onClick={() => decrement()}>decr</Button></p>
                        <p><Link to={{pathname:"/About", state:query}}>about</Link></p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(types, dispatch);
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        user: state.user,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MFooter);