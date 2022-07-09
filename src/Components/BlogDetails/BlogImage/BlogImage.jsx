import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { AiFillHeart } from 'react-icons/ai'



import { MdModeComment } from 'react-icons/md'
import { BsFillShareFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'



const BlogImage = () => {
    return <Box
        sx={{
            backgroundColor:'#c87065',
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
        gap:'7px',
        flexDirection:'column',
        '& h5':{
            color:'#c87065',
            fontSize:'30px'
        },
        '& span':{
            color:'#c87065',
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
                height:'auto',
                width:'auto',
                backgroundColor:'gray',
                width:'100%',
                
                
            }}        
        >

<InteractionContainer id="interactions">
                    <MySocialLink to="/">
                        <AiFillHeart />
                        <span>89 Like</span>
                    </MySocialLink>
                    <MySocialLink to="/">
                        <MdModeComment />
                        <span>59 Comments</span>
                    </MySocialLink>
                    <MySocialLink to="/">
                        <BsFillShareFill />
                        <span>29 Share</span>
                    </MySocialLink>
                </InteractionContainer>

        </Box>
    </Box>
}

 export default BlogImage;

const Image = styled('img')({
    width:'100%',
    objectFit:'cover'
    
})
    




 const InteractionContainer = styled('div')({
    
    width: '100%',
    transition: 'all .3s ease 0s',
    backgroundColor: 'rgba(255,255,255,.8)',
    padding: '12px 20px',
    textAlign: 'left',
    
})

 const MySocialLink = styled(Link)({
    color: '#444',
    float: 'none',
    fontSize: '12px',
    lineHeight: '14px',
    marginRight: '20px',
    transition: 'all .3s ease 0s',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',

    '&:hover': {
        color: '#c87065'
    },

    '&:hover svg': {
        color: '#c87065'
    },

    '& svg': {
        margin: '0 8px 0 2px',
        transition: 'all .3s ease 0s',
    }
})

 