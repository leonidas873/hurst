import React from 'react'
import { Navbar, Footer, HeroBanner, BlogComponent, } from '../../Components'

const Blog = () => {
    return (
        <div>
            <Navbar />
            <HeroBanner text="blog" breadcrumbs={{ current: 'blog', links: [{ text: 'home', href: '/' }] }} />
            <BlogComponent />
            <Footer />
        </div>
    )
}

export default Blog