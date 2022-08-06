import React from "react"

class Box extends React.Component{
    render() {
        return(
            <div>Child   ---  {this.props.type}</div>
        )
    }

    // 有点类似于监听属性
    componentWillReceiveProps(nextProps, nextContext) {
        console.log(this.props.type)  // 旧值
        console.log(nextProps.type);  // 新值
    }


    componentDidMount() {
        console.log(this.props.type)
    }
}

export default class App extends React.Component{

    state = {
        type: 1
    }

    render() {
        return(
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即将上映</li>
                </ul>
                <Box type={this.state.type}></Box>
            </div>
        )
    }
}
