import React from 'react';

/**
 * context 实现组件之间的通讯
 *
 *
 */

// 创建 context 对象
const Context = React.createContext();


class App1 extends React.Component {
    render() {
        return(
            <Context.Consumer>
                { (val) => {
                    return(
                        <div>
                            兄弟1,发送数据
                            <button onClick={ () => {
                                val.changeInfo("兄弟1要发出的数据");
                            } }>点击发送数据</button>
                        </div>
                    )
                } }
            </Context.Consumer>
        )
    }
}

class App2 extends React.Component {
    render() {
        return(
            <Context.Consumer>
                { (val) => {
                    console.log(val.info);
                    return(
                        <div>
                            兄弟2-- {val.info}
                        </div>
                    )
                } }
            </Context.Consumer>
        )
    }
}

export default class App extends React.Component {

    state = {
        info: ''
    }

    render() {
        return(
            <Context.Provider value={{
                info: this.state.info,
                changeInfo: (val) => {
                    this.setState({
                        info: val
                    })
                }
            }}>
                <div>

                    <App1></App1>
                    <App2></App2>
                </div>
            </Context.Provider>
        )
    }
}
