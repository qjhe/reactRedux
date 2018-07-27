import React, { Component } from "react";
import indexCss from '../../css/style.scss';

export default class Index extends Component{
    render() {
        let query = this.props.location.state;
        console.dir(query);
        return(
            <div className={indexCss["body-wrapper"]}>
                <div className={indexCss.body}>
                    <span>关于我们</span>
                    <span className={indexCss.name}>name</span>
                </div>
                <div className="title">title标题</div>
            </div>
        );
    }
}