import React from 'react'
import { Navbar, HeroSlider, PurchaseOnline, Footer, FeaturedProducts, FromTheBlog } from '../../Components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <FeaturedProducts />
            <PurchaseOnline />
            <FromTheBlog />
            <Footer />
        </div>
    )
}

export default Home