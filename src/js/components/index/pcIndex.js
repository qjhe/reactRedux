import React, { Component } from "react";
import PcHeader from '../header/pcHeader';
import PCFooter from '../footer/pcFooter';
import indexCss from '../../../css/pc.scss';

export default class PcIndex extends Component {
    render() {
        return (
            <div>
                <PcHeader></PcHeader>
                <PCFooter></PCFooter>
            </div>
        );
    }
}