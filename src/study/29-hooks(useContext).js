import React, { useState, useContext } from 'react';

const GlobalContext = React.createContext();

export default function App() {

    const [name, setName] = useState('')

    return (
        <GlobalContext.Provider value={{ name: name, setName: (val) => { setName(val) } }}>
            <div>
                <Child1></Child1>

                <hr />

                <Child2></Child2>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {

    const context = useContext(GlobalContext)

    return (
        <div>child1  --  {context.name}</div>
    )
}

function Child2() {

    const context = useContext(GlobalContext)

    const handleClick = () => {
        context.setName( Math.random() )
    }

    return (
        <div>
            <button onClick={ () => handleClick() }>点击将child2组件里面的值传给child1组件</button>
        </div>
    )
}
