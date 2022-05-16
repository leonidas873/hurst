import { styled } from '@mui/system';
import { Tabs, Typography } from '@mui/material';

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

export const MyTabs = styled(Tabs)({
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center'
    },

    '& button': {
        display: 'flex',
        color: '#666',
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: '700',
        lineHeight: '10px',
        paddingBottom: '12px',
    },

    '& .Mui-selected': {
        color: '#d3b484 !important',
    },

    '& .MuiTabs-indicator': {
        width: '30px !important',
        marginLeft: '16px',
        backgroundColor: '#d3b484',
    }
})