import React from 'react'
import { Navbar, HeroSlider, PurchaseOnline, Footer, FeaturedProducts, FromTheBlog, Brand } from '../../Components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <FeaturedProducts />
            <PurchaseOnline />
            <FromTheBlog />
            <Brand />
            <Footer />
        </div>
    )
}

export default Home