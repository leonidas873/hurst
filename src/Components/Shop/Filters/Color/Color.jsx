import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { DropDown } from "../Common/Common";


const colorsData = [{name:'red', value:'red'},{name:'blue',value:'blue'},{name:'black',value:"black"}]

const Color = () => {
  return (
    <DropDown title={"color"}>
      <Box>
        {colorsData.map((color,ind)=>
        <Box
        sx={{
            display:'flex',
            justifyContent:'flex-start',
            alignItems:'center',
            gap:"10px",
            cursor:'pointer',
            ['&:hover']:{
             '& > div':{
              borderColor:'#c8a165'
            }
            }
            
        }}
        key={ind}
        >
        <ColorWrapper>
          <ColorBox color={color.value}/>
          </ColorWrapper>
        <ColorName>{color.name}</ColorName>
        <Qty>15</Qty>
        </Box>
        )}
      </Box>
    </DropDown>
  );
};

export default Color;

const ColorWrapper = styled.div`
   border:1px solid white;
          height:15px;
          width:15px;
          display:flex;
          justify-content:center;
          align-items:center;
`

const ColorBox = styled.div`
background-color:${props=>props.color};
border:1px solid white;
width:100%;
height:100%;

`;

const ColorName = styled.div`
flex:1;
transition:0.4s;
&:hover{
  color:#c8a165;
}
`;

const Qty = styled.div``;
