import { styled } from "@mui/system";

export const Container = styled('div')({
    marginBottom: '30px',
})

export const ImageContainer = styled('div')({
    float: 'left',
    width: '90px',

    '& img': {
        maxWidth: '100%',
        height: 'auto',
    }
})

export const Content = styled('div')({
    marginLeft: '90px',
    paddingLeft: '30px',
})

export const Header = styled('div')({
    overflow: 'hidden',

    '& > div:first-child': {
        float: 'left'
    },

    '& > div:last-child': {
        float: 'right'
    },

    '& h5': {
        textTransform: 'uppercase',
        color: '#434343',
        fontFamily: 'Lato,sans-serif',
        margin: '0 0 10px',
        fontSize: '1.25rem',
        marginBottom: '0',
        fontWeight: 'bolder',
    },

    '& p': {
        color: '#999',
        marginBottom: '10px',
    },
})

export const MyButton = styled('button')({
    background: '#f6f6f6',
    color: '#999',
    display: 'inline-block',
    fontSize: '16px',
    height: '30px',
    lineHeight: '30px',
    marginLeft: '2px',
    textAlign: 'center',
    width: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all .3s ease 0s',

    '& svg': {
        fontSize: '16px',
        verticalAlign: 'middle',
        transition: 'all .3s ease 0s',
    },

    '&:hover': {
        backgroundColor: '#c8a165',
        color: '#fff',
    },

    '& svg:hover': {
        color: '#fff',
    }
})