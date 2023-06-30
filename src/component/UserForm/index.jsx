import { useNavigate } from "react-router-dom"
import { GoogleLogin } from '@react-oauth/google';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connect, useDispatch } from "react-redux";
import { googleAuthHandler, userLoginHandler, userSignupHandler } from "../actions/auth";
import { useState} from "react"

const UserForm = (props) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userSubmitHandler = async (event) => {
        event.preventDefault()
        const userObj = {
            name,
            email,
            password
        }
        dispatch(userSignupHandler(userObj, isAdmin, navigate))
    }

    const loginHandler = async (event) => {
        event.preventDefault()
        const userObj = {
            email,
            password
        }
        dispatch(userLoginHandler(userObj, isAdmin, navigate))
    }

    const googleLoginHandler = async credentialResponse => {
        dispatch(googleAuthHandler(credentialResponse.credential, navigate))
    }

    const formHandler = props.signUp ? userSubmitHandler : loginHandler
    const formHeading = props.signUp ? 'Singup' : 'Signin'
    const isAdminLabel = props.signUp ? "Signup as admin" : "Signin as admin"

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

            <Form.Check
                type="switch"
                label={isAdminLabel}
                value={isAdmin}
                onChange={() => setIsAdmin( (state) => !state  )}
            />

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <GoogleLogin
                style={{width: '50%', margin: 'auto'}}
                onSuccess={credentialResponse => {
                    googleLoginHandler(credentialResponse)
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </Form>
    </>

}

const mapStateToProps = state => {
    return {
        main: state
    }
}

export default connect(mapStateToProps)(UserForm)