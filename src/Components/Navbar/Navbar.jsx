import React, { useState } from 'react';
import { Box, Toolbar, Badge, Popover, List, ListItemButton, Drawer, Typography } from '@mui/material'
import { MyAppBar, Image, MyListItem, MyListItemText, AllProducts, SingleProduct, ImageContainer, ProductInfo, MyIconButton, CloseIconButton, Total, RightIconButton } from './Style';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false)

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null)
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <MyAppBar position="static">
                    <Toolbar sx={{ py: 3, }}>
                        <MyIconButton
                            color="inherit"
                            sx={{ mr: 2, width: '25px', height: '15px' }}
                            onClick={() => {
                                setMenuOpen(true)
                            }}
                        >
                            <span className={menuOpen ? 'animate burgerSpan' : 'burgerSpan'}></span>
                            <span className={menuOpen ? 'animate burgerSpan' : 'burgerSpan'}></span>
                            <span className={menuOpen ? 'animate burgerSpan' : 'burgerSpan'}></span>
                        </MyIconButton>
                        <Drawer
                            open={menuOpen}
                            onClose={() => setMenuOpen(false)}
                        >
                            <Box
                                sx={{ width: 250, py: 2, }}
                                role="presentation"
                            >
                                <MyIconButton
                                    sx={{ m: 2, mb: 5 }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <span className={menuOpen ? 'animate closeSpan' : 'closeSpan'}></span>
                                    <span className={menuOpen ? 'animate closeSpan' : 'closeSpan'}></span>
                                </MyIconButton>
                                <List sx={{ mt: 5 }}>
                                    {['home', 'products', 'lookbook', 'blog', 'about us', 'contact'].map((text) => (
                                        <MyListItem key={text} disablePadding>
                                            <ListItemButton>
                                                <MyListItemText primary={text} />
                                            </ListItemButton>
                                        </MyListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                        <Link to="/" style={{ margin: 'auto' }}>
                            <Image src="https://template.hasthemes.com/hurst-v1/hurst/img/logo/logo.png" alt="logo" />
                        </Link>
                        <RightIconButton
                            size="medium"
                            edge="start"
                            aria-label="cart"
                            sx={{ ml: 2 }}
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <Badge badgeContent={4}>
                                <FaShoppingCart />
                            </Badge>
                        </RightIconButton>
                        <Popover
                            sx={{
                                pointerEvents: 'none',
                                mt: 4,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={handlePopoverClose}
                        >
                            <Box width={500} sx={{ py: 3, px: 2 }}>
                                <Typography
                                    sx={{ textAlign: 'right' }}
                                >
                                    You have <span style={{ color: '#c87065' }}>03 items</span> in your shopping bag
                                </Typography>
                                <AllProducts>
                                    <SingleProduct>
                                        <ImageContainer>
                                            <Link to='/'>
                                                <img src="https://template.hasthemes.com/hurst-v1/hurst/img/cart/1.jpg" alt="product" />
                                            </Link>
                                        </ImageContainer>
                                        <ProductInfo>
                                            <Link to="/">dummy product name</Link>
                                            <p>Price: $ 100.00</p>
                                            <p>Qty: 02 </p>
                                            <CloseIconButton>
                                                <AiOutlineClose color='#ccc' />
                                            </CloseIconButton>
                                        </ProductInfo>
                                    </SingleProduct>
                                    <SingleProduct>
                                        <ImageContainer>
                                            <Link to='/'>
                                                <img src="https://template.hasthemes.com/hurst-v1/hurst/img/cart/1.jpg" alt="product" />
                                            </Link>
                                        </ImageContainer>
                                        <ProductInfo>
                                            <Link to="/">dummy product name</Link>
                                            <p>Price: $ 100.00</p>
                                            <p>Qty: 02 </p>
                                            <CloseIconButton>
                                                <AiOutlineClose color='#ccc' />
                                            </CloseIconButton>
                                        </ProductInfo>
                                    </SingleProduct>
                                </AllProducts>
                                <Total>total: ${"500"}</Total>
                            </Box>
                        </Popover>
                    </Toolbar>
                </MyAppBar>
            </Box>
        </>
    )
}

export default Navbar