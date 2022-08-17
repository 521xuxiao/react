import React, { useReducer, useContext } from "react"

/***
 *   通过 useReducer 和 useContext 实现组件之间的通讯（只能是同步的）
 */

const initail = {
    a: 1,
    b: 1
}

const reducer = (state, action) => {
    let newState = {...state}
    switch(action.type) {
        case "change-a":
            newState.a = action.value
            return newState
        case "change-b":
            newState.b = action.value
            return newState
        default:
            return state
    }
}

const GlobalContext = React.createContext()

export default function App() {

    const [state, dispatch] = useReducer(reducer, initail)

    return(
        <GlobalContext.Provider value={{ state, dispatch }}>
            <div>
                <Child1></Child1>
                <hr/>
                <Child2></Child2>
                <hr/>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {

    const { dispatch } = useContext(GlobalContext)

    return(
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'change-a',
                    value: "修改Child2的值"
                })
            }}>给Child2传值</button>
            <button onClick={() => {
                dispatch({
                    type: 'change-b',
                    value: '修改Child3的值'
                })
            }}>给Child3传值</button>
        </div>
    )
}

function Child2() {

    const context = useContext(GlobalContext)

    return(
        <div>child2  -- {context.state.a}</div>
    )
}

function Child3() {

    const context = useContext(GlobalContext)

    return(
        <div>child3  --  {context.state.b}</div>
    )
}
