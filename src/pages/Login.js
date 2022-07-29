import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
        <h1>Login</h1>
        <span>
            Don't have an account?
            <Link to="/signup">Signup</Link>
        </span>
        <br />
        <span>Go back <Link to="/">Home</Link></span>
        </>
    );
}

export default Login;