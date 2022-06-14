import { styled } from "@mui/system";
import { Dialog, Paper, Rating } from "@mui/material";

export const MyPaper = styled(Paper)({
    padding: '30px 15px 30px 30px',
})

export const ImageContainer = styled('div')({
    position: 'relative',

    '& span': {
        position: 'absolute',
        bottom: '0',
        color: '#999',
        display: 'block',
        fontSize: '20px',
        height: '25px',
        lineHeight: '25px',
        right: '0',
        textAlign: 'center',
        width: '25px',
        zIndex: '9',
        cursor: 'pointer',

    },

    '& span svg': {
        transition: 'all .3s ease 0s',
    },

    '& span::before': {
        borderRight: '50px solid #fcfbfb',
        borderTop: '50px solid transparent',
        bottom: '0',
        content: '""',
        position: 'absolute',
        right: '0',
        zIndex: '-1',
    },

    '& span:hover svg': {
        color: '#c8a165',
    }

})

export const MyDialog = styled(Dialog)({
    maxWidth: '500px',
    margin: '0 auto',

    '& .MuiPaper-root ': {
        boxShadow: 'none',
        border: 'none',
        backgroundColor: 'transparent',
    },

    '& .MuiBackdrop-root': {
        backgroundColor: '#000',
        opacity: '0.8 !important',
    }
})

export const ModalDesc = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',

    '& span:first-child': {
        fontSize: '13px',
        fontWeight: '700',
        lineHeight: '1em',
        color: '#ccc',
    },

    '& span:last-child': {
        display: 'block',
        clear: 'left',
        fontSize: '12px',
        color: '#999',
    },

    '& button': {
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        width: '30px',
        height: '30px',
        transition: 'opacity .2s',
        opacity: 0.7,
    },

    '& button:hover': {
        opacity: 1,
    },

    '& button svg': {
        color: '#ccc',
        fontSize: '30px',
    }
})

export const Arrows = styled('a')((props) => ({
    left: props.type === "next" ? 'auto' : '0',
    right: props.type === "next" ? '0' : 'auto',
    position: 'absolute',
    top: 0,
    zIndex: '999',
    transition: 'opacity .6s',
    cursor: 'pointer',
    width: '40%',
    height: 'calc(100% - 40px)',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: props.type === "next" ? 'flex-end' : 'flex-start',

    '&:hover': {
        opacity: 1,
    },

    '& svg': {
        fontSize: '40px',
    },
}))

export const DescHeader = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '& h4': {
        fontSize: '16px',
        lineHeight: '18px',
        textTransform: 'uppercase',
        fontFamily: 'bree serif',
        marginBottom: '5px',
        fontWeight: 500,
        color: '#434343',
    },

    '& > div': {
        display: 'flex',
        alignItems: 'center',
    },

    '& > div > span': {
        color: '#666',
        marginLeft: '5px',
    },
})

export const MyRating = styled(Rating)({
    fontSize: '1rem',
    margin: '5px 0',

    '& span': {
        color: '#c87065',
    }
})

export const Details = styled('div')({
    '& span': {
        display: 'block',
        color: '#c87065',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '28px',
        margin: '10px 0 20px 0',
    },

    '& p': {
        fontWeight: '400',
        marginBottom: '30px',
        color: '#666',
    }
})