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
        backgroundColor:'white',
        height:'50px',
        margin:'30px 0',
        gap:'20px',
        boxSizing:'border-box',
        padding:'0 30px',
        zIndex:12314512313
    }}
    >
        <Calories/>
        <Price/>
        <Color/>
        <Size/>
    </Box>
}

export default Filters;