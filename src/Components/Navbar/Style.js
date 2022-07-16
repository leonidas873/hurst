import { styled } from '@mui/system';
import { AppBar, IconButton, ListItem, ListItemText, } from '@mui/material'

export const Image = styled('img')({
    display: 'block',
    margin: '0 auto',
});

export const MyAppBar = styled(AppBar)({
    color: 'black',
    backgroundColor: 'white',
    boxShadow: 'none',
})

export const MyListItem = styled(ListItem)({
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

export const MyListItemText = styled(ListItemText)({
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

export const AllProducts = styled('div')({
    padding: '10px 0',
    display: 'flex',
    flexDirection: 'column',
})

export const SingleProduct = styled('div')({
    padding: '10px 30px 10px 20px',
    position: 'relative',
})

export const ImageContainer = styled('div')({
    float: 'left',
    width: '90px',
})

export const ProductInfo = styled('div')({
    float: 'left',
    paddingLeft: '20px',
    textAlign: 'left',

    '& a': {
        fontSize: '14px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: '#666',
        transition: 'all .3s ease 0s',
        margin: '0 0 10px',
        fontWeight: '700',
        lineHeight: '1.2',
    },

    '& a:hover': {
        color: '#C8A165'
    },

    '& p': {
        color: '#999',
    }
})

export const MyIconButton = styled(IconButton)({
    position: 'relative',
    width: '25px',
    height: '25px',

    '& .burgerSpan': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '25px',
        height: '2px',
        backgroundColor: 'black',
        transition: 'all 0.3s',
        zIndex: 1201,
    },

    '& .burgerSpan:nth-child(1)': {
        top: 0,
    },

    '& .burgerSpan:nth-child(2)': {
        top: '50%',
    },

    '& .burgerSpan:nth-child(3)': {
        top: '100%',
    },

    '& .burgerSpan:nth-child(1).animate': {
        transform: 'translate(-100%)',
        opacity: 0,
    },

    '& .burgerSpan:nth-child(2).animate': {
        opacity: 0,
    },

    '& .burgerSpan:nth-child(3).animate': {
        transform: 'translate(100%)',
        opacity: 0,
    },

    '& .closeSpan': {
        position: 'absolute',
        top: '50%',
        left: 0,
        width: '25px',
        height: '2px',
        backgroundColor: 'black',
        transition: 'all 10s',
        transform: 'translate(-100%, -100%) rotate(45deg)',
        opacity: 0,
        zIndex: 1201,
    },

    '& .closeSpan:nth-child(1)': {
        transform: 'translate(-100%, -100%) rotate(45deg)',
    },

    '& .closeSpan:nth-child(2)': {
        transform: 'translate(100%, -100%) rotate(-45deg)',
    },

    '& .closeSpan:nth-child(1).animate': {
        transform: 'translate(0, 0) rotate(45deg)',
        opacity: 1,
    },

    '& .closeSpan:nth-child(2).animate': {
        transform: 'translate(0, 0) rotate(-45deg)',
        opacity: 1,
    },
})

export const CloseIconButton = styled(IconButton)({
    position: 'absolute',
    right: '30px',
    top: '50%',
    transform: 'translateY(-50%)',
})

export const Total = styled('p')({
    color: '#434343',
    fontSize: '16px',
    fontWeight: '900',
    lineHeight: '14px',
    textTransform: 'uppercase',
    textAlign: 'right',
    borderBottom: '1px solid #f6f6f6',
    borderTop: '1px solid #f6f6f6',
    padding: '20px 50px 20px 20px',
})

export const RightIconButton = styled(IconButton)({
    '& .BaseBadge-badge': {
        backgroundColor: '#c87065',
        color: 'white',
    },

    '& svg': {
        color: 'black',
        transition: 'all .5s ease 0s',
    },

    '& svg:hover': {
        color: '#c8a165'
    },
})

export const FlexContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 60px 0',
})