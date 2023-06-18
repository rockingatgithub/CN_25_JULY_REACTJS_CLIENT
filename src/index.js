import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import {GoogleOAuthProvider} from '@react-oauth/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import mainReducers from './component/reducers/main';

const store = createStore(mainReducers, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <Provider store={store}>
        <BrowserRouter>
            <GoogleOAuthProvider clientId='84427783556-26q1c6omger9fie7mfvpaonihegat7h8.apps.googleusercontent.com'>
                <App />
            </GoogleOAuthProvider>
        </BrowserRouter>
    </Provider>

);