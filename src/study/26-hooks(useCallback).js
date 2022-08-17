import React, { useState, useCallback } from 'react';

/**
 * 记忆函数 优化当前状态没有改变时候的函数的重复创建
 * @returns {*}
 * @constructor
 */

export default function App() {

    const [list, setList] = useState(["111", "222"])
    const [val, setValue] = useState("")

    let onChange = useCallback((evt) => {
        setValue( evt.target.value )
    }, [])

    let add = useCallback(() => {
        setList( [...list, val])
        setValue("")
    }, [list, val])

    let deletes = useCallback((index) => {
        const newArr = [...list]
        newArr.splice(index, 1)
        setList(newArr)
    }, [list])

    return(
        <div>
            <div>
                <input onChange={ onChange } value={ val } />  <button onClick={ add }>新增</button>
            </div>
            <ul>
                { list.map((item, index) => <li key={item}>
                    {item}

                    <button onClick={ () => deletes(index) }>删除</button>
                </li>) }

                { list.length === 0 && <div>暂无数据</div> }
            </ul>
        </div>
    )

}
