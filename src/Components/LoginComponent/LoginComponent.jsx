import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI } from '../../api/api';
import { MyPaper, MyMainButton } from './Style'
import { Snackbar, Alert } from "@mui/material";

const LoginComponent = () => {

    const [open, setOpen] = useState(false);

    const [user, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const OnSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: user,
            password: password,
        }
        loginAPI(data)
            .then(() => {
                setErrorMessage('')
                handleClick()
                setTimeout(() => {
                    navigate('/')
                }, 2000);
            })
            .catch(() => {
                if (user === '') {
                    setErrorMessage("Username is required!")
                } else if (password === '') {
                    setErrorMessage("Password is required!")
                } else {
                    setErrorMessage("Username or password is incorrect!")
                }
                handleClick()
            })
    }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <MyPaper elevation={0}>
            <h4>registered customers</h4>
            <p>If you have an account with us, Please login!</p>
            <form action="" onSubmit={(e) => OnSubmit(e)}>
                <input type="text" value={user} onChange={(e) => setUsername(e.target.value)} placeholder="Username here..." name="user" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <p>
                    <Link to="/">Forget your password?</Link>
                </p>
                <MyMainButton altName="login">login</MyMainButton>
            </form>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={errorMessage === '' ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                    variant="filled"
                >
                    {errorMessage === '' ? 'Login successfull!' : errorMessage}
                </Alert>
            </Snackbar>
        </MyPaper>
    )
}

export default LoginComponent