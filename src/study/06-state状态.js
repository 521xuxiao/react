import React from 'react';
export default class App extends React.Component {

    state = {
        show: "你好",
        text: true,

        list: [1, 2, 3 ]
    }

    render() {
        const {  show, text, list } = this.state;
        return(
            <div>
                <div>{show}</div>

                <button onClick={ () => this.handleClick() }>修改数据</button>

                <hr />

                <div>{text ? "收藏" : "取消收藏"}</div>

                <button onClick={ () => this.handleClick2() }> 收藏与否</button>

                <hr />

                <ul>
                    { list.map( item => (
                        <li key={item}>{item}</li>
                    ) ) }
                </ul>

                <button onClick={ () => this.handleClick3() }> 增加数据</button>
            </div>
        )
    }

    handleClick() {
        this.setState({
            show: "大家好"
        })
    }

    handleClick2() {
        const { text } = this.state
        this.setState({
            text: !text
        })
    }

    handleClick3() {
        const { list } = this.state;
        this.setState({
            list: [...list, Math.random()]
        })
    }
}
