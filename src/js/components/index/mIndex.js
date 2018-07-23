import React, { Component } from "react";
import MHeader from '../header/mHeader';
import MFooter from '../footer/mFooter';
import indexCss from '../../../css/mobile.scss';

export default class MIndex extends Component {
    render() {
        return (
            <div>
                <MHeader></MHeader>
                <MFooter></MFooter>
            </div>
        );
    }
}