import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import { MyButton } from "../Common/MainButton/Style";

export const MyPaper = styled(Paper)({
    padding: '40px',

    '& h4': {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '28px',
        marginBottom: '30px !important',
        color: '#434343',
        fontFamily: 'Lato,sans-serif',
        margin: '0 0 10px',
        textTransform: 'uppercase',
        position: 'relative',
    },

    '& h4::before': {
        background: '#eee',
        bottom: '0',
        content: '""',
        height: '2px',
        left: '0',
        position: 'absolute',
        width: '50px',
    },

    '& > p': {
        color: '#999',
        marginBottom: '15px',
    },

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

    '& a': {
        color: '#999',
        display: 'inline-block',
        marginBottom: '15px',
        textDecoration: 'none',
        transition: 'all .3s ease 0s',
    },

    '& a:hover': {
        color: '#c8a165',
    },
})

export const MyMainButton = styled(MyButton)({
    background: '#c87065',
    marginTop: '15px',
    padding: '0 30px',
    color: 'white',
})