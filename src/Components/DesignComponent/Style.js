import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { MyButton } from "../Common/MainButton/Style";

export const MyPaper = styled(Paper)({
    '&:hover': {
        boxShadow: '1px 8px 15px rgb(0 0 0 / 12%)'
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

export const Price = styled('span')({
    position: 'absolute',
    top: '30px',
    right: '30px',
    color: '#434343',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '30px',
})

export const Desc = styled('div')({
    position: 'absolute',
    bottom: '30px',
    left: '30px',

    '& a': {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '15px',
        marginBottom: '5px',
        textTransform: 'capitalize',
        color: '#434343',
        textDecoration: 'none',
        transition: 'all .3s ease 0s',
    },

    '& a:hover': {
        color: '#c8a165',
        outline: '0 none',
    },

    '& p': {
        lineHeight: '15px',
        zIndex: 9,
    }
})

export const BuyNow = styled(MyButton)({
    display: 'inline-block',
    position: 'absolute',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#efefef',
    height: '30px',
    lineHeight: '30px',
    overflow: 'hidden',
    padding: '0 15px',
})

export const Banner = styled(Link)({
    bottom: 'auto',
    left: '55%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '30px',
    fontWeight: 900,
    lineHeight: '40px',
    marginBottom: '5px',
    textTransform: 'uppercase',
    color: '#6a6a6a',
    transition: 'all .3s ease 0s',
    textDecoration: 'none',

    '&:hover': {
        color: '#c8a165'
    },

    '& span': {
        color: '#c8a165'
    }
})