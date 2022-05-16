import React from 'react'
import { Link } from 'react-router-dom'
import { MyPaper, ProductTitle, MyRating, ProductActions, Sale, Tag, Price } from './Style'
import { AiOutlineHeart, AiOutlineZoomIn } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { MdAddShoppingCart } from 'react-icons/md'

const SingleProduct = () => {
    return (
        <MyPaper elevation="0">
            <Link to="/product">
                <img src="https://template.hasthemes.com/hurst-v1/hurst/img/product/6.jpg" width="100%" alt="product" />
            </Link>
            <ProductTitle variant='h4'>dummy Product name</ProductTitle>
            <MyRating name="read-only" value="3" readOnly />
            <ProductActions>
                <Link to="/wishlist">
                    <AiOutlineHeart />
                </Link>
                <Link to="/wishlist">
                    <AiOutlineZoomIn />
                </Link>
                <Link to="/wishlist">
                    <BsArrowRepeat />
                </Link>
                <Link to="/wishlist">
                    <MdAddShoppingCart />
                </Link>
            </ProductActions>
            {/* <Sale>Sale</Sale> */}
            <Tag>New</Tag>
            <Price>$ 56.20</Price>
        </MyPaper>
    )
}

export default SingleProduct