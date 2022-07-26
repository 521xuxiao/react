import React, {Component} from 'react';

import App1 from "./component/03-组件嵌套1"
import App2 from "./component/03-组件嵌套2"
import App3 from "./component/03-组件嵌套3"

class App extends Component {

    render() {
        const obj = {
            color: "yellow",
            fontSize: "20px"
        }
        return (
            <div>
                <p style={obj}>组件的嵌套</p>

                <App1></App1>
                <App2></App2>
                <App3></App3>
            </div>
        );
    }
}

export default App;
