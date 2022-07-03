import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import {GrFormClose} from 'react-icons/gr';
import { Box, Button } from '@mui/material';

export const CheckoutStyled = styled('div')(({
    
    "&":{
        backgroundColor:'white',
        padding:'40px',
        
    }
    
  }));
  

  export const StyledForm = styled('form')(({
    
    "&":{
        backgroundColor:'white',
        
    },
    "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root, input::placeholder, textarea":{
      color: "#6669",
      opacity:1
      
  },
  "& textarea":{
    width:'100% !important'
}
    
  }));

  export const StyledButton = styled(Button)(({
    
    "&":{
        
        width:"min-content",
        whiteSpace:'nowrap',
        margin:'auto'
        
    },
    "& > button":{
        backgroundColor:'#C87065',
        color:'white'
    },
    "& > button:hover":{
      backgroundColor:'#C87065',
      color:'white'    
  }

  }));