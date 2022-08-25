import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom"
import Layout from "./Layout"

export default function App() {
    return(
        <HashRouter>
            <Switch>
                <Route path="/" component={ Layout }></Route>
            </Switch>
        </HashRouter>
    )
}
