import React from "react"
export default class App extends React.Component{

    myRef = React.createRef();

    render() {
        return(
            <div>
                <button onClick={() => {
                    this.setState({
                        list: [...[11, 12, 13, 15, 16, 20], ...this.state.list]
                    })
                }}>来邮件</button>

                <div style={{height: '200px', overflow: 'auto'}} ref={this.myRef}>
                    <ul>
                        { this.state.list.map(item => (
                            <li key={item} style={{height: '80px'}}>{item}</li>
                        )) }
                    </ul>
                </div>
            </div>
        )
    }

    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    // 状态更新之前走的生命函数，return的值被componentDidUpdate第三个参数接到
    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.myRef.current.scrollHeight;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)  // 更新之前值
        console.log(this.myRef.current.scrollHeight);  // 更新之后的值
        this.myRef.current.scrollTop += this.myRef.current.scrollHeight - snapshot
    }
}
