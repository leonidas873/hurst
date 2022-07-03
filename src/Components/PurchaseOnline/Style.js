import { styled } from '@mui/system';
import { Tabs } from '@mui/material';

export const MyTabs = styled(Tabs)({
    '& .MuiTabs-flexContainer': {
        justifyContent: 'center'
    },

    '& button': {
        display: 'flex',
        color: '#666',
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