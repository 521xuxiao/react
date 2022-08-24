import React, { useEffect, useState } from 'react';

import store from "../../../redux/index"

export default function Child2() {

    const [val, setVal] = useState(store.getState().Reducer1.num)

    const [ val3, setVal3 ] = useState(store.getState().Reducer3.num3)

    useEffect( () => {
        const unsubscribe = store.subscribe( () => {
            setVal(store.getState().Reducer1.num)

            setVal3(store.getState().Reducer3.num3)
        } )

        return () => {
            unsubscribe();
        }
    }, [])

    const handleClick = () => {
        store.dispatch({
            type: 'TYPE2',
            value: "child3给child1传的值"
        })
    }

    return(
        <div>
            Child3  --   { val }   ---  { val3 }

            <button onClick={ () => handleClick() }>点击给child1传值</button>
        </div>
    )
}
