import React from 'react';

import "./css/07css.css"

export default class App extends React.Component {

    inputValue = React.createRef();

    state = {
        list: []
    }

    render() {
        const { list } = this.state;
        return(
            <div>
                <div>
                    <input ref={this.inputValue}/>

                    <button onClick={ () => this.adds() }>增加</button>
                </div>

                <ul>
                    { list.map( (item, index) => (
                        <div key={item}>
                            <li className='li1'>{item}</li>
                            <button onClick={ () => this.delete(index) }>删除</button>
                        </div>
                    )) }
                </ul>

                {/*方法一, 类似于 vue 中的 v-if */}
                {/*{ (!(list && list.length)) && (<div >暂无数据</div>) }*/}

                {/*方法二, 类似于 vue 中的 v-show */}
                <div style={{display: list.length === 0 ? 'block' : 'none'}}>暂无数据</div>
            </div>
        )
    }

    adds() {
        const {list} = this.state;
        const findObj = list.find(item => item === this.inputValue.current.value);
        if(findObj) {
            return alert("输入的内容已经存在");
        }
        this.setState({
            list: [...list, this.inputValue.current.value]
        })

        this.inputValue.current.value = "";
    }

    delete(i) {
        const {list} = this.state;
        const deleteArr = [...list];

        deleteArr.splice(i, 1);
        this.setState({
            list: deleteArr
        })
    }
}
