import React from 'react'
import { AiOutlineHeart, AiOutlineZoomIn } from 'react-icons/ai'
import { BsArrowRepeat } from 'react-icons/bs'
import { MdAddShoppingCart } from 'react-icons/md'
import { ProductActions } from './Style'
import { Link } from 'react-router-dom'

const ProductActionsComponent = () => {
    return (
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
    )
}

export default ProductActionsComponent