import React, { useEffect, useState } from 'react';
import instance from '../API/index';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [reapeatPassword, setRepeatePassword] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [errormessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('tryna submit the values huh?', name, email, password, reapeatPassword);
        instance
            .post('/prompter', { name, email, password })
            .then(res => {
                console.log('response', res.data);
                if (res.data.message == 'signed up') {
                    navigate('/login');
                } else {
                    setErrorMessage(res.data.message);
                }
            })
            .catch(error => {
                console.log('error from server', error);
            })
    }
    useEffect(() => {
        setButtonDisabled(((password == reapeatPassword) && (password != '') && (password.length >= 8)) ? false : true)
        console.log('button', buttonDisabled)
    }, [password, reapeatPassword])
    return (
        <div>
            <p>this is the sign in page</p>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="">Name </label></td>
                        <td><input type="text" name='name' onChange={e => { setName(e.target.value) }} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Email</label></td>
                        <td><input type="email" name="email" id="signup-email" onChange={e => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Password</label></td>
                        <td><input type="password" name='password' onChange={e => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="">Repeat Password</label></td>
                        <td><input type="password" name='reapeatPassword' onChange={e => setRepeatePassword(e.target.value)} /></td>
                    </tr>
                </table>
                <button type='submit' disabled={buttonDisabled}>Sign Up</button>
                <button onClick={()=>{navigate('/')}}>back</button>
                {password != reapeatPassword && <p style={{ color: 'red' }}>Passwords do not match</p>}
                {(password != '' && password.length < 8) && <p style={{ color: 'red' }}> password should be longer than 8 characters</p>}
                {!!errormessage && <p style={{ color: 'red' }}>{errormessage}</p>}
            </form>
        </div>
    );
}

export default SignupPage;