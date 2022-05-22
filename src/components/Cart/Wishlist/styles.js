import { MdAddShoppingCart } from 'react-icons/md';
import { styled } from '@mui/material/styles';


export const StyledCartIcon = styled(MdAddShoppingCart)({

    "&":{
        fontSize:25,
        cursor:'pointer',
        transition:'0.2s'
    },
    "&:hover":{
        color:"#c8a165"
    }


})