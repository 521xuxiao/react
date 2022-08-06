import React from 'react';
import Child1 from "./component/14-兄弟1"
import Child2 from "./component/14-兄弟2"

/**
 * 兄弟1 的值传给父组件， 再通过父组件传给兄弟二
 */

export default class App extends React.Component {

    state = {
        middle: ''
    }

    render() {
        return (
            <div>

                <Child1 eventHandle={ this.eventHandle.bind(this) }></Child1>
                <Child2 msg={ this.state.middle }></Child2>
            </div>
        )
    }

    eventHandle(val) {
        this.setState({
            middle: val
        })
    }
}
