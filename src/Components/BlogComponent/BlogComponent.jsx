import React from 'react'
import { Box, Container, Slider } from '@mui/material'
import { CategoriesPaper, CategoriesContainer, SubList, PriceRange, SizeContainer, ColorContainer, Results } from './Style'
import { Link } from 'react-router-dom';
import SingleFilter from '../SingleFilter/SingleFilter';

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
        </Container>
    )
}

export default BlogComponent