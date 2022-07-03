import styled from "@emotion/styled";
import { Slider } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { DropDown } from "../Common/Common";



const Price = () => {

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return <DropDown title={"price"}>
<Box sx={{ 
    width: 250,
    boxSizing:'border-box',
    padding:'10px'
    }}>
    <Box
    sx={{
        boxSizing:'border-box',
        padding:'10px'
    }}
    >
        your range: ${value[0]}-${value[1]}
    </Box>
      <SliderStyled
       
        value={value}
        onChange={handleChange}
        
       
      />
    </Box>
    </DropDown>
}

export default Price;



const SliderStyled = styled(Slider)({
  color: '#c8a165',
  height: 3,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },

});