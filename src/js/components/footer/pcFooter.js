import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import pcStyle from '../../../css/pc.scss';

class PCFooter extends Component {
    render() {
        const { counter } = this.props;
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className={pcStyle.footer}>
                        &copy;&nbsp;2018 ReactNews. All Rights Reserved.
                        <p>值：{ counter }</p>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
};

export default connect(mapStateToProps)(PCFooter);