import React from "react"

/**
 * 传送门将此时的组件传送到 需要传送的地方，常应用于模态框，loading框的封装上
 */

import { createPortal } from "react-dom"

export default class App extends React.Component {


    render() {
        return(
            createPortal(
                <div>
                    123
                </div>, document.body
            )
        )
    }
}
