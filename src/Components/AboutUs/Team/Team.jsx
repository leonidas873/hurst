import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MyPaper, TeamStyled } from "./style";
import {BsTwitter, BsDiscord, BsFacebook,BsLinkedin,BsAt} from 'react-icons/bs';

 
const SingleMember = () => {
    return <Box
    sx={{
        paddingBottom:'0px',
        width: { xs: "100%", sm: "50%", md: "25%" },
        
        
    }}
    >
        <MyPaper elevation="0">
        <img src="/images/1.webp" alt="team member"/>
        <Typography
        sx={{
            color:'#666',
            fontSize:'20px'
        }}
        >Hancy holland</Typography>
        <Typography
        sx={{
            color:'#999',
            fontSize:'16px',
            fontWeight:500,
            lineHeight:1.2
        }}
        >chairman</Typography>
        <Typography
        sx={{
            color:'#999',
            fontSize:'13px',
            fontWeight:400,
            lineHeight:'20px',
            textAlign:'center'
        }}
        >There are many variations of passage of Lorem Ipsum available, but the in majority have suffered.</Typography>
        <Box
        sx={{
            padding:'10px 0',
            display:'flex',
            justifyContent:'space-evenly',
            alignItems:'center',
            width:'100%',
            color:'#999',
            fontSize:'16px',
            flexWrap:'wrap',
            width:'100%',
            "&>svg:hover":{
                color:'#c8a165'
            }
        }}
        >
            <BsTwitter/>
            <BsDiscord/>
            <BsFacebook/>
            <BsLinkedin/>
            <BsAt/>
        </Box>
        </MyPaper>
    </Box>
}



const Team = () => {
    return <TeamStyled>
        <Box
        sx={{
            textAlign:'center'
        }}
        >
<Typography
sx={{
color:'#444444',
textAlign:'center',
fontSize:'30px',
fontWeight:900,
lineHeight:'22px',
position:'relative',

}}
>Team Member</Typography>
<Box
sx={{
    
    background:"#c87065 none repeat scroll 0 0",
    right:0,
    margin:'0 auto',
    height:'2px',
    width:'50px',
    marginTop:'15px'
}}
></Box>
        </Box>

        <Box
        sx={{
            display:'flex',
            flexWrap:'wrap',
            // gap:'30px',
            marginTop:'40px'
        }}
        >
<SingleMember/>
<SingleMember/>
<SingleMember/>
<SingleMember/>
        </Box>

    </TeamStyled>
}

export default Team;