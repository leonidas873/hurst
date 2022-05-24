import React from 'react'
import { Navbar, HeroSlider, PurchaseOnline, Footer, FeaturedProducts, FromTheBlog, Brand, DiscountComponent } from '../../Components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <FeaturedProducts />
            <DiscountComponent />
            <PurchaseOnline />
            <FromTheBlog />
            <Brand />
            <Footer />
        </div>
    )
}

export default Home