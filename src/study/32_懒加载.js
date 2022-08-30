import React, { Suspense } from 'react';

const Child1 = React.lazy(() => import("./32_懒加载/Child1"))
const Child2 = React.lazy(() => import("./32_懒加载/Child2"))


/**
 *
 *   组件懒加载
 *        1、导入组件的过程   const Child1 = React.lazy(() => import("./32_懒加载/Child1"))
 *        2、组件展示区       <Suspense fallback={ <div>正在加载中....</div> }>
                                  { this.state.flag === 1 ? <Child1></Child1> : <Child2></Child2> }
                            </Suspense> }
 *
 */

export default class App extends React.Component {


    state = {
        list: [
            {id: 1, name: '正在热映'},
            {id: 2, name: '即将上映'}
        ],

        flag: 1
    }

    handleClick(item) {
        this.setState({
            flag: item.id
        })
    }

    render() {
        return (
            <div>
                <ul style={{display: 'flex',}}>
                    { this.state.list.map((item) => (
                        <li key={item.id} style={{margin: '20px'}} onClick={() => this.handleClick(item)}>{item.name}</li>
                    )) }
                </ul>

                <Suspense fallback={ <div>正在加载中....</div> }>
                    { this.state.flag === 1 ? <Child1></Child1> : <Child2></Child2> }
                </Suspense>
            </div>
        )
    }
}






