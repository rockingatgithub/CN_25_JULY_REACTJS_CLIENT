import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import {GoogleOAuthProvider} from '@react-oauth/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId='84427783556-26q1c6omger9fie7mfvpaonihegat7h8.apps.googleusercontent.com'>
            <App />
        </GoogleOAuthProvider>
    </BrowserRouter>

);