const reducer1 = (prevState = { num: 10 }, action) => {
    let newState = { ...prevState }
    switch(action.type) {
        case "TYPE1":
            newState.num = action.value
            return newState
        default:
            return prevState
    }
}

export default reducer1
