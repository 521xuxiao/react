const reducer4 = (prevState = { num: 0 }, action) => {
    let newState = { ...prevState }
    switch(action.type) {
        case "CHANGE_CURRENT":
            newState.num = action.value
            return newState
        default:
            return prevState
    }
}

export default reducer4
