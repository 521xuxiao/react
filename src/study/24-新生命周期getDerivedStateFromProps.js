import React from "react"

/**
 * getDerivedStateFromProps 需要配合 componentDidUpdate 使用, 做子组件监听字段变化，类似于vue中的watch
 */

class Child extends React.Component{

    state = {
        text: ''
    }

    render() {
        return(
            <div>子组件</div>
        )
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        // console.log(nextProps, nextState)
        return{
            text: nextProps.text
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.text === prevState.text) {
            return;
        }
        console.log("做后面的业务处理");
    }
}

export default class App extends React.Component{
    render() {
        return(
            <div>
                <button onClick={() => {
                    this.setState({
                        text: '许潇'
                    })
                }}>点击</button>

                {this.state.text}
                <Child text={this.state.text}/>
            </div>
        )
    }

    state = {
        text: '小明'
    }
}
