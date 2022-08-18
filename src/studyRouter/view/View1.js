import React, {Component} from 'react';
import { Switch, Route, Redirect } from "react-router-dom"

import Child1 from "./view1/Child1"
import Child2 from "./view1/Child2"

import style from "./View1.module.css"

class View1 extends Component {

    toChild1 = () => {
        this.props.history.push("/view1/child1")  // 类组件里面的跳转   函数式组件里面的跳转是   props.history.push("/view1/child1")
    }

    toChild2 = () => {
        this.props.history.push("/view1/child2")
    }


    render() {
        return (
            <div>
                view1
                <ul>
                    <li onClick={ () => this.toChild1() } className={style.active}>child1</li>
                    <li onClick={ () => this.toChild2() }>child2</li>
                </ul>
                <hr />

                <Switch>
                    <Route path="/view1/child1" component={ Child1 }></Route>
                    <Route path="/view1/child2" component={ Child2 }></Route>

                    <Redirect from="/view1" to="/view1/child1" ></Redirect>
                </Switch>
            </div>
        );
    }
}

export default View1;
