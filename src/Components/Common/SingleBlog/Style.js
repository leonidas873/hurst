import { styled } from '@mui/system';
import { Typography, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

export const MyPaper = styled(Paper)({
    padding: '25px',
    position: 'relative',
    color: 'inherit',
    maxWidth: '450px',
    margin: '0 auto',

    '&:hover #interactions': {
        bottom: 0,
        opacity: 1,
    }
})

export const LinkContainer = styled('div')({
    position: 'relative',
    overflow: 'hidden',
})

export const InteractionContainer = styled('div')({
    position: 'absolute',
    left: 0,
    bottom: '-40px',
    width: '100%',
    transition: 'all .3s ease 0s',
    backgroundColor: 'rgba(255,255,255,.8)',
    padding: '12px 0',
    textAlign: 'center',
    opacity: 0,
})

export const MySocialLink = styled(Link)({
    color: '#444',
    display: 'inline-block',
    float: 'none',
    fontSize: '12px',
    lineHeight: '14px',
    marginRight: '20px',
    transition: 'all .3s ease 0s',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',

    '&:hover': {
        color: '#c87065'
    },

    '&:hover svg': {
        color: '#c87065'
    },

    '& svg': {
        margin: '0 8px 0 2px',
        transition: 'all .3s ease 0s',
    }
})

export const BlogHeader = styled('div')({
    display: 'flex',
    padding: '30px 0 10px',
})

export const Number = styled('div')({
    border: '1px solid #d6948c',
    height: '40px',
    lineHeight: '38px',
    textAlign: 'center',
    width: '40px',
    float: 'left',

    '& span': {
        fontSize: '20px',
        fontWeight: '700',
        color: '#c87065',
        lineHeight: '38px',
        textAlign: 'center',
    }
})

export const HeaderDetails = styled('div')({
    paddingLeft: '10px',
    float: 'left',

    '& p': {
        fontWeight: '700',
        color: '#c87065',
        textTransform: 'uppercase',
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

    '&:hover': {
        color: '#c8a165'
    }
})

export const ReadMore = styled(Link)({
    display: 'inline-block',
    color: '#c87065',
    fontWeight: '700',
    transition: 'all .3s ease 0s',
    textDecoration: 'none',
    paddingTop: '15px',

    '&:hover': {
        color: '#c8a165',
        outline: '0 none',
    }
})

