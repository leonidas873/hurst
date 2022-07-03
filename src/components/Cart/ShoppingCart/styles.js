import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import {GrFormClose} from 'react-icons/gr';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    
    [`&.${tableCellClasses.head}`]: {
      backgroundColor:"#d9d9d9",
      color: "#616161",
      padding:'10px 16px',
      textTransform:'UpperCase',
     
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      color: "#616161",
      boxShadow:'none',
      border:'none',
      
      
    },
  }));
  
  export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&': {
      
      border: 'none',
      boxShadow:'none'
    },

  }));

  export const StyledTableContainerWrapper = styled('div')((props) => ({
    '&': {
      backgroundColor: 'white',
      boxSizing:'border-box',
      padding:'40px'
    },
    '& > div': {
        border:'none',
        boxShadow:'none',
        borderRadius:'none'
    },
    '& table':{
        
        borderCollapse:'separate',

        borderSpacing:'0 20px'
    }
  }));

  
  export const StyledCartProduct =  styled('div')({
      
      display:'flex',
      alignItems:'flex-start'
  })

  export const StyledProductImg = styled('div')({
        width:'110px',

        '& img':{
            width:'100%',
            
        }

  })

  export const StyledProductInfo = styled('div')({
        
        flex:1,
        textAlign:'center',
        color: "#666",
        padding: "20px 0 0 20px",

        "& h5":{
            margin:'5px 0'
        }
  })

  export const StyledQty = styled('div')({
    flex:1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:15,

    "& button":{
        padding:5,
        border:'none',
        outline:'none',
        background:'none',
        cursor:'pointer',
        fontSize:19

    },
    "& button:hover":{
        color:'#c8a165'
    }
})

// 

export const StyledCloseIcon = styled(GrFormClose)({

    "&":{
        fontSize:24,
        padding:5,
        transition:'0.5s',
        cursor:'pointer'

    },
    "&:hover":{
        background:'#c8a165',
        color:'red !important'
    }


})