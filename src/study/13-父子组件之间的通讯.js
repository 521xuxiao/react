import React, {Component} from 'react';
import Children from './component/13-子组件'
class App extends Component {

    state = {
        msg: '父组件里面的数据'
    }

    render() {
        const{ msg } = this.state;
        return (
            <div>
                <Children msg={msg} emitClick={ this.emitClick }></Children>
            </div>
        );
    }

    emitClick(val) {
        console.log(val, this)
    }
}

export default App;
