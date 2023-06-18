// Rules for creating actions

// 1. Actions are plain objects.
// 2. Action functions must be pure functions.

export const increaseCounter = num => {
    return { type: 'INC_COUNTER', data: num }
}

export const userSignupHandler = (userObj, isAdmin, navigate) => {

    return async (dispatch, getState) => {

        console.log("the store", getState())

        const signupUrl = isAdmin ? 'http://localhost:8000/admin' : 'http://localhost:8000/student'
        const signupResponse = await fetch(signupUrl, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    
        if (signupResponse.status === 200) {
            const parsedResponse = await signupResponse.json()
            navigate('/profile')
            dispatch({ type: 'USER_SIGNUP', data: parsedResponse.data })
        } else{
            dispatch({ type: 'USER_SIGNUP', data: null })
        }
    
    }

}