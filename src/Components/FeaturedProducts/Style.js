import { styled } from '@mui/system';

export const Arrows = styled('button')((props) => ({
    background: '#fff',
    border: '2px solid #eeeeee',
    color: '#a6a6a6',
    fontWeight: '700',
    left: props.type === "next" ? 'auto' : '-30px',
    right: props.type === "next" ? '-30px' : 'auto',
    lineHeight: '20px',
    marginTop: '-43px',
    position: 'absolute',
    top: '50%',
    width: '35px',
    zIndex: '999',
    transition: 'all 0.5s ease 0s',
    cursor: 'pointer',

    '&:hover': {
        background: '#C8A165',
        border: '2px solid #C8A165',
        color: '#fff',
    }
}))