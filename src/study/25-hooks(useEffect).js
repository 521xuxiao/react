import React, { useEffect } from "react"

export default function App(props) {

    /**
     *  useEffect 和 useLayoutEffect 的区别
     *
     *  在处理dom的时候写在useLayoutEffect里面，防止页面抖动，
     *  考虑性能不处理dom的时候就加在 useEffect 上面
     */

    // 第一种 useEffect 的使用方法
    useEffect(() => {
        // 走 axios 数据
        setTimeout(() => {

        }, 300)
    }, [])  // 此处传空数组表示 页面进来只执行一次， 和 componentDidMount 比较相似


    // 第二种使用方法 类似于vue中的监听属性  watch
    useEffect(() => {

    }, [props.type])  // 类似于监听父组件传过来的type值，并且在组件进来的时候也会执行一次


    // 第三种使用方法， 类似于 componentWillUnmount 生命周期
    useEffect(() => {

        // 自己的业务

        return () => {
            console.log("组件销毁之前进来了");
        }
    }, [])


    return (
        <div>
            useEffect 的使用方法
        </div>
    )


}
