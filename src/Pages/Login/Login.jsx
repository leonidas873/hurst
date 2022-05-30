import React from 'react'
import { Container, Grid } from '@mui/material'
import { Navbar, Footer, HeroBanner, LoginComponent, RegisterComponent, } from '../../Components'

const Login = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner text="registration" breadcrumbs={{ current: 'registration', links: [{ text: 'home', href: '/' }] }} />
            <Container maxWidth="lg" sx={{ marginTop: '80px', marginBottom: '80px' }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <LoginComponent />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <RegisterComponent />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
}

export default Login