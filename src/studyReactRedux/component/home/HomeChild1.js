import React from 'react';

import { connect } from "react-redux"

function HomeChild1(props) {
    const { changeNum1 } = props
    const handleClick = (val) => {
        changeNum1(val);
    }

    const asyncHandleClick = (val) => {
        props.asyncHandle(val)
    }

    return (
        <div>
            honeChild1   ---   { props.num1 }
            <div>
                <button onClick={ () => handleClick('要传给child2的值') }>给child2同步传值</button>
                <button onClick={ () => asyncHandleClick('给child2异步传过去的值') }>给child2异步传值</button>
            </div>
        </div>
    )
}
const matStateToProps = (state) => {
    return {
        num1: state.Reducer2.num
    }
}
const mapDispatchToProps = {
    changeNum1(val) {
        return {
            type: 'TYPE1',
            value: val
        }
    },

    asyncHandle(val) {
        return (dispatch) => {
            setTimeout(() => {
                dispatch({
                    type: 'TYPE3',
                    value: val
                })
            }, 300)
        }
    }
}
export default connect(matStateToProps, mapDispatchToProps)(HomeChild1)
