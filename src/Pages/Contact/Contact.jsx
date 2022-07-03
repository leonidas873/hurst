import React from 'react'
import { Navbar, HeroBanner, Footer, ContactComponent, } from '../../Components'

const Contact = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner text="contact us" breadcrumbs={{ current: 'contact us', links: [{ text: 'home', href: '/' }] }} />
            <ContactComponent />
            <Footer />
        </div>
    )
}

export default Contact