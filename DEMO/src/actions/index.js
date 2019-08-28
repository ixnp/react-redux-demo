export const increaseVote = (id) => {
    console.log(id)
    return {
        type: "INCREASE_VOTE",
        payload: {
            id
        }
    }
}

export const decreaseVote = (id) => {
    return {
        type: "DECREASE_VOTE",
        payload: {
            id
        }
    }
}

export const initalizeBowies = (bowies) => {
    return (dispatch, getState) => {
        fetch('http://localhost:3000/bowies')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dispatch({type: 'CREATE_BOWIES', payload:data})
        })
        
    }
}