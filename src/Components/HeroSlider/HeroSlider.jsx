import React from 'react'
import Slider from 'react-slick'
import { Content, MySlide, BuyNow, Arrows } from './Style';
import { motion } from "framer-motion"
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const PrevArrow = ({ onClick }) => {
    return (
        <Arrows onClick={onClick}>
            <BiChevronLeft />
        </Arrows>
    )
}

const NextArrow = ({ onClick }) => {
    return (
        <Arrows type="next" onClick={onClick}>
            <BiChevronRight />
        </Arrows>
    )
}

const HeroSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        fade: true,
        autoplay: true,
        lazyLoad: true,
        speed: 5000,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <Slider {...settings} style={{ overflow: 'hidden' }}>
            <MySlide>
                <img src="https://template.hasthemes.com/hurst-v1/hurst/img/slider/slider-2/3.jpg" width="100%" alt="hero" />
                <Content>
                    <motion.h3
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 0.5, duration: 1, }}
                    >
                        WELCOME TO OUR
                    </motion.h3>
                    <motion.h2
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 1, duration: 1, }}
                    >
                        ELEGENT <br /> FURNITURE
                    </motion.h2>
                    <motion.span
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 1.5, duration: 1, }}
                    >
                        GALLERY 2021
                    </motion.span>
                    <motion.p
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 2, duration: 1, }}
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text.
                    </motion.p>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 2.5, duration: 1, }}
                    >
                        <BuyNow altName="Buy now">Buy now</BuyNow>
                    </motion.div>
                </Content>
            </MySlide>
            <MySlide>
                <img src="https://template.hasthemes.com/hurst-v1/hurst/img/slider/slider-2/2.jpg" width="100%" alt="hero" />
                <Content>
                    <motion.h3
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 0.5, duration: 1, }}
                    >
                        WELCOME TO OUR
                    </motion.h3>
                    <motion.h2
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 1, duration: 1, }}
                    >
                        ELEGENT <br /> FURNITURE
                    </motion.h2>
                    <motion.span
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 1.5, duration: 1, }}
                    >
                        GALLERY 2021
                    </motion.span>
                    <motion.p
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 2, duration: 1, }}
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text.
                    </motion.p>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 2.5, duration: 1, }}
                    >
                        <BuyNow altName="Buy now">Buy now</BuyNow>
                    </motion.div>
                </Content>
            </MySlide>
            <MySlide>
                <img src="https://template.hasthemes.com/hurst-v1/hurst/img/slider/slider-2/3.jpg" width="100%" alt="hero" />
                <Content>
                    <motion.h3
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 0.5, duration: 1, }}
                    >
                        WELCOME TO OUR
                    </motion.h3>
                    <motion.h2
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 1, duration: 1, }}
                    >
                        ELEGENT <br /> FURNITURE
                    </motion.h2>
                    <motion.span
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 1.5, duration: 1, }}
                    >
                        GALLERY 2021
                    </motion.span>
                    <motion.p
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 2, duration: 1, }}
                    >
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there hidden in the middle of text.
                    </motion.p>
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', delay: 2.5, duration: 1, }}
                    >
                        <BuyNow altName="Buy now">Buy now</BuyNow>
                    </motion.div>
                </Content>
            </MySlide>
        </Slider>
    )
}

export default HeroSlider