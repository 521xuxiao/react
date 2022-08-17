import React from 'react';
import { HashRouter, Route } from "react-router-dom"


import View1 from "../view/View1"
import View2 from "../view/View2"

export default class Router1 extends React.Component{
    render() {
        return (
            <HashRouter>
                <Route path="/view1" component={View1}></Route>
                <Route path="/view2" component={View2}></Route>
            </HashRouter>
        )
    }
}
