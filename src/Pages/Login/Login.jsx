import React from 'react'
import { Navbar, Footer, HeroBanner, } from '../../Components'

const Login = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner text="registration" breadcrumbs={{ current: 'registration', links: [{ text: 'home', href: '/' }] }} />
            <Footer />
        </div>
    )
}

export default Login