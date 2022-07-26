import React, { Component } from 'react';

export default class App extends Component {

    a = 100;

    render() {
        return(
            <div>
                <button onClick={ () => {
                    console.log("click", this.a);
                } }>按钮 - 事件绑定方式一</button>

                <button onClick={ this.handleClick2.bind(this, "flag参数值") }>按钮 - 事件绑定方式二</button>

                <button onClick={ this.handleClick3 }>按钮 - 事件绑定方式三</button>

                <button onClick={ () => this.handleClick4() }>按钮 - 事件绑定方式四</button>
            </div>
        )
    }

    handleClick2(evt, flag) {   // evt为事件对象
        console.log('click', this.a, evt, flag);
    }

    handleClick3 = (evt) => {   // evt为事件对象
        console.log('click', this.a, evt);
    }

    handleClick4(evt) {
        console.log("click", this.a, evt);
    }
}


/**
 * 涉及到this指向问题： 1、apply   2、call   3、bind 的区别
 */

var obj = {
    a: 1,
    fn: function() {
        console.log(this.a)
    }
}

var obj2 = {
    a: 2,
    fn: function() {
        console.log(this.a);
    }
}

obj.fn();

obj.fn.apply(obj2);  // this指向obj2  可以自定执行
obj.fn.call(obj2);   // this指向obj2  可以自动执行

obj.fn.bind(obj2)();   // this指向obj2  不能自动执行， 需要手动调用

obj2.fn();

