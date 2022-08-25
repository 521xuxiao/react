import React from 'react';

import { connect } from "react-redux"

function HomeChild2(props) {


    const handleClick = (val) => {
        props.changeNum2(val)
    }

    return (
        <div>
            honeChild2  ---  {props.num}   --  { props.asyncNum }
            <div>
                <button onClick={ () => handleClick('给child1传的值') }>点击给child1传值</button>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        num: state.Reducer1.num,
        asyncNum: state.Reducer3.num
    }
}
const mapDispatchToProps = {
    changeNum2(val) {
        return {
            type: 'TYPE2',
            value: val
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeChild2)
