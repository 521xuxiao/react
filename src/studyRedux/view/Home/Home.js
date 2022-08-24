import React from 'react';

import Child1 from "./home/Child1"
import Child2 from "./home/Child2"
import Child3 from "./home/Child3"

import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

export default function Home() {

    return(
        <div>
            home
            <hr />

            <Child3></Child3>

            <hr />

            <HashRouter>
                <Switch>
                    <Route path="/home/child1" component={ Child1 } ></Route>
                    <Route path="/home/child2" component={ Child2 } ></Route>

                    <Redirect from="/home" to="/home/child1"></Redirect>
                </Switch>
            </HashRouter>
        </div>
    )
}
