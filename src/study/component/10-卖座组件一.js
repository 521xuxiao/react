import React from 'react';
import Axios from "axios"

import "../css/10-1css.css";

export default class App extends React.Component {

    cinemasList = []

    state = {
        cinemas: []
    }

    inputVal = React.createRef();

    render() {
        return(
            <div>
                <input ref={this.inputVal} onChange={ () => this.changeVal() } />
                <ul className="ul2">
                    { this.state.cinemas.map( item => (
                        <li key={item.cinemaId} className="li2">{item.address}</li>
                    )) }
                </ul>
            </div>
        )
    }

    async componentDidMount() {
        const res = await Axios({url:"https://m.maizuo.com/gateway?cityId=440300&ticketFlag=1&k=4025371", headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16588019771580668224012289"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }, method: 'get'});
        this.setState({
            cinemas: res.data.data.cinemas
        })
        this.cinemasList = res.data.data.cinemas
    }

    changeVal() {
        const cinemas = this.cinemasList.filter(item => item.name.toLowerCase().includes(this.inputVal.current.value.toLowerCase()) || item.address.toLowerCase().includes(this.inputVal.current.value.toLowerCase()));
        this.setState({
            cinemas
        })
    }
}
