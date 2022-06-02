import { styled } from "@mui/system";
import { Paper } from "@mui/material";

export const CategoriesPaper = styled(Paper)({
    height: '50px',
    lineHeight: '50px',
    padding: '0 30px',
    marginBottom: '30px',
})

export const CategoriesContainer = styled('div')({
    overflow: 'hidden',
    outline: 'none',
    background: '#fff',
    height: '290px',
    padding: '15px 20px 20px 10px',

    '& ul': {
        paddingLeft: '20px',
        listStyle: 'none',
    },

    '& a': {
        color: '#666',
        display: 'block',
        fontSize: '14px',
        lineHeight: '25px',
        textTransform: 'capitalize',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'all .3s ease 0s',
    },

    '& a:hover': {
        color: '#c8a165',
    }
})

export const SubList = styled('ul')({
    paddingLeft: '20px',
    listStyle: 'none',

    '& a': {
        color: '#999',
        display: 'block',
        fontSize: '13px',
        lineHeight: '25px',
        textTransform: 'capitalize',
        transition: 'all .3s ease 0s',
    },

    '& a:hover': {
        color: '#c8a165',
    }
})

export const PriceRange = styled('div')({
    padding: '20px 30px',


    '& > div': {
        display: 'flex',
        height: '50px',
        alignItems: 'center',
    },

    '& h5': {
        margin: '0 5px 0 0',
        fontSize: '14px',
        fontWeight: '700',
        whiteSpace: 'nowrap',
    },

    '& input': {
        marginRight: 0,
        width: '90px',
        background: '#fff',
        border: 'medium none',
        padding: 0,
        boxShadow: 'none',
        color: '#999',
        height: '40px',
        transition: 'all 0.5s ease 0s',
        outline: 'none',
    }
})

export const ColorContainer = styled('div')({
    padding: '20px 30px',

    '& ul': {
        listStyle: 'none'
    },

    '& a': {
        display: 'block',
        textDecoration: 'none',
        color: '#666',
        fontSize: '14px',
        lineHeight: '28px',
        transition: 'all .3s ease 0s',
    },

    '& a span': {
        display: 'inline-block',
        height: '13px',
        marginRight: '20px',
        width: '13px',
        background: '#666',
    },

    '& a p': {
        float: 'right'
    },

    '& a:hover': {
        color: '#c8a165',
    },

    '& a:hover span': {
        outline: '1px solid #666',
        outlineOffset: '1px',
    }
})

export const SizeContainer = styled('div')({
    padding: '20px 30px',

    '& ul': {
        listStyle: 'none'
    },

    '& li': {
        margin: '8px 8px 0 0',
        display: 'inline-block',
    },

    '& a': {
        background: '#f6f6f6',
        display: 'block',
        fontWeight: '700',
        height: '34px',
        lineHeight: '34px',
        textAlign: 'center',
        width: '34px',
        transition: 'all .3s ease 0s',
        color: '#434343',
        textDecoration: 'none',
    },

    '& a:hover': {
        background: '#c8a165',
        color: '#fff',
    }
})

export const Results = styled('p')({
    float: 'right',
    margin: '0',
    color: '#666',
})