import React from 'react'
import { Container, Box, Grid } from '@mui/material'
import Tab from '@mui/material/Tab';
import { MyTabs } from './Style'
import { SectionTitle, SingleProduct } from '../Common';

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
                <Box sx={{ p: 3 }}>
                    <Grid container spacing={3}>{children}</Grid>
                </Box>
            )}
        </div>
    );
}

const a11yProps = (index) => {
    return {
        id: `tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PurchaseOnline = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px' }}>
            <SectionTitle text="Purchase Online on Hurst" variant="h2" />
            <MyTabs value={value} onChange={handleChange}>
                <Tab label="New Arrivals" {...a11yProps(0)} />
                <Tab label="Best Seller" {...a11yProps(1)} />
                <Tab label="Most View" {...a11yProps(2)} />
                <Tab label="Discounts" {...a11yProps(3)} />
            </MyTabs>
            <TabPanel value={value} index={0}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <SingleProduct />
                </Grid>
            </TabPanel>
        </Container>
    )
}

export default PurchaseOnline