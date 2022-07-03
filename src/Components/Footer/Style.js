import { styled } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const MyContainer = styled(Container)({
    paddingTop: '130px',
    paddingBottom: '75px',
})

export const Title = styled(Typography)({
    color: '#434343',
    fontSize: '20px',
    fontWeight: '900',
    lineHeight: '15px',
    marginBottom: '25px',
    paddingBottom: '10px',
    textTransform: 'uppercase',
    position: 'relative',

    '&::after': {
        content: '""',
        position: 'absolute',
        left: '0',
        bottom: '0',
        width: '50px',
        height: '2px',
        backgroundColor: '#c87065',
    }
})

export const Myli = styled('li')({
    display: 'block',
    overflow: 'hidden',
    paddingBottom: '15px',

    '& span': {
        float: 'left',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '24px',
        width: '95px',
    }
})

export const MyliSmall = styled('li')({
    display: 'block',
    overflow: 'hidden',
    paddingBottom: '0',

    '& span': {
        float: 'left',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '24px',
        width: '95px',
    }
})

export const MyInput = styled('input')({
    background: '#f6f6f6',
    border: 'medium none',
    boxShadow: 'none',
    color: '#999',
    height: '40px',
    marginBottom: '15px',
    padding: '0 20px',
    transition: 'all 0.5s ease 0s',
    width: '100%',
    outline: 'none',
})

export const MyLink = styled(Link)({
    color: '#666',
    lineHeight: '27px',
    textDecoration: 'none',
    transition: 'all .3s ease 0s',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',

    '& svg': {
        display: 'inline-block',
        marginRight: '5px',
        fontSize: '18px',
        transition: 'all .3s ease 0s',
    },

    '&:hover': {
        color: '#c8a165',
    },

    '&:hover svg': {
        color: '#c8a165',
    }

})

export const PaymentLink = styled(Link)({
    marginLeft: '10px'
})

export const MyGrid = styled(Grid)((props) => ({
    lineHeight: '60px',

    '& .MuiGrid-item': {
        display: 'flex',
        alignItems: 'center',
    },

    '& .MuiGrid-item:last-child': {
        justifyContent: 'flex-end',
    },

    '& .MuiGrid-item img': {
        verticalAlign: 'middle',
    },

    [props.theme.breakpoints.down("sm")]: {
        '& .MuiGrid-item': {
            justifyContent: 'center !important',
        }
    },
}))