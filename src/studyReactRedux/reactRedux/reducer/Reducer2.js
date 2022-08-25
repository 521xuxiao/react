const reducer2 = (prevState = { num: 10 }, action) => {
    let newState = { ...prevState }
    switch(action.type) {
        case "TYPE2":
            newState.num = action.value
            return newState
        default:
            return prevState
    }
}

export default reducer2
