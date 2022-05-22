import React from 'react'
import { Navbar, HeroSlider, PurchaseOnline, Footer, FeaturedProducts } from '../../Components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <FeaturedProducts />
            <PurchaseOnline />
            <Footer />
        </div>
    )
}

export default Home