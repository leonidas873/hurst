import React from 'react'
import { Navbar, HeroSlider, PurchaseOnline, Footer, FeaturedProducts, FromTheBlog, Brand, DiscountComponent, DesignComponent } from '../../Components'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSlider />
            <DesignComponent />
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