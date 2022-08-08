import React from "react"

class Box extends React.Component{
    render() {
        console.log("render");
        const { current, index } = this.props;
        return(
            <div style={{width: '100px', height: '100px', border: current === index ? '1px solid red' : '1px solid #000', float: 'left', margin: '10px'}}></div>
        )
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 优化，只有在将要改变的和改变的return true，进行渲染render， return false 进行渲染（此处也说明不要直接修改state状态里面的值）
        return this.props.current === this.props.index || nextProps.current === nextProps.index;
    }
}


export default class App extends React.Component{

    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        current: 0
    }

    render() {
        return(
            <div>
                <input type="number" value={this.state.current} onChange={(evt) => {
                    this.setState({
                        current: Number(evt.target.value)
                    })
                }}/>
                <ul style={{overflow: 'hidden'}}>
                    {
                        this.state.list.map((item, index) => (
                            <Box key={item} current={this.state.current} index={index}></Box>
                        ))
                    }
                </ul>

            </div>
        )
    }
}
