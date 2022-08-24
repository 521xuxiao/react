//   1、引入redux    redux-thunk( 利用applyMiddleware处理异步存值 )

//   2、创建store    createStore( reducer )

//   3、消息发送发   store.dispatch({type: '', value: ''})

//   4、消息接收方   store.subscribe(() => {  store.getState().xxReducer.xxx  })

//   5、reducer合并  combineReducers({Reducer1, Reducer2, Reducer3})

//   见详细例子  Child1 点击给 Child3 传值  Child3点击给Child1传值 (同步存值)

//   异步存值    redux-thunk 见Child1存值，Child3取值 ( 异步存值 )

/**
 *    异步存值需要 store.dispatch( test() )
 *    const test = () => {
 *        return (dispatch) => {
 *             dispatch({
 *                 type: 'TYPE1',
 *                 value: '123'
 *             })
 *        }
*     }
 */


import { createStore, combineReducers, applyMiddleware } from "redux"

import reduxThunk from "redux-thunk"

import Reducer1 from "./reducer/Reducer1"
import Reducer2 from "./reducer/Reducer2"
import Reducer3 from "./reducer/Reducer3"

const reducer = combineReducers({
    Reducer1,
    Reducer2,
    Reducer3,
})

const store = createStore( reducer, applyMiddleware(reduxThunk) )

export default store

