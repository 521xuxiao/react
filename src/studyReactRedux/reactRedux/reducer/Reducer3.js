const reducer3 = (prevState = { num: 10 }, action) => {
    let newState = { ...prevState }
    switch(action.type) {
        case "TYPE3":
            newState.num = action.value
            return newState
        default:
            return prevState
    }
}

export default reducer3
