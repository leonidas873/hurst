import { Box, styled } from "@mui/material";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

const BlogText = ()=> {
    return <Box
    sx={{
        
        '& h2':{
            padding:'38px 0 25px'
        }
    }}
    >
        <h2>FARNITURE DRAWING 2021</h2>
        <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour. On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will

which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrink ing from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour.</p>

<Box
sx={{
    width:'100%',
    backgroundColor:'#dadada9c',
    display:'flex',
    flexWrap:'wrap',
    padding:'15px 20px',
    gap:'10px 40px',
    marginTop:'40px',
}}
>
    <Box
    sx={{
        flex:'1',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        gap:'10px',
        fontSize:'13px',

        '& span:nth-child(1)':{
            
            lineHeight:'20px',
            color:'#666',
            fontWeight:800,
            textTransform:'upperCase'
        }
        
    }}
    >
        <span>share</span>
        <Icon><FaFacebookF/></Icon>
        <Icon><FaTwitter/></Icon>
        <Icon><FaLinkedinIn/></Icon>
        <Icon><FaFacebookF/></Icon>
    </Box>
    <Box
    sx={{
        
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        gap:'10px',
        fontSize:'13px',

        '& span:nth-child(1)':{
            
            lineHeight:'20px',
            color:'#666',
            fontWeight:800,
            textTransform:'upperCase'
        }
    }}
    >
        <span>Tags</span>
        <Tag>Chair</Tag>
        <Tag>Chair</Tag>
        <Tag>Chair</Tag>
        <Tag>Chair</Tag>
    </Box>
</Box>

    </Box>
}

export default BlogText;

const Icon = styled('span')({
'& svg:hover':{
    color: '#c87065',
    cursor:'pointer',
},
'& svg':{
    fontSize:'11px',
    color:'#999',
    transition: 'all .3s ease 0s',
}
})

const Tag = styled('span')({
    '&:hover':{
        color: '#c87065',
        cursor:'pointer',
    },
    '&':{
        transition: 'all .3s ease 0s',
    }
})