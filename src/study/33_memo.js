import React, { memo } from 'react';

export default class App extends React.Component {

    state = {
        msg: '小刚'
    }

    render() {
        return(
            <div>
                { this.state.msg }

                <button onClick={() => {
                    this.setState({
                        msg: '小明'
                    })
                }}>修改</button>

                <Child1></Child1>
            </div>
        )
    }
}

const Child1 = memo(() => {
    console.log("更新了子")
    return(
        <div>
            Child1
        </div>
    )
})
