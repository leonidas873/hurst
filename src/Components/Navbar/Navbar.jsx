import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Badge, Popover, List, ListItem, ListItemButton, ListItemText, Drawer, Typography } from '@mui/material'
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaShoppingCart } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Image = styled('img')({
    display: 'block',
    margin: '0 auto',
});

const MyAppBar = styled(AppBar)({
    color: 'black',
    backgroundColor: '#c5c5c5',
    boxShadow: 'none',
})

const MyListItem = styled(ListItem)({
    background: 'linear-gradient(to left, white 50%, #c8a165 50%) right',
    backgroundSize: '200%',
    transition: 'all .3s ease 0s',

    '&:hover': {
        backgroundPosition: 'left'
    },

    '&:hover .MuiTypography-root': {
        color: 'white'
    }
})

const MyListItemText = styled(ListItemText)({
    '& .MuiTypography-root': {
        textTransform: 'uppercase',
        paddingLeft: '70px',
        color: '#666',
        display: 'block',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '45px',
        position: 'relative',
        zIndex: '1',
    }
})

const AllProducts = styled('div')({
    padding: '10px 0'
})

const SingleProduct = styled('div')({
    padding: '10px 30px 10px 20px'
})

const ImageContainer = styled('div')({
    float: 'left',
    width: '90px',
})

const ProductInfo = styled('div')({
    float: 'left',
    paddingLeft: '20px',
    textAlign: 'left',

    '&: a': {
        fontSize: '14px',
        textTransform: 'uppercase',
    }
})

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false)

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        // setAnchorEl(null)
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <MyAppBar position="static">
                    <Toolbar sx={{ py: 3, }}>
                        <IconButton
                            color="inherit"
                            sx={{ mr: 2 }}
                            onClick={() => setMenuOpen(true)}
                        >
                            <GiHamburgerMenu />
                        </IconButton>
                        <Drawer
                            open={menuOpen}
                            onClose={() => setMenuOpen(false)}
                        >
                            <Box
                                sx={{ width: 250, py: 2, }}
                                role="presentation"
                            >
                                <IconButton
                                    color="inherit"
                                    sx={{ mx: 2, mb: 5 }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <AiOutlineClose />
                                </IconButton>
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
                        <IconButton
                            size="medium"
                            edge="start"
                            color="inherit"
                            aria-label="cart"
                            sx={{ ml: 2 }}
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            <Badge badgeContent={4} color="secondary">
                                <FaShoppingCart />
                            </Badge>
                        </IconButton>
                        <Popover
                            id="mouse-over-popover"
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
                            disableRestoreFocus
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
                                            <IconButton
                                                color="inherit"
                                            >
                                                <AiOutlineClose />
                                            </IconButton>
                                        </ProductInfo>
                                    </SingleProduct>
                                </AllProducts>
                            </Box>
                        </Popover>
                    </Toolbar>
                </MyAppBar>
            </Box>
        </>
    )
}

export default Navbar