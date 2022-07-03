import { styled } from "@mui/system";
import { MyButton } from "../Common/MainButton/Style";

export const MySlide = styled('div')({
    position: 'relative',
})

export const Content = styled('div')({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    marginRight: '10%',

    '& h3': {
        fontSize: '25px',
        lineHeight: '30px',
        color: '#666',
        fontWeight: 400,
        fontFamily: 'Lato,sans-serif',
        marginBottom: '10px',
    },

    '& h2': {
        fontSize: '60px',
        lineHeight: '66px',
        color: '#434343',
        fontWeight: 900,
        fontFamily: 'Lato,sans-serif',
        marginBottom: '10px',
        textTransform: 'uppercase',
    },

    '& span': {
        display: 'block',
        fontSize: '30px',
        lineHeight: '33px',
        color: '#666',
        marginBottom: '15px',
    },

    '& p': {
        color: '#878686',
        marginBottom: '15px',
    },
})

export const BuyNow = styled(MyButton)({
    backgroundColor: '#efefef',
    height: '45px',
    lineHeight: '45px',
    padding: '0 30px',
    border: '2px solid #d3d3d3',

    '&:hover': {
        border: '2px solid #c8a165',
    }
})

export const Arrows = styled('button')((props) => ({
    backgroundColor: 'transparent',
    border: 'none',
    left: props.type === "next" ? 'auto' : '0',
    right: props.type === "next" ? '0' : 'auto',
    lineHeight: '53px',
    marginTop: '-26px',
    position: 'absolute',
    top: '50%',
    width: '32px',
    height: '53px',
    transition: 'all 0.5s ease 0s',
    cursor: 'pointer',
    zIndex: 9,

    '& svg': {
        fontSize: '30px',
        color: '#666',
        transition: 'all 0.5s ease 0s',
        padding: props.type === "next" ? '0 0 0 5px' : '0 5px 0 0',
        verticalAlign: 'middle',
    },

    '&:hover svg': {
        color: '#fff',
    },

    '&::after': {
        borderBottom: '26px solid transparent',
        borderLeft: '32px solid #F9F9F8',
        borderTop: '26px solid transparent',
        content: '""',
        left: '0',
        position: 'absolute',
        top: '0',
        zIndex: '-1',
        transition: ' all 0.5s ease 0s',
        transform: props.type === "next" ? 'rotate(180deg)' : 'none',
    },

    '&:hover::after': {
        borderBottom: '26px solid transparent',
        borderLeft: '32px solid #C8A165',
        borderTop: '26px solid transparent',
    }
}))