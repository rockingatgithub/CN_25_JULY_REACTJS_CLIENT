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

export const googleAuthHandler = (credential, navigate) => {

    return  async (dispatch, getState) => {

        const googleLoginresponse = await fetch('http://localhost:8000/auth/google', {
            method: 'POST',
            body: JSON.stringify({ token: credential }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (googleLoginresponse.status === 200) {
            const parsedResponse = await googleLoginresponse.json()
            dispatch({ type: 'USER_SIGNUP', data: parsedResponse.data })
            navigate('/profile')
        }

    }

}

export const userLoginHandler = (userObj, isAdmin, navigate) => {

    return async (dispatch, getState) => {

        const signinUrl = isAdmin ? 'http://localhost:8000/auth/admin' : 'http://localhost:8000/auth'
    
        const signinResponse = await fetch(signinUrl, {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (signinResponse.status === 200) {
            const parsedResponse = await signinResponse.json()
            dispatch({ type: 'USER_SIGNUP', data: parsedResponse.data })
            navigate('/profile')
        }

    }

}