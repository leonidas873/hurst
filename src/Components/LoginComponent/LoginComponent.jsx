import React from 'react'
import { Link } from 'react-router-dom'
import { MyPaper, MyMainButton } from './Style'

const LoginComponent = () => {
    return (
        <MyPaper elevation={0}>
            <h4>registered customers</h4>
            <p>If you have an account with us, Please login!</p>
            <form action="">
                <input type="text" placeholder="Email here..." name="email" />
                <input type="password" placeholder="Password" />
                <p>
                    <Link to="/">Forget your password?</Link>
                </p>
                <MyMainButton altName="login">login</MyMainButton>
            </form>
        </MyPaper>
    )
}

export default LoginComponent