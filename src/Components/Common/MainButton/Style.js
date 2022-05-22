import { styled } from '@mui/system';

export const MyButton = styled('button')((props) => ({
    background: '#f7f7f7',
    color: '#666',
    fontWeight: '700',
    height: '35px',
    lineHeight: '35px',
    padding: '0 25px',
    textTransform: 'uppercase',
    overflow: 'hidden',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',

    '&::before': {
        background: '#c8a165',
        bottom: '0',
        color: '#fff',
        content: `'${props.altName}'`,
        left: '-100%',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        width: '100%',
        visibility: 'hidden',
        zIndex: '11',
        transition: 'all .3s ease 0s',
    },

    '&::after': {
        bottom: '0',
        content: '""',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '100%',
        zIndex: '1',
    },

    '&:hover': {
        backgroundColor: '#f6f6f6',
        color: '#c8a165',
    },

    '&:hover::before': {
        left: '0',
        visibility: 'visible',
    }

}))