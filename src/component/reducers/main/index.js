const initialState = {
    user: null,
    isLogged: false,
    isAdmin: false,
    counter: 0,
    wishList: []
}

function mainReducers (state=initialState, action) {

    switch (action.type) {
        case 'INC_COUNTER': 
            return { ...state, counter: state.counter + action.data }

        case 'USER_SIGNUP':
            return { ...state, user: action.data }
    
        default:
            return state
    }

}


export default mainReducers