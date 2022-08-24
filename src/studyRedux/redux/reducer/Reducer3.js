const reducer3 = (prevState = { num3: 20 }, action) => {
    let newState = { ...prevState }
    switch(action.type) {
        case "TYPE3":
            newState.num3 = action.value
            return newState
        default:
            return prevState
    }
}

export default reducer3
