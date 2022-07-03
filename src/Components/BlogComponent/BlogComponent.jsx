import React from 'react'
import { Box, Container, Grid, Pagination, PaginationItem, Slider } from '@mui/material'
import { CategoriesPaper, CategoriesContainer, SubList, PriceRange, SizeContainer, ColorContainer, Results, PaginationPaper } from './Style'
import { Link, useLocation } from 'react-router-dom';
import SingleFilter from '../SingleFilter/SingleFilter';
import { SingleBlog } from '../Common';

const colorData = [
    {
        color: '#ffa07a',
        name: 'LightSalmon',
        number: '12',
    },
    {
        color: '#e9967a',
        name: 'Dark Salmon',
        number: '20',
    },
    {
        color: '#fe5858',
        name: 'Tomato',
        number: '59',
    },
    {
        color: '#00b2ee',
        name: 'Deep Sky Blue',
        number: '45',
    },
    {
        color: '#00eeb3',
        name: 'Electric Purple',
        number: '78',
    },
    {
        color: '#8dc63f',
        name: 'Atlantis',
        number: '10',
    },
    {
        color: '#c38b4b',
        name: 'Deep Lilac',
        number: '15',
    },
]

function valuetext(value) {
    return `${value}°C`;
}

const BlogComponent = () => {

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get('page') || '1', 10);

    return (
        <Container maxWidth="lg" sx={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <CategoriesPaper elevation={0}>
                <SingleFilter name="Categories">
                    <CategoriesContainer>
                        <ul>
                            <li>
                                <Link to="/">Chair</Link>
                            </li>
                            <li>
                                <Link to="/">Furniture</Link>
                                <SubList>
                                    <li>
                                        <Link to="/">Men Bag</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Shoes</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Watch</Link>
                                    </li>
                                    <li>
                                        <Link to="/">T-Shirt</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Shirt</Link>
                                    </li>
                                </SubList>
                            </li>
                            <li>
                                <Link to="/">Accessories</Link>
                            </li>
                            <li>
                                <Link to="/">Top Brands</Link>
                            </li>
                            <li>
                                <Link to="/">Jewelry</Link>
                            </li>
                        </ul>
                    </CategoriesContainer>
                </SingleFilter>
                <SingleFilter name="Price">
                    <PriceRange>
                        <div>
                            <h5>Your Range:</h5>
                            <input value={`$${value[0]} - $${value[1]}`} type="text" id="amount" placeholder='Add Your Price' />
                        </div>
                        <Slider
                            size="small"
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            sx={{ overflow: 'hidden', color: '#c87065' }}
                        />
                    </PriceRange>
                </SingleFilter>
                <SingleFilter name="Color">
                    <ColorContainer>
                        <ul>
                            {colorData.map((item) =>
                                <li>
                                    <Link to="/">
                                        <span style={{ backgroundColor: item.color }}></span>
                                        {item.name}
                                        <p>{item.number}</p>
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </ColorContainer>
                </SingleFilter>
                <SingleFilter name="Size">
                    <SizeContainer>
                        <ul>
                            <li>
                                <Link to="/">M</Link>
                            </li>
                            <li>
                                <Link to="/">S</Link>
                            </li>
                            <li>
                                <Link to="/">L</Link>
                            </li>
                            <li>
                                <Link to="/">SL</Link>
                            </li>
                            <li>
                                <Link to="/">XL</Link>
                            </li>
                        </ul>
                    </SizeContainer>
                </SingleFilter>
                <Results>Showing 01-09 of 17 Results</Results>
            </CategoriesPaper>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <SingleBlog />
                </Grid>
            </Grid>
            <PaginationPaper elevation={0}>
                <Pagination
                    page={page}
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`/blog${item.page === 1 ? '' : `?page=${item.page}`}`}
                            {...item}
                        />
                    )}
                />
            </PaginationPaper>
        </Container>
    )
}

export default BlogComponent