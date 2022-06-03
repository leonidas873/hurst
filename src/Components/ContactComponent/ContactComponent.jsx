import React from 'react'
import { Container, Grid } from '@mui/material'
import { MyPaper, MyMainButton } from './Style'
import { IoLocationSharp } from 'react-icons/io5'
import { HiPhone } from 'react-icons/hi'
import { RiMessage2Fill } from 'react-icons/ri'

const ContactComponent = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <MyPaper elevation={0}>
                <Grid container spacing={3}>
                    <Grid item md={4}>
                        <h4>CONTACT DETAILS</h4>
                        <ul>
                            <li>
                                <i>
                                    <IoLocationSharp />
                                </i>
                                <span>28 Green Tower, Street Name,</span>
                                <span>New York City, USA</span>
                            </li>
                            <li>
                                <i>
                                    <HiPhone />
                                </i>
                                <span>+880 1234 123456</span>
                                <span>+880 1234 123456</span>
                            </li>
                            <li>
                                <i>
                                    <RiMessage2Fill />
                                </i>
                                <span>company-email@gmail.com</span>
                                <span>your-email@gmail.com</span>
                            </li>
                        </ul>
                        <form action="#">
                            <h4>SEND MESSAGE</h4>
                            <input type="text" name='name' placeholder='Your name here...' />
                            <input type="text" name='email' placeholder='Your email here...' />
                            <textarea name="comment" placeholder='Your comment here...'></textarea>
                            <MyMainButton altName="submit message">submit message</MyMainButton>
                        </form>
                    </Grid>
                    <Grid item md={8}>
                        asd
                    </Grid>
                </Grid>
            </MyPaper>
        </Container>
    )
}

export default ContactComponent