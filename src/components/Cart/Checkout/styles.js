import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import {GrFormClose} from 'react-icons/gr';
import { Box, Button } from '@mui/material';

export const CheckoutStyled = styled('div')(({
    
    "&":{
        backgroundColor:'white',
        padding:'40px'
    }
    
  }));
  

  export const StyledForm = styled('form')(({
    
    "&":{
        backgroundColor:'white',
        
    }
    
  }));

  export const StyledButton = styled(Button)(({
    
    "&":{
        backgroundColor:'#c87065',
        width:"min-content",
        whiteSpace:'nowrap',
        margin:'auto'
        
    },
    "&:hover":{
        backgroundColor:"#c8a165"
    }
    
  }));