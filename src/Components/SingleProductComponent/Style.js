import { styled } from "@mui/system";
import { Dialog, Paper, Rating, Tabs } from "@mui/material";
import Slider from "react-slick";

export const MyPaper = styled(Paper)({
    padding: '30px 15px 30px 30px',
})

export const ImageContainer = styled('div')({
    position: 'relative',
    height: '100%',

    '& div': {
        height: '100%',
    },

    '& img': {
        height: '100%',
        objectFit: 'cover',
    },

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

export const ColorProperty = styled('div')({
    '& ul': {
        marginBottom: '20px',
    },

    '& ul li': {
        lineHeight: 'inherit',
        width: 'auto',
        listStyle: 'none',
        display: 'inline-block',
    },

    '& ul li p': {
        color: '#434343',
        display: 'block',
        fontWeight: '700',
        width: '55px',
    },

    '& ul li span': {
        background: '#666',
        display: 'inline-block',
        height: '15px',
        marginRight: '10px',
        width: '15px',
        cursor: 'pointer',
        verticalAlign: 'middle',
    },

    '& ul li span:hover, ul li span.selected': {
        outline: '1px solid #d6b98c',
        outlineOffset: '1px',
    }

})

export const SizeProperty = styled('div')({
    '& ul': {
        marginBottom: '35px',
    },

    '& ul li': {
        lineHeight: 'inherit',
        width: 'auto',
        listStyle: 'none',
        display: 'inline-block',
        marginTop: '8px',
    },

    '& ul li p': {
        color: '#434343',
        display: 'block',
        fontWeight: '700',
        width: '55px',
    },

    '& ul li span': {
        height: 'auto',
        lineHeight: 'inherit',
        marginRight: '10px',
        width: 'auto',
        fontWeight: 700,
        textAlign: 'center',
        color: '#434343',
        cursor: 'pointer',
        transition: 'all .3s ease 0s',
        padding: '5px',
    },

    '& ul li span:hover, ul li span.selected': {
        color: '#c8a165',
    }
})

export const FlexContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
})

export const AmountContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    margin: '15px 20px 0 0',
    backgroundColor: '#f6f6f6',

    '& button': {
        width: '70px',
        height: '40px',
        cursor: 'pointer',
        float: 'left',
        fontSize: '20px',
        position: 'relative',
        lineHeight: '40px',
        textAlign: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        color: '#666',
        transition: 'all .3s ease 0s',
    },

    '& button:hover': {
        color: '#c8a165',
    },

    '& button:first-child::before': {
        position: 'absolute',
        content: '""',
        background: '#999',
        height: '14px',
        right: '0',
        top: '15px',
        width: '1px',
    },

    '& button:last-child::before': {
        position: 'absolute',
        content: '""',
        background: '#999',
        height: '14px',
        left: '0',
        top: '15px',
        width: '1px',
    },

    '& input': {
        height: '40px',
        fontSize: '16px',
        margin: '0',
        padding: '0',
        textalign: 'center',
        border: 'none',
        backgroundColor: 'transparent',
        transition: 'all 0.5s ease 0s',
        textAlign: 'center',
        color: '#666',
    },

    '& input:focus': {
        outline: 'none',
    },

    '& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button': {
        "-webkitAppearance": 'none',
    },

    '& input[type=number]': {
        "-moz-appearance": 'textfield',
    },
})

export const MySlider = styled(Slider)({
    marginTop: '38px',

    '& .slick-list': {
        width: 'calc(100% - 70px)',
        margin: '0 auto',
    },

    '& .slick-slide': {
        padding: '0 10px',
    },

    '& .slick-current img': {
        border: '1px solid #d6b98c',
    }
})

export const ArrowsDetails = styled('a')((props) => ({
    left: props.type === "next" ? 'auto' : '0',
    right: props.type === "next" ? '0' : 'auto',
    position: 'absolute',
    top: 0,
    zIndex: '999',
    transition: 'all .3s ease 0s',
    cursor: 'pointer',
    width: '25px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f6f6f6',

    '&:hover': {
        backgroundColor: '#c8a165',
    },

    '& svg': {
        fontSize: '25px',
        color: '#999',
        transition: 'all .3s ease 0s',
    },

    '&:hover svg': {
        color: '#fff',
    },

}))

export const MyTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        display: 'none',
    },

    '& button': {
        fontWeight: '700',
        padding: '0 30px',
        transition: 'all .3s ease 0s',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginBottom: '5px',
    },

    '& .Mui-selected': {
        backgroundColor: '#c8a165',
        color: '#fff !important',
    },
})

export const Title = styled('h3')({
    fontSize: '16px',
    fontWeight: '700',
    lineHeight: '28px',
    marginBottom: '30px',
    color: '#434343',
    fontFamily: 'Lato,sans-serif',
    textTransform: 'uppercase',
    paddingBottom: '10px',
    position: 'relative',

    '&::before': {
        background: '#eee',
        bottom: '0',
        content: '""',
        height: '3px',
        left: '0',
        position: 'absolute',
        width: '50px',
    },
})