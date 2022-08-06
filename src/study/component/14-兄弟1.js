import React, { Component } from 'react';
export default class App extends Component {

    state = {
        msg: '兄弟一的值'
    }

    render() {
        return(
            <div>兄弟一</div>
        )
    }

    componentDidMount() {
        this.props.eventHandle(this.state.msg);
    }
}
