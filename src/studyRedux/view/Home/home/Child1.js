import React, { useEffect, useState } from "react"

import store from "../../../redux/index"

export default function Child1() {

    const [val, setVal] = useState( store.getState().Reducer2.num2 )

    // 点击同步存值
    const handleClick = () => {
        store.dispatch({
            type: 'TYPE1',
            value: '猜猜我给你传什么值'
        })
    }


    // 异步存值的方法
    const asyncValue = () => {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: 'TYPE3',
                    value: '异步传过去的值'
                })
            }, 300)
        }
    }

    // 点击异步存值
    const axiosSendMessage = () => {
        store.dispatch( asyncValue() )
    }

    useEffect( () => {
        const unsubscribe = store.subscribe(() => {
            setVal( store.getState().Reducer2.num2 )
        })

        return () => {
            console.log("销毁之前的钩子");
            unsubscribe() // 取消订阅
        }
    }, [])

    return(
        <div>
            Child1  ---   { val }
            <button onClick={ () => handleClick() }>点击通过redux传值</button>
            <button onClick={ () => axiosSendMessage() }>点击通过redux-thunk异步传值</button>
        </div>
    )
}
