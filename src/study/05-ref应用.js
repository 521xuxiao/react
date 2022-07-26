import React from 'react';

export default class App extends React.Component {

    refValue = React.createRef();

    render() {
        return(
            <div>
                <input ref={this.refValue} />

                <button onClick={  () => this.handleClick() }>取值</button>
            </div>
        )
    }

    handleClick() {
        console.log(this.refValue.current.value)
    }
}
