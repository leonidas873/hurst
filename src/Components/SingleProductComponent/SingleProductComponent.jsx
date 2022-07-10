import React, { useState } from 'react'
import { Container, Grid, Tab, } from '@mui/material'
import { MyPaper, MyTabs, ImageContainer, Title, MyDialog, MyTabPanel, ModalDesc, Arrows, DescHeader, MyRating, Details, ColorProperty, SizeProperty, FlexContainer, AmountContainer, MySlider, ArrowsDetails } from './Style'
import Slider from "react-slick";
import { AiOutlineZoomIn, AiOutlineClose } from 'react-icons/ai'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi'
import { ProductActionsComponent, SingleReview } from '../Common';
import LeaveReview from '../LeaveReview/LeaveReview';

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

const reviewArray = [
    {
        key: 1,
        src: 'https://template.hasthemes.com/hurst-v1/hurst/img/reviewer/1.jpg',
        name: 'GERALD BARNES',
        time: '27 Jun, 2021 at 2:30pm',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.',
    },
    {
        key: 2,
        src: 'https://template.hasthemes.com/hurst-v1/hurst/img/reviewer/1.jpg',
        name: 'GERALD BARNES',
        time: '27 Jun, 2021 at 2:30pm',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.',
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

const PrevArrowDetails = ({ onClick }) => {
    return (
        <ArrowsDetails onClick={onClick}>
            <HiOutlineChevronLeft />
        </ArrowsDetails>
    )
}

const NextArrowDetails = ({ onClick }) => {
    return (
        <ArrowsDetails type="next" onClick={onClick}>
            <HiOutlineChevronRight />
        </ArrowsDetails>
    )
}

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <MyTabPanel>
                    {children}
                </MyTabPanel>
            )}
        </div>
    );
}

const SingleProductComponent = ({productData}) => {

    const [visible, setVisible] = useState(false)
    const [amount, setAmount] = useState(productData.quantity)

    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const settingsDetails = {
        dots: false,
        infinite: true,
        focusOnSelect: true,
        arrows: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrowDetails />,
        nextArrow: <NextArrowDetails />,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                }
            },
        ],
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

    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `tab-${index}`,
            'aria-controls': `tabpanel-${index}`,
        };
    }

    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <MyPaper sx={{ marginBottom: '30px' }} elevation={0}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <ImageContainer>
                            <Slider {...settings}>
                                {
                                    imageArray.map(item =>
                                        <img key={item.key} src={item.src} alt="product" />
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
                                                    alt="product"
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
                            <h4>{productData.name}</h4>
                            <div>
                                <MyRating name="read-only" value="3" readOnly />
                                <span>(27 Rating)</span>
                            </div>
                        </DescHeader>
                        <Details>
                            <span>$ {productData.price}</span>
                            <p>{productData.description}</p>
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
                        <MySlider {...settingsDetails}>
                            {
                                imageArray.map(item =>
                                    <img key={item.key} src={item.src} alt="product" />
                                )
                            }
                        </MySlider>
                    </Grid>
                </Grid>
            </MyPaper>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <MyTabs value={value} onChange={handleTabChange} orientation="vertical">
                        <Tab label="Describtion" {...a11yProps(0)} />
                        <Tab label="Reviews" {...a11yProps(1)} />
                        <Tab label="Information" {...a11yProps(2)} />
                        <Tab label="Tags" {...a11yProps(3)} />
                    </MyTabs>
                </Grid>
                <Grid item xs={12} md={9}>
                    <MyPaper elevation={0}>
                        <TabPanel value={value} index={0}>
                            <Title>description</Title>
                            <p>{productData.description}</p> </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Title>customer review</Title>
                            {reviewArray.map(item =>
                                <SingleReview
                                    key={item.key}
                                    src={item.src}
                                    name={item.name}
                                    time={item.time}
                                    text={item.text}
                                />
                            )}
                            <LeaveReview />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Title>product information</Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            <Title>tags</Title>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                        </TabPanel>
                    </MyPaper>
                </Grid>
            </Grid>
        </Container >
    )
}

export default SingleProductComponent