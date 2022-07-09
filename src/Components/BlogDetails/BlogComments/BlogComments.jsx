import styled from "@emotion/styled";
import { Box } from "@mui/material";
import {IoMdShareAlt, IoMdClose} from 'react-icons/io';
import LeaveReview from "../../LeaveReview/LeaveReview";

const BlogComments = () => {
    return <Box
    sx={{
     
        
    }}
    >
        <Box
        sx={{
            display:'flex',
            gap:'25px',
            marginTop:'40px',
            padding:'25px 20px',
            backgroundColor:'#dadada9c',
        }}
        >
            <AuthorImage>
                <img src="/images/author.webp" alt="author"/>
            </AuthorImage>
            <Box
            sx={{
                '& h3':{
                    marginBottom:'10px'
                }
            }}
            >
                <h3>salim rana</h3>
                <p>No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter conseques ences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally car mstances occur in which toil and pain can procure him some great pleasure.</p>
            </Box>
        </Box>
        <Box
        sx={{
            '& h4':{
                fontSize:'16px',
                fontWeight:'700',
                paddingBottom:'10px',
                textTransform:'uppercase',
                marginTop:'40px',
                marginBottom:'30px',
                position:'relative'
            },
            '& h4::after':{
                content:"''",
                backgroundColor:'#66666661',
                left:0,
                bottom:0,
                position:'absolute',
                width:'50px',
                height:'3px'
            }
        }}
        >
            <h4>customer comments</h4>
<Comment>
    <img src="/images/costumer.webp" alt="costumer" />
    <Box
  
    >
        <Box
        sx={{
            display:'flex'
        }}
        >
            <Box
            sx={{
                flex:'1',
                '& h5':{
                    color:'#434343',
                    textTransform:'upperCase',
                    fontWeight:"900",
                    fontSize:'1.25rem',
                    lineHeight:'1.2rem'
                },
                '& p':{
                    marginBottom:'10px'
                }
            }}
            >
                <h5>gerald barnes</h5>
                <p>27 jun, 2021 at 2:30pm</p>
            </Box>
            <Box>
                <CommentBtn><IoMdShareAlt/></CommentBtn>
                <CommentBtn><IoMdClose/></CommentBtn>
            </Box>
        </Box>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at est bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
    </Box>
</Comment>
        </Box>
        <Box sx={{
            marginTop:'40px'
        }}>
        <LeaveReview ratingOff={true}/>
        </Box>
        
    </Box>
}

export default BlogComments;

const AuthorImage = styled('div')({
        
    

    '& img':{
        borderRadius:'50%',
    }
    
})


const Comment = styled('div')({
        display:'flex',
        gap:'20px',
        alignItems:'flex-start',
        '& img':{
            width:'90px',
            height:'auto'
        }
})

const CommentBtn = styled('button')({
        backgroundColor:'#6666661e',
        border:'none',
        outline:'none',
        cursor:'pointer',
        height:'30px',
        width:'50px',
        margin:'5px',
        display:'inline-flex',
        alignItems:'center',
        justifyContent:'center',
        transition:'all .3s ease 0s',
        '& svg':{
            color:'#999',
            fontSize:'16px',
            transition:'all .3s ease 0s'
        },
        '&:hover':{
            backgroundColor:'#c8a165'
        },
        '&:hover svg':{
            color:'white'
        }
})