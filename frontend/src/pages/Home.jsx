import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <Link style={{marginRight: '8px'}} to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        </>
       
    );
}

export default Home;