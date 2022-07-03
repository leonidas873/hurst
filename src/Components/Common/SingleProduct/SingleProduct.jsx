import React from 'react'
import { Link } from 'react-router-dom'
import { MyPaper, ProductTitle, MyRating, Sale, Tag, Price } from './Style'
import ProductActionsComponent from '../ProductActionsComponent/ProductActionsComponent'

const SingleProduct = () => {
    return (
        <MyPaper elevation="0">
            <Link to="/product">
                <img src="https://template.hasthemes.com/hurst-v1/hurst/img/product/6.jpg" width="100%" alt="product" />
            </Link>
            <ProductTitle variant='h4'>dummy Product name</ProductTitle>
            <MyRating name="read-only" value="3" readOnly />
            <ProductActionsComponent />
            {/* <Sale>Sale</Sale> */}
            <Tag>New</Tag>
            <Price>$ 56.20</Price>
        </MyPaper>
    )
}

export default SingleProduct