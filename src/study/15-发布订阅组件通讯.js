import React from 'react';

import { bus } from "./component/15-调度中心"
/**
 * 订阅发布消息解决不同组件之间的传值
 *
 *   发布者： publish
 *
 *   订阅者： subscribe
 */

class App2 extends React.Component {
    render() {
        return(
            <div>{ bus.subscribe((val) => {
                console.log(val);
            }) }</div>
        )
    }
}

export default class App extends React.Component {
    render() {
        return(
            <div>
                <button onClick={ () => {
                    bus.publish("要传过去的值");
                } }>消息订阅发布通讯</button>
                <App2></App2>
            </div>
        )
    }
}



