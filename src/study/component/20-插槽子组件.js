import React from "react"
export default class App extends React.Component{
    render() {
        return(
            <div>
                第一个展示区
                { this.props.children[0] }

                <hr />

                第二个展示区
                { this.props.children[1] }

                <hr />

                第三个展示区
                { this.props.children[2] }
            </div>
        )
    }
}
