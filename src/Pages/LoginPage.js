import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../API';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormessage, setErrorMessage] = useState('');

    const { isLoggedIn, setIsLoggedIn } = props;

    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        console.log('tryna log in huh?')
        instance
            .post('/prompter/login', { email, password })
            .then(res => {
                console.log(res.data);
                if (res.data.message == 'logged in') {
                    localStorage.setItem('isLoggedIn', true);
                } else {
                    setErrorMessage(res.data.message);
                }
            })
            .catch(error => {
                console.log('error form server', error);
            })
    }
    useEffect(() => {
        if (!!isLoggedIn) {
            navigate('/dashboard');
        }
    })
    return (
        <div>
            <p>
                This is the Log in Page
            </p>
            <form onSubmit={handleLogin} >
                <table>
                    <tr>
                        <td><label>Email</label></td>
                        <td><input type="email" onChange={e => { setEmail(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" onChange={e => { setPassword(e.target.value) }} /></td>
                    </tr>
                    <button type='submit'>Log in</button>
                    <button onClick={() => { navigate('/signup') }}>Sign in</button>
                    <button onClick={() => { navigate('/') }}>Back</button>
                </table>
            </form>
            {!!errormessage && <p style={{ color: 'red' }}>{errormessage}</p>}
        </div>
    );
}

export default LoginPage;