import React from 'react';

import Component1 from "./component/10-卖座组件一"
import Component2 from "./component/10-卖座组件二"
import Component3 from "./component/10-卖座组件三"

import "./css/10-maizuo.css"

export default class App extends React.Component {


    state = {
        tabList: [
            {id: 1, name: '电影'},
            {id: 2, name: '影院'},
            {id: 3, name: '我的'}
        ],
        currentIndex: 0
    }

    render() {
        const { tabList, currentIndex } = this.state;

        return(
            <div>
                { currentIndex === 0 && <Component1></Component1> }
                { currentIndex === 1 && <Component2></Component2> }
                { currentIndex === 2 && <Component3></Component3> }

                <ul className="ul1">
                    { tabList.map( (item, index)  => (
                        <li key={item.id} className={currentIndex === index ? 'active li1' : 'li1'} onClick={ () => this.handleClick(index) }>{item.name}</li>
                    ) ) }
                </ul>
            </div>
        )
    }

    handleClick(currentIndex) {
        this.setState({
            currentIndex
        })
    }
}
