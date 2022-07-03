import React from 'react'
import { MyPaper, MyMainButton } from './Style'

const RegisterComponent = () => {
    return (
        <MyPaper elevation={0}>
            <h4>new customers</h4>
            <p>If you have an account with us, Please login!</p>
            <form action="">
                <input type="text" placeholder="Your name here..." name="name" />
                <input type="text" placeholder="Email address here..." name="email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
                <p>
                    <input type="checkbox" name="newsletter" style={{ margin: '4px 10px 0px 0' }} />
                    <label htmlFor="newsletter">Sign up for our newsletter!</label>
                </p>
                <MyMainButton altName="register">register</MyMainButton>
            </form>
        </MyPaper>
    )
}

export default RegisterComponent