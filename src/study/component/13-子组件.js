import React, {Component} from 'react';

class App extends Component {
    render() {
        const { msg } = this.props;
        return (
            <div>
                子组件  - { msg }

                <button onClick={ () => this.handleClick() }>子传值给父</button>
            </div>
        );
    }

    handleClick() {
        this.props.emitClick('子传过去的值');
    }
}

export default App;
