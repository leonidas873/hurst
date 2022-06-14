import { styled } from "@mui/system";
import { Dialog, Paper } from "@mui/material";

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
    // background: '#fff',
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