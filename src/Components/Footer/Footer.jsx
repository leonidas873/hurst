import React from 'react'
import { MyContainer, Title, Myli, MyliSmall, MyInput, MyLink, PaymentLink, MyGrid } from './Style'
import { Container, Grid, } from '@mui/material'
import { MainButton } from '../Common'
import { BiRadioCircleMarked } from 'react-icons/bi'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#eee', }}>
            <MyContainer maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={4} sm={6} xs={12}>
                        <Title>contact us</Title>
                        <ul>
                            <Myli>
                                <span>Address:</span>
                                28 Green Tower, Street Name, <br /> New York City, USA
                            </Myli>
                            <Myli>
                                <span>Cell-Phone:</span>
                                012345 - 123456789
                            </Myli>
                            <Myli>
                                <span>Email:</span>
                                your-email@gmail.com
                            </Myli>
                        </ul>
                    </Grid>
                    <Grid item md={2} sm={3} xs={6}>
                        <Title>accounts</Title>
                        <ul>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    my account
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    my wishlist
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    my cart
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    sign in
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    checkout
                                </MyLink>
                            </MyliSmall>
                        </ul>
                    </Grid>
                    <Grid item md={2} sm={3} xs={6}>
                        <Title>shipping</Title>
                        <ul>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    new products
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    top sellers
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    Manufactirers
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    suppliers
                                </MyLink>
                            </MyliSmall>
                            <MyliSmall>
                                <MyLink to='/sample'>
                                    <BiRadioCircleMarked />
                                    specials
                                </MyLink>
                            </MyliSmall>
                        </ul>
                    </Grid>
                    <Grid item md={4} sm={12}>
                        <Title>email newsletters</Title>
                        <form action="">
                            <MyInput type='text' placeholder="Email Address..." />
                            <MainButton name="subscribe" altName="subscribe" />
                        </form>
                    </Grid>
                </Grid>
            </MyContainer>
            <Container maxWidth="lg">
                <MyGrid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <p>© coded by React Team. 2021. All Rights Reserved.</p>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <PaymentLink to="/paypal">
                            <img src="https://template.hasthemes.com/hurst-v1/hurst/img/payment/1.png" alt="paypal" />
                        </PaymentLink>
                        <PaymentLink to="/discover">
                            <img src="https://template.hasthemes.com/hurst-v1/hurst/img/payment/2.png" alt="discover" />
                        </PaymentLink>
                        <PaymentLink to="/visa">
                            <img src="https://template.hasthemes.com/hurst-v1/hurst/img/payment/3.png" alt="visa" />
                        </PaymentLink>
                        <PaymentLink to="/cirrus">
                            <img src="https://template.hasthemes.com/hurst-v1/hurst/img/payment/4.png" alt="cirrus" />
                        </PaymentLink>
                    </Grid>
                </MyGrid>
            </Container>
        </div>
    )
}

export default Footer