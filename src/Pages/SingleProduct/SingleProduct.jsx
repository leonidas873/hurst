import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSingleProduct } from '../../api/api';
import { Navbar, HeroBanner, Footer, SingleProductComponent, } from '../../Components'

const SingleProduct = () => {

const [productData, setProductData] = useState(false)
const {id} = useParams();


useEffect(()=>{
    fetchSingleProduct((id)).then(res=>setProductData(res.data))
},[])

    return (
        <>
            <Navbar />
            <HeroBanner text="single product" breadcrumbs={{ current: 'single product', links: [{ text: 'home', href: '/' }] }} />
            {productData && <SingleProductComponent productData={productData}/>}
            <Footer />
        </>
    )
}

export default SingleProduct