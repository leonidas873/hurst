import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { registerAPI } from '../../api/api';
import { MyPaper, MyMainButton } from './Style'
import { Snackbar, Alert } from "@mui/material";

const RegisterComponent = () => {

    const [open, setOpen] = useState(false);

    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const OnSubmit = (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const data = {
                username: userName,
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password,
            }
            registerAPI(data)
                .then(() => {
                    setErrorMessage('')
                    handleClick()
                    setTimeout(() => {
                        navigate('/')
                    }, 2000);
                })
                .catch(error => {
                    if (error.message === 'User already exists with this email') {
                        setErrorMessage(error.message)
                        handleClick()
                    } else if (error.message === 'User already exists with this username') {
                        setErrorMessage(error.message)
                        handleClick()
                    }
                })
        } else {
            setErrorMessage("Repeat password error")
            handleClick()
        }
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
            <h4>new customers</h4>
            <p>If you have an account with us, Please login!</p>
            <form action="" onSubmit={(e) => OnSubmit(e)}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Your username here..." name="username" />
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your firstname here..." name="firstname" />
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Your lastname here..." name="lastname" />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address here..." name="email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <input type="password" value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder="Confirm password" />
                <MyMainButton altName="register">register</MyMainButton>
            </form>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={errorMessage === '' ? 'success' : 'error'}
                    sx={{ width: '100%' }}
                    variant="filled"
                >
                    {errorMessage === '' ? 'Register successfull!' : errorMessage}
                </Alert>
            </Snackbar>
        </MyPaper>
    )
}

export default RegisterComponent