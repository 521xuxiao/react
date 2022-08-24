import React from 'react';
import { HashRouter, Route, Switch } from  "react-router-dom"

import Layout from "./Layout"


/**
 *
 *    redux 原理和流程
 *
 *
 *
 */



class App extends React.Component {

    render() {
        return(
            <div>
                <HashRouter>
                    <Switch>
                        <Route path="/" component={ Layout }></Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}

export default App
