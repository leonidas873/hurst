import { Box, Container,  Typography } from "@mui/material";
import React from "react";
import { MainLayout } from "../../components";
import { MainButton } from "../../components/Common";
import {BiSearch} from 'react-icons/bi';
import { Link } from "react-router-dom";

const ErrorPage = () => {



    return <MainLayout>
    <Box
    sx={{
        padding:'80px 0',
        bgcolor: '#d9d9d9'
    }}
    >
    <Container maxWidth="lg" sx={{padding:'30px !important',backgroundColor:'white', boxSizing:'border-box'}}>
      <Box sx={{ 
          bgcolor: '#d9d9d9',
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent:'center',
          padding:'100px 0' 

    }}>
        <img src="/images/error.webp" alt="error"/>
        <Typography
        sx={{
            color:'#666',
            fontSize:'20px',
            margin:'60px 0 10px 0',
            
        }}
        >Ooops.... Error 404</Typography>
        <Typography>Sorry, But the page you are looking for does't exist</Typography>
        <Box
        sx={{
            display:'flex',
            width:'100%',
            maxWidth:'450px',
            padding:'0 0px 0 20px',
            backgroundColor:'white',
            color:'#666',
            margin:'20px 0 30px 0',

            "& > input" : {
                flex:1,
                outline:'none',
                boxSizing:'border-box',
                border:'none'
            },
            "& > button" : {
                padding:'12px',
                display:'flex',
                alignItems:'center',
                justifyContent:"center",
                border:'none',
                outline:'none',
                background:'transparent',
                cursor:'pointer'

            }
        }}
        >
            <input type="text" placeholder="Search here" />
            <button><BiSearch/></button>
        </Box>
        <Typography sx={{
            marginBottom:'15px'
        }}>or</Typography>
            <Link to={"/"}><MainButton altName="go to home page" name="go to home page"/></Link>
      </Box>
    </Container>
    </Box>
  </MainLayout>
}

export default ErrorPage;

