import React from "react"

import Children from "./component/20-插槽子组件"

export default class App extends React.Component {
    render() {
        return(
            <div>
                此处是父组件
                <Children>
                    <div>插槽一</div>
                    <div>插槽二</div>
                    <div>插槽三</div>
                </Children>
            </div>
        )
    }
}
