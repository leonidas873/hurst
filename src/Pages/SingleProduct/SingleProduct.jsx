import React from 'react'
import { Navbar, HeroBanner, Footer, SingleProductComponent, } from '../../Components'

const SingleProduct = () => {
    return (
        <>
            <Navbar />
            <HeroBanner text="single product" breadcrumbs={{ current: 'single product', links: [{ text: 'home', href: '/' }] }} />
            <SingleProductComponent />
            <Footer />
        </>
    )
}

export default SingleProduct