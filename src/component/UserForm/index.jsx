import { useNavigate } from "react-router-dom"
import { GoogleLogin } from '@react-oauth/google';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const { useState, useEffect } = require("react")

const UserForm = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


    useEffect(() => {

        console.log("Component mounted!")
        // console.log("Name changed!")

        return () => { console.log("Component unmounted!") }

    }, [])

    const userSubmitHandler = async (event) => {

        event.preventDefault()

        const userObj = {
            name,
            email,
            password
        }

        const signupResponse = await fetch('http://localhost:8000/student', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (signupResponse.status === 200) {
            const parsedResponse = await signupResponse.json()
            props.setUser(parsedResponse.data)
            navigate('/profile')
            console.log(parsedResponse)
        }


    }

    const loginHandler = async (event) => {

        event.preventDefault()

        const userObj = {
            email,
            password
        }

        const signinResponse = await fetch('http://localhost:8000/auth', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (signinResponse.status === 200) {
            const parsedResponse = await signinResponse.json()
            props.setUser(parsedResponse.data)
            navigate('/profile')
            console.log(parsedResponse)
        }

    }

    const googleLoginHandler = async credentialResponse => {

        console.log(credentialResponse)

        const googleLoginresponse = await fetch('http://localhost:8000/auth/google', {
            method: 'POST',
            body: JSON.stringify({ token: credentialResponse.credential }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (googleLoginresponse.status === 200) {
            const parsedResponse = await googleLoginresponse.json()
            props.setUser(parsedResponse.data)
            navigate('/profile')
            console.log(parsedResponse)
        }

    }

    const formHandler = props.signUp ? userSubmitHandler : loginHandler
    const formHeading = props.signUp ? 'Singup' : 'Signin'
    const NameInput = <>Name:-<input />
        <br />
    </>

    return <>
        <h2> {formHeading}  </h2>


        <Form onSubmit={formHandler} >

            {props.signUp && <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter name" type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </Form.Group>}

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        <GoogleLogin
            style={{width: '50%', margin: 'auto'}}
            onSuccess={credentialResponse => {
                googleLoginHandler(credentialResponse)
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />

    </>

}

export default UserForm