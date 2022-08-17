import React, { useRef } from 'react';

/**
 * useRef 的两个功能
      1、取出输入框里面的值
      2、类似于状态，保存住数据
 */



export default function App() {

    const val = useRef()

    const getVal = () => {
        console.log(val.current.value)
    }

    return(
        <div>
            <input ref={ val }/>
            <button onClick={ () => getVal() }>取值</button>
        </div>
    )
}
