import React from "react"

import Routers from "./router"


/**
 *   路由跳转传参的几种方式
 *
 *        方法一
 *        this.props.history.push({
 *            path: '/test',
 *            query: { row: row }
 *        })
 *        this.props.location.query.row
 *
 *
 *        方法二
 *        this.props.history.push({
 *              path: '/test',
 *              state: { row: row }
 *        })
 *        this.props.location.state.row
 *
 *
 *
 *        方法三
 *        配置的路由里面  <Route path='/test/:id' component={router} />
 *        this.props.history.push("/test")
 *        this.props.match.params.id
 *
 *
 *   函数式组件中直接接过来参数为props即可  （hooks中有个useHistory也可以使用）
 *
 *
 *   在路由跳转过程中，如果遇到守卫路由或者页面组件嵌套的比较深的话，props丢了，就可以使用 withRouter 高阶组件包裹 类组件或者函数式组件重新拿到props进行页面的跳转（notFont组件中有案例）
 *
 *
 *   css样式避免组件起相同的名字，可以使用module来进行区分 详细见View1组件和View1.module.css样式
 */





export default class App extends React.Component {

    render() {
        return(
            <div>
                <Routers></Routers>
            </div>
        )
    }
}
