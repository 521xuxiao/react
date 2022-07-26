import React, {Component} from 'react';
import Navbar from "./component/12-navbar"
import NavBarFn from "./component/12-fn"
class App extends Component {
    render() {
        return (
            <div>
                首页
                <Navbar title="首页" leftShow={false}></Navbar>

                列表
                <Navbar title="列表"></Navbar>

                购物车
                <Navbar title="购物车"></Navbar>

                函数式组件props传值
                <NavBarFn title="函数式组件传值"></NavBarFn>
            </div>
        );
    }
}

export default App;
