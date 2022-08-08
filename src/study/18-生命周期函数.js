import React from "react"

/**
 * componentWillMount
 *
 * render
 *
 * componentDidMount
 *
 * react 16.2版本之后优化diff算法Fiber新技术出来了： 传统的数据变化，虚拟dom中的新状态和老的状态进行比较，数据量大就会出现浏览器假死的现象，Fiber就是把它们dom对比的话
 *                   componentWillMount的优先级比较低，会重复执行，不安全
 */

export default class App extends React.Component{
    render() {
        return(
            <div>123</div>
        )
    }

    UNSAFE_componentWillMount() {
        console.log("相当于vue中的created, 新生命函数不建议使用")
    }

    componentDidMount() {
        console.log("相当于vue中的mounted")
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("更新之前，也就是setState之前");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("更新之后，就是setState之后执行");
    }

    // react中的优化生命函数
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(JSON.stringify(this.state) !== JSON.stringify(nextState)) {  // 对比老状态和新状态，如果完全一样就不走render、componentDidUpdate,优化性能
            return true;
        }
        return false;
    }
}
