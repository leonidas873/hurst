import { styled } from '@mui/system';
import { Typography, Paper, Rating } from '@mui/material';

export const MyPaper = styled(Paper)({
    padding: '15px 15px 25px 15px',
    position: 'relative',

    '&:hover': {
        boxShadow: '0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)',
    }
})

export const ProductTitle = styled(Typography)({
    fontSize: '16px',
    lineHeight: '18px',
    textTransform: 'uppercase',
    fontFamily: 'Bree Serif, serif',
    marginBottom: '5px',
    transition: 'all .3s ease 0s',
    cursor: 'pointer',
    textAlign: 'center',
    paddingTop: '15px',

    '&:hover': {
        color: '#c8a165'
    }
})

export const MyRating = styled(Rating)({
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '1.2rem',
    margin: '5px 0',

    '& span': {
        color: '#c87065',
    }
})

export const ProductActions = styled('div')({
    width: '100%',
    backgroundColor: '#f6f6f6',
    display: 'flex',
    marginTop: '15px',

    '& a': {
        flex: 1,
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        lineHeight: '40px',
        transition: 'all .3s ease 0s',
        position: 'relative',
    },

    '& a::after': {
        background: '#999',
        content: '""',
        height: '16px',
        marginTop: '-8px',
        position: 'absolute',
        right: '0',
        top: '50%',
        width: '2px',
    },

    '& a:last-child::after': {
        display: 'none'
    },

    '& a:hover svg': {
        color: '#c8a165'
    },

    '& svg': {
        transition: 'all .3s ease 0s',
        color: '#666',
    }
})

export const Tag = styled('span')({
    position: 'absolute',
    top: '30px',
    left: '30px',
    zIndex: '2',
    background: '#c8a165',
    borderRadius: '5px',
    color: '#fff',
    height: '25px',
    lineHeight: '25px',
    padding: '0 10px',
    textTransform: 'capitalize',
})

export const Sale = styled('span')({
    position: 'absolute',
    top: '30px',
    left: '30px',
    zIndex: '2',
    background: '#c87065',
    borderRadius: '5px',
    color: '#fff',
    height: '25px',
    lineHeight: '25px',
    padding: '0 10px',
    textTransform: 'capitalize',
})

export const Price = styled('span')({
    position: 'absolute',
    top: '30px',
    right: '30px',
    color: '#c87065',
    fontSize: '18px',
    fontWeight: '700',
    lineHeight: '1',
})