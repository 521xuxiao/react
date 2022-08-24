const reducer2 = (prevState = { num2: 20 }, action) => {
    let newState = { ...prevState }
    switch(action.type) {
        case "TYPE2":
            newState.num2 = action.value
            return newState
        default:
            return prevState
    }
}

export default reducer2
