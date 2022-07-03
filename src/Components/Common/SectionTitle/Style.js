import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const Title = styled(Typography)({
    color: '#444',
    fontSize: '30px',
    fontWeight: '900',
    lineHeight: '22px',
    marginBottom: '25px',
    paddingBottom: '22px',
    textAlign: 'center',
    position: 'relative',

    '&::after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: '0',
        width: '50px',
        height: '2px',
        backgroundColor: '#c87065',
        transform: 'translateX(-50%)',
    }
})