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
        marginBottom: '30px',
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

    '& ul': {
        listStyle: 'none',
    },

    '& li': {
        marginBottom: '20px',
        overflow: 'hidden',
    },

    '& i': {
        background: '#ddd',
        color: '#999',
        float: 'left',
        fontSize: '20px',
        height: '35px',
        lineHeight: '35px',
        marginRight: '20px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '35px',
    },

    '& span': {
        display: 'block',
        color: '#666',
    },

    '& form': {
        marginTop: '60px'
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

    '& textarea': {
        background: '#f6f6f6',
        border: 'medium none',
        boxShadow: 'none',
        color: '#999',
        height: '93px',
        marginBottom: '15px',
        padding: '15px 20px',
        width: '100%',
        outline: 'none',
        resize: 'vertical',
    },
})

export const MyMainButton = styled(MyButton)({
    background: '#c87065',
    marginTop: '15px',
    padding: '0 30px',
    color: 'white',
})