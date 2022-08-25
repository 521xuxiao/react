import React from "react"

import { Route, Redirect, Switch } from "react-router-dom"

import ListChild1 from "./List/ListChild1";
import ListChild2 from "./List/ListChild2";

export default function List() {

    return (
        <div>
            列表页

            <hr />
            <Switch>
                <Route path="/list/listChild1" component={ ListChild1 }></Route>
                <Route path="/list/listChild2" component={ ListChild2 }></Route>

                <Redirect from="/list" to="/list/listChild1"></Redirect>
            </Switch>
        </div>
    )
}
