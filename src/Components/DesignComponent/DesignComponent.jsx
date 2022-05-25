import React from 'react'
import { Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { Price, Tag, BuyNow, Desc, MyPaper, Banner } from './Style'

const DesignComponent = () => {

    const currentYear = new Date().getFullYear()

    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px', overflow: 'hidden' }}>
            <Grid container spacing={2}>
                <Grid item sm={12} md={5} sx={{ position: 'relative' }}>
                    <MyPaper elevation={0}>
                        <Link to="/">
                            <img src="https://template.hasthemes.com/hurst-v1/hurst/img/banner/3.jpg" alt="banner" width="100%" />
                        </Link>
                        <Tag>New</Tag>
                        <Price>$ 56.20</Price>
                        <Desc>
                            <Link to="/">Product name</Link>
                            <p>Furniture</p>
                        </Desc>
                        <BuyNow altName="Buy now">Buy now</BuyNow>
                    </MyPaper>
                </Grid>
                <Grid item sm={12} md={7} sx={{ position: 'relative' }}>
                    <MyPaper elevation={0}>
                        <Link to="/">
                            <img src="https://template.hasthemes.com/hurst-v1/hurst/img/banner/4.jpg" alt="banner" width="100%" />
                        </Link>
                        <Banner to="/">design by <br /> hurst <br /> modern <br /><span>-{currentYear}</span></Banner>
                    </MyPaper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DesignComponent