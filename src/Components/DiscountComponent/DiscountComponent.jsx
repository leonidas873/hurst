import React from 'react'
import { Container, Grid, Paper } from '@mui/material'
import Slider from "react-slick";
import { ContentContainer, Details, FlexContainer, UpCommingDetails, CountDown } from './Style';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const DiscountComponent = () => {

    const discountData = [
        {
            discount: '50',
            src: 'https://template.hasthemes.com/hurst-v1/hurst/img/discount/5.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam repudiandae veniam doloremque perferendis accusamus perspiciatis et quis, eaque cumque quasi commodi adipisci minima fugiat ex, delectus voluptate. Odio, aliquam.',
        },
        {
            discount: '70',
            src: 'https://template.hasthemes.com/hurst-v1/hurst/img/discount/5.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam repudiandae veniam doloremque perferendis accusamus perspiciatis et quis, eaque cumque quasi commodi adipisci minima fugiat ex, delectus voluptate. Odio, aliquam.',
        },
        {
            discount: '50',
            src: 'https://template.hasthemes.com/hurst-v1/hurst/img/discount/5.jpg',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam repudiandae veniam doloremque perferendis accusamus perspiciatis et quis, eaque cumque quasi commodi adipisci minima fugiat ex, delectus voluptate. Odio, aliquam.',
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container maxWidth="lg" sx={{ overflow: 'hidden' }}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={8} sx={{ overflow: 'hidden' }}>
                    <Slider
                        {...settings}
                        style={{
                            boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
                            backgroundColor: 'white',
                            position: 'relative',
                            zIndex: 1,
                        }}
                    >
                        {discountData.map((item) => (
                            <ContentContainer>
                                <FlexContainer>
                                    <Link to="/">
                                        <img src={item.src} alt="discount" />
                                    </Link>
                                    <Details>
                                        <h1>Discount {item.discount}%</h1>
                                        <p>{item.text}</p>
                                        <Link to="/">
                                            get discount
                                            <HiOutlineArrowNarrowRight />
                                        </Link>
                                    </Details>
                                </FlexContainer>
                            </ContentContainer>
                        ))}
                    </Slider>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Paper
                        elevation={0}
                        sx={{
                            padding: '20px',
                            boxShadow: '0 0 10px rgb(0 0 0 / 10%)',
                        }}
                    >
                        <Link to="/">
                            <img style={{ display: 'block', margin: '0 auto' }} src="https://template.hasthemes.com/hurst-v1/hurst/img/product/up-comming.jpg" alt="discount" />
                        </Link>
                        <UpCommingDetails>
                            <Link to="/">Indoor Furniture</Link>
                            <h4>$200.00</h4>
                        </UpCommingDetails>
                        <CountDown>
                            <div>
                                <span>136</span>
                                <p>days</p>
                            </div>
                            <div>
                                <span>9</span>
                                <p>hour</p>
                            </div>
                            <div>
                                <span>05</span>
                                <p>min</p>
                            </div>
                        </CountDown>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    )
}

export default DiscountComponent