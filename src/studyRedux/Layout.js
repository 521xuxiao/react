import React from "react"

import { HashRouter, Route, Redirect, Switch } from "react-router-dom"

import Home from "./view/Home/Home"
import Study from "./view/Study/Study"
import NotFont from "./view/404/404"

import style from "./css/layout.module.css"

export default class Layout extends React.Component {

    state = {
        liList: [{label: '首页', id: 1}, {label: '学习页', id: 2}]
    }

    handleClick(index) {
        switch (index) {
            case 0:
                this.props.history.push("/home")
                break;
            case 1:
                this.props.history.push("/study")
                break;
        }
    }

    render() {
        return (
            <div>

                <ul className={style.ul1}>
                    { this.state.liList.map( (item, index)  => {
                        return (
                            <li key={item.id} className={style.li1} onClick={ () => this.handleClick(index) }>{item.label}</li>
                        )
                    })}
                </ul>

                <HashRouter>
                    <Switch>
                        <Route path="/home" component={ Home }></Route>
                        <Route path="/study" component={ Study }></Route>

                        <Redirect from="/" to="/home" exact></Redirect>

                        <Route component={ NotFont }></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
