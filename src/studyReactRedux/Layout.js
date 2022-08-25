import React, { useState } from "react";

import { Route, Redirect, Switch } from "react-router-dom"

import Home from "./view/Home"
import List from "./view/List"
import News from "./view/News"

import { connect } from "react-redux"

import style from "./css/layout.module.css"

function Layout(props) {

    const [list] = useState(["首页", "新闻业", "列表页"])

    const handleClick = (index) => {
        props.changeCurrentIndex(index)
        switch(index) {
            case 0:
                props.history.push("/home")
                break;
            case 1:
                props.history.push("/news")
                break;
            case 2:
                props.history.push("/list")
                break;
            default:
                break;
        }
    }


    return (
        <div>
            <ul className={style.ul1}>
                { list.map( (item, index) => {
                    return(
                        <li key={item} className={ props.current === index ?  style.li1 + ' ' + style.active : style.li1 } onClick={ () => handleClick(index) }>{item}</li>
                    )
                } ) }
            </ul>

            {/*路由展示区*/}
            <Switch>
                <Route path="/home" component={ Home } ></Route>
                <Route path="/list" component={ List } ></Route>
                <Route path="/news" component={ News } ></Route>

                <Redirect from="/" to="/home" exact></Redirect>
            </Switch>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.Reducer4.num
    }
}

const mapDispatchToProps = {
    changeCurrentIndex(val) {
        return {
            type: 'CHANGE_CURRENT',
            value: val
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
