import React from 'react'
import Slider from "react-slick";
import { Container } from '@mui/material'
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const ImageContainer = styled('div')({
    display: 'flex !important',
    justifyContent: 'center',
    width: '293px',
    height: '100px',
    lineHeight: '100px',

    '& a': {
        display: 'inline-block',
        height: '100px',
        lineHeight: '100px',
    },

    '& img': {
        display: 'inline-block',
        width: '100%',
        height: 'auto',
        verticalAlign: 'middle'
    }
})

const Brand = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <Container
            maxWidth="lg"
            sx={{
                marginTop: '80px',
                marginBottom: '-50px',
                overflow: 'hidden',
            }}
        >
            <Slider
                {...settings}
                style={{
                    boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
                    backgroundColor: 'white',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <ImageContainer>
                    <Link to="/">
                        <img src="https://template.hasthemes.com/hurst-v1/hurst/img/brand/2.png" alt="brand" />
                    </Link>
                </ImageContainer>
                <ImageContainer>
                    <Link to="/">
                        <img src="https://template.hasthemes.com/hurst-v1/hurst/img/brand/3.png" alt="brand" />
                    </Link>
                </ImageContainer>
                <ImageContainer>
                    <Link to="/">
                        <img src="https://template.hasthemes.com/hurst-v1/hurst/img/brand/4.png" alt="brand" />
                    </Link>
                </ImageContainer>
                <ImageContainer>
                    <Link to="/">
                        <img src="https://template.hasthemes.com/hurst-v1/hurst/img/brand/5.png" alt="brand" />
                    </Link>
                </ImageContainer>
                <ImageContainer>
                    <Link to="/">
                        <img src="https://template.hasthemes.com/hurst-v1/hurst/img/brand/1.png" alt="brand" />
                    </Link>
                </ImageContainer>
            </Slider>
        </Container>
    )
}

export default Brand