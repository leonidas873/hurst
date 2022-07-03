import { styled } from "@mui/system";

export const ProductActions = styled('div')({
    width: '100%',
    backgroundColor: '#f6f6f6',
    display: 'flex',
    marginTop: '15px',

    '& a': {
        flex: 1,
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        lineHeight: '40px',
        transition: 'all .3s ease 0s',
        position: 'relative',
    },

    '& a::after': {
        background: '#999',
        content: '""',
        height: '16px',
        marginTop: '-8px',
        position: 'absolute',
        right: '0',
        top: '50%',
        width: '2px',
    },

    '& a:last-child::after': {
        display: 'none'
    },

    '& a:hover svg': {
        color: '#c8a165'
    },

    '& svg': {
        transition: 'all .3s ease 0s',
        color: '#666',
    }
})