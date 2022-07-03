import styled from '@emotion/styled';
import { Box } from '@mui/material';

const BlogImage = () => {
    return <Box
        sx={{
            backgroundColor:'red',
            position:'relative'
        }}
    >
        <Box sx={{
        position:'absolute',
        top:'20px',
        left:'20px',
        height:'70px',
        width:'70px',
        border:'2px solid #C87065',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'5px',
        flexDirection:'column',
        '& h5':{
            color:'red',
            fontSize:'30px'
        },
        '& span':{
            color:'red',
            fontSize:'20px'
        }

        }}
        >
 <h5>30</h5>
            <span>june</span>
        </Box>
        <Image src="/images/10.webp" />
        <Box
            sx={{
                position:'absolute',
                left:'0',
                bottom:'0',
                height:'20px',
                width:'100px',
                backgroundColor:'blue',

                
            }}        
        >

           

        </Box>
    </Box>
}

export default BlogImage;

const Image = styled.img`
    
width:100%;
object-fit:cover;

`

