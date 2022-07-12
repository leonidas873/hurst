import React, { useState } from 'react';
import { Box, Toolbar, Badge, Popover, List, ListItemButton, Drawer, Typography, Menu, Fade } from '@mui/material'
import { MyAppBar, Image, MyListItem, MyListItemText, AllProducts, SingleProduct, ImageContainer, ProductInfo, MyIconButton, CloseIconButton, Total, RightIconButton } from './Style';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { FiLogIn, FiLogOut } from 'react-icons/fi'


const navbarList = [{ name: 'home', path: '/' }, { name: 'shop', path: '/shop' }, { name: 'lookbook', path: '/lookbook' }, { name: 'blog', path: '/blog' }, { name: 'about us', path: '/aboutUs' }, { name: 'contact', path: '/contact' }];


const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false)
    const navigate = useNavigate();
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null)
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <MyAppBar position="static">
                    <Toolbar sx={{ py: 3, width: '100%', justifyContent: 'space-between' }}>
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
                                    {navbarList.map((item) => (
                                        <MyListItem key={item.path} disablePadding>
                                            <ListItemButton onClick={() => navigate(item.path)}>
                                                <MyListItemText primary={item.name} />
                                            </ListItemButton>
                                        </MyListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                        <Link to="/" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                            <Image src="https://template.hasthemes.com/hurst-v1/hurst/img/logo/logo.png" alt="logo" />
                        </Link>
                        {
                            localStorage.getItem('token') ?
                                <div>
                                    <span>{JSON.parse(localStorage.getItem('user'))}</span>
                                    <RightIconButton
                                        sx={{ ml: 2 }}
                                        onClick={() => {
                                            localStorage.removeItem('token');
                                            localStorage.removeItem('user');
                                            window.location.reload()
                                        }}
                                    >
                                        <FiLogOut />
                                    </RightIconButton>
                                    <RightIconButton
                                        size="medium"
                                        edge="start"
                                        aria-label="cart"
                                        sx={{ ml: 2 }}
                                        onMouseEnter={handleOpen}
                                    >
                                        <Badge badgeContent={4}>
                                            <FaShoppingCart />
                                        </Badge>
                                    </RightIconButton>
                                </div>
                                :
                                <>
                                    <RightIconButton
                                        sx={{ ml: 2 }}
                                        onClick={() => {
                                            navigate('/login')
                                        }}
                                    >
                                        <FiLogIn />
                                    </RightIconButton>
                                </>
                        }
                        <Menu
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => setAnchorEl(null)}
                            TransitionComponent={Fade}
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
                        </Menu>

                    </Toolbar>
                </MyAppBar>
            </Box>
        </>
    )
}

export default Navbar