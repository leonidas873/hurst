import { styled } from "@mui/system";
import { Popover } from "@mui/material";

export const MyPopoverButton = styled('button')({
    color: '#999',
    border: 'none',
    background: 'transparent',
    transition: 'all 0.3s ease 0s',
    marginRight: '20px',
    height: '50px',
    cursor: 'pointer',

    '&:hover': {
        color: '#c8a165',
    }
})

export const MyPopover = styled(Popover)({
    '& .MuiPaper-root': {
        width: '290px !important',
    },

    '& h4': {
        borderBottom: '2px solid #f6f6f6',
        color: '#666',
        fontSize: '16px',
        fontWeight: '700',
        height: '50px',
        lineHeight: '50px',
        marginBottom: '0',
        padding: '0 30px',
        textTransform: 'uppercase',
        fontFamily: 'Lato,sans-serif',
    },
})