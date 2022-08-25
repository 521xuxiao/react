/**
 *
 *      react-redux的使用步骤
 *
 *          1、引入react-redux  和  redux  和  redux-thunk
 *
 *          2、index.js中引入 import { Provider } from "react-redux"
 *
 *          3、在根组件中App外面包上一层  <Provider store={ store }></Provider>, 其中store就是redux中创建的store对象
 *
 *          4、在组件中使用connect( (state)=>{
 *              return { state: state.xxxReducer.xxx }
 *          } )(App)
 *          其中的 connect 是从 react-redux 中解构出来的    import { connect } from "react-redux"
 *          connect函数中有两个参数： 第一个是从store状态中取值的，第二个是dispatch传值的
 *
 *          详细见home中的child1给child2传值， child2给child1传值
 */

import { createStore, combineReducers, applyMiddleware } from "redux"

import reduxThunk from "redux-thunk"


import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import Reducer1 from "./reducer/Reducer1"
import Reducer2 from "./reducer/Reducer2"
import Reducer3 from "./reducer/Reducer3"
import Reducer4 from "./reducer/Reducer4"

const persistConfig = {
    key: 'item',
    storage,
    whitelist: ['Reducer1', 'Reducer4']  // 表示只持久化 Reducer1的值  blacklist: ['Reducer2'] 表示不持久化Reducer2
}

const reducer = combineReducers({
    Reducer1,
    Reducer2,
    Reducer3,
    Reducer4,
})

const myPersistReducer = persistReducer(persistConfig, reducer)

const store = createStore(myPersistReducer, applyMiddleware(reduxThunk))

const persistor = persistStore(store)

export { store, persistor }
