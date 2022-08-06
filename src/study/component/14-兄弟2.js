import React, { Component } from 'react';
export default class App extends Component {
    render() {
        const { msg } = this.props;
        return(
            <div>兄弟二 -- { msg }</div>
        )
    }
}
