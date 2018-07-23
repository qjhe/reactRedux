import React, { Component } from "react";
import MediaQuery from 'react-responsive';
import PcIndex from '../../js/components/index/pcIndex';
import MIndex from '../../js/components/index/mIndex';

export default class Index extends Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-width: 1000px)">
                    <PcIndex></PcIndex>
                </MediaQuery>
                <MediaQuery query="(max-width: 1000px)">
                    <MIndex></MIndex>
                </MediaQuery>
            </div>
        );
    }
}