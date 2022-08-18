import React from 'react';
import { HashRouter, Route, Redirect, Switch, BrowserRouter } from "react-router-dom"


import View1 from "../view/View1"
import View2 from "../view/View2"

import NotFont from "../view/NotFont"

/**
 *   router 嵌套路由见 View1 组件
 */

export default class Router1 extends React.Component{
    render() {
        return (
            <BrowserRouter>
                {/* Switch 匹配到第一个就跳出了，不会继续往下匹配了 */}
                <Switch>
                    <Route path="/view1" component={View1}></Route>
                    <Route path="/view2" component={View2}></Route>

                    {/*路由拦截语法*/}
                    {/*<Route path="/view2" render={() => {*/}
                    {/*    return "有当前的权限就让它渲染" ? <View2> : <Redirect to="/login" />*/}
                    {/*}} />*/}
                    {/*<Route path="/login" component={Login} />*/}

                    {/* 路由重定向  exact 精准匹配 只有输入 / 才会进入view1页面中 */}
                    <Redirect from="/" to="/view1" exact></Redirect>

                    {/*404页面*/}
                    <Route component={ NotFont }></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
