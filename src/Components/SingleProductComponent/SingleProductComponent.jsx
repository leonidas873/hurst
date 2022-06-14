import React, { useState } from 'react'
import { Container, Grid, } from '@mui/material'
import { MyPaper, ImageContainer, MyDialog, ModalDesc, Arrows } from './Style'
import Slider from "react-slick";
import { AiOutlineZoomIn, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'

const imageArray = [
    {
        key: 1,
        src: 'https://template.hasthemes.com/hurst-v1/hurst/img/single-product/medium/1.jpg',
    },
    {
        key: 2,
        src: 'https://template.hasthemes.com/hurst-v1/hurst/img/single-product/medium/2.jpg',

    },
    {
        key: 3,
        src: 'https://template.hasthemes.com/hurst-v1/hurst/img/single-product/medium/3.jpg',

    },
    {
        key: 4,
        src: 'https://template.hasthemes.com/hurst-v1/hurst/img/single-product/medium/4.jpg',
    },
    {
        key: 5,
        src: 'https://template.hasthemes.com/hurst-v1/hurst/img/single-product/medium/5.jpg',
    },
]

const PrevArrow = ({ onClick }) => {
    return (
        <Arrows onClick={onClick}>
            <HiOutlineChevronLeft />
        </Arrows>
    )
}

const NextArrow = ({ onClick }) => {
    return (
        <Arrows type="next" onClick={onClick}>
            <HiOutlineChevronRight />
        </Arrows>
    )
}

const SingleProductComponent = () => {

    const [visible, setVisible] = useState(false)
    const [slideIndex, setSlideIndex] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsModal = {
        dots: false,
        infinite: false,
        arrows: true,
        draggable: false,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <MyPaper elevation={0}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <ImageContainer>
                            <Slider {...settings} beforeChange={(e) => setSlideIndex(e + 1)} >
                                {
                                    imageArray.map(item =>
                                        <img key={item.key} src={item.src} altName="product" />
                                    )
                                }
                            </Slider>
                            <span onClick={() => setVisible(true)}>
                                <AiOutlineZoomIn />
                            </span>
                            <MyDialog onClose={() => setVisible(false)} open={visible}>
                                <div>
                                    <Slider {...settingsModal} initialSlide={slideIndex === imageArray.length ? 0 : slideIndex}>
                                        {imageArray.map((item, index) =>
                                            <>
                                                <img
                                                    width="100%"
                                                    key={item.key}
                                                    src={item.src}
                                                    altName="product"
                                                />
                                                <ModalDesc>
                                                    <div>
                                                        <span>My caption</span>
                                                        <span>Image {index + 1} of {imageArray.length}</span>
                                                    </div>
                                                    <button onClick={() => setVisible(false)}>
                                                        <AiOutlineClose />
                                                    </button>
                                                </ModalDesc>
                                            </>
                                        )}
                                    </Slider>

                                </div>
                            </MyDialog>
                        </ImageContainer>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        asd
                    </Grid>
                </Grid>
            </MyPaper>
        </Container >
    )
}

export default SingleProductComponent