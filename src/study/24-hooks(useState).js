import React, { useState } from 'react';

export default function App() {

    const [value, setValue] = useState("")
    const [list, setList] = useState([])

    return (
        <div>
            <input onChange={ change } value={value}/>  <button onClick={ add }>增加</button>
            <ul>
                { list.map( (item, index) => {
                    return (
                        <div key={ item }>
                            <li style={ {display: 'inline-block', marginRight: "20px"} }>{item}</li>
                            <button onClick={ () => handleDelete(index) }>删除</button>
                        </div>
                    )
                } ) }

                { list.length === 0 && <div>暂无数据</div> }
            </ul>
        </div>
    )

    function handleDelete(index) {
        console.log(index)
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList);
    }

    function change( event ) {
        setValue( event.target.value)
    }

    function add() {
        setList( [...list, value] )
        setValue("")
    }
}
