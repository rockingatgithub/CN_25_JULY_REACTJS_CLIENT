const initialState = {
    user: null,
    isLogged: false,
    isAdmin: false,
    wishList: []
}

function mainReducers (state=initialState, action) {

    switch (action.type) {
        case 'USER_SIGNUP':
            return { ...state, user: action.data }
    
        default:
            return state
    }

}


export default mainReducers