import React, { Component } from 'react';
import mobileStyle from '../../../css/mobile.scss';

export default class MHeader extends Component{
    render() {
        return(
            <div id="mobileheader">
                <header>
                    <div className={mobileStyle.logo}>
                        <img src={require('../../../images/logo.png')} />
                        <span>ReactNews</span>
                    </div>
                </header>
            </div>
        );
    }
}