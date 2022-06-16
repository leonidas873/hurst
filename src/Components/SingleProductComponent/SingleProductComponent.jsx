import React, { useState } from 'react'
import { Container, Grid, } from '@mui/material'
import { MyPaper, ImageContainer, MyDialog, ModalDesc, Arrows, DescHeader, MyRating, Details, ColorProperty, SizeProperty, FlexContainer, AmountContainer } from './Style'
import Slider from "react-slick";
import { AiOutlineZoomIn, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { ProductActionsComponent } from '../Common';

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

const colorArray = [
    {
        color: '#ffa07a',
    },
    {
        color: '#e9967a',
    },
    {
        color: '#fe5858',
    },
    {
        color: '#00b2ee',
    },
    {
        color: '#00eeb3',
    },
    {
        color: '#8dc63f',
    },
    {
        color: '#c38b4b',
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
    const [amount, setAmount] = useState(0)

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
                            <Slider {...settings}>
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
                                    <Slider {...settingsModal}>
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
                        <DescHeader>
                            <h4>dummy Product name</h4>
                            <div>
                                <MyRating name="read-only" value="3" readOnly />
                                <span>(27 Rating)</span>
                            </div>
                        </DescHeader>
                        <Details>
                            <span>$ 56.20</span>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have be suffered alteration in some form, by injected humou or randomised words which donot look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                        </Details>
                        <ColorProperty>
                            <ul>
                                <li>
                                    <p>Color</p>
                                </li>
                                {colorArray.map(item =>
                                    <li>
                                        <span onClick={(e) => e.target.classList.toggle('selected')} style={{ backgroundColor: item.color }} />
                                    </li>
                                )}
                            </ul>
                        </ColorProperty>
                        <SizeProperty>
                            <ul>
                                <li>
                                    <p>Size</p>
                                </li>
                                <li>
                                    <span onClick={(e) => e.target.classList.toggle('selected')}>M</span>
                                </li>
                                <li>
                                    <span onClick={(e) => e.target.classList.toggle('selected')}>S</span>
                                </li>
                                <li>
                                    <span onClick={(e) => e.target.classList.toggle('selected')}>L</span>
                                </li>
                                <li>
                                    <span onClick={(e) => e.target.classList.toggle('selected')}>SL</span>
                                </li>
                                <li>
                                    <span onClick={(e) => e.target.classList.toggle('selected')}>XL</span>
                                </li>
                            </ul>
                        </SizeProperty>
                        <FlexContainer>
                            <AmountContainer>
                                <button onClick={() => setAmount(parseInt(amount) > 0 ? parseInt(amount) - 1 : parseInt(amount))}>-</button>
                                <input onChange={(e) => setAmount(e.target.value > 0 ? parseInt(e.target.value) : '')} value={amount} type="number" name="amount" />
                                <button onClick={() => setAmount(parseInt(amount) + 1)}>+</button>
                            </AmountContainer>
                            <ProductActionsComponent />
                        </FlexContainer>
                    </Grid>
                </Grid>
            </MyPaper>
        </Container >
    )
}

export default SingleProductComponent