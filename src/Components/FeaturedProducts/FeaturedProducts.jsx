import React from 'react'
import { SectionTitle, SingleProduct } from '../Common';
import { Container } from '@mui/material'
import Slider from "react-slick";
import { Arrows } from './Style'

const PrevArrow = ({ onClick }) => {
    return (
        <Arrows onClick={onClick}>p<br />r<br />e<br />v</Arrows>
    )
}

const NextArrow = ({ onClick }) => {
    return (
        <Arrows type="next" onClick={onClick}>n<br />e<br />x<br />t</Arrows>
    )
}

const FeaturedProducts = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px' }}>
            <SectionTitle text="Featured Products" variant="h2" />
            <Slider {...settings} style={{ padding: '10px 15px 20px' }}>
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
                <SingleProduct />
            </Slider>
        </Container>
    )
}

export default FeaturedProducts