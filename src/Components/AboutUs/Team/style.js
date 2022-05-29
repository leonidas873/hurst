import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const TeamStyled = styled('div')(({
    
    "&":{
        
        paddingBottom:'80px',
        
    }
    
  }));

// single member styles

  

  export const MyPaper = styled(Paper)({
    padding: '30px 15px',
    position: 'relative',
    cursor:'pointer',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    alignItems:'center',
    gap:10,
    margin:'20px',

    '&:hover': {
        boxShadow: '0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)',
    }
})