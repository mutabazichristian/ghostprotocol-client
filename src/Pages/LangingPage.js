import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage(props) {
    const { isLoggedIn, setIsLoggedIn } = props;

    const navigate = useNavigate();
    const navigateToSignup = () => {
        navigate('/signup');
    }
    const navigateToLogin = () => {
        navigate('/login');
    }
    return (
        <div>
            <h1>Ghost Protocol</h1>
            <button onClick={navigateToSignup}>signup</button>
            <button onClick={navigateToLogin}>log in</button>
        </div>
    );
}

export default HomePage;