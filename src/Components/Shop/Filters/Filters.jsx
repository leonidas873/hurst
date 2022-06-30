import { Box } from "@mui/material";
import Calories from "./Categories/Categories";
import Color from "./Color/Color";
import Price from "./Price/Price";
import Size from "./Size/Size";

const Filters = ()=> {

    return <Box
    sx={{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#e4f0e6',
        height:'50px',
        marginBottom:'20px',
        gap:'20px',
        boxSizing:'border-box',
        padding:'0 30px'
    }}
    >
        <Calories/>
        <Price/>
        <Color/>
        <Size/>
    </Box>
}

export default Filters;