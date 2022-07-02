import { styled } from "@mui/system";
import { Rating } from "@mui/material";
import { MyButton } from "../Common/MainButton/Style";

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

export const MyRating = styled(Rating)({
    display: 'flex',
    fontSize: '1.2rem',
    margin: '5px 0',
    marginBottom: '30px',

    '& span': {
        color: '#c87065',
    }
})

export const RatingTitle = styled('p')({
    color: '#666',
    marginBottom: '10px',
    fontWeight: 'bolder',
})

export const MyForm = styled('form')({
    '& input': {
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
    },

    '& textarea': {
        background: '#f6f6f6',
        border: 'medium none',
        height: '100px',
        padding: '15px 20px',
        width: '100%',
        outline: 'none',
        resize: 'vertical',
        color: '#999',
    }
})

export const MyMainButton = styled(MyButton)({
    background: '#c87065',
    marginTop: '15px',
    padding: '0 30px',
    color: 'white',
})