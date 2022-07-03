import { ArticleStyled } from "./style";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Article = () => {
    return <ArticleStyled>
        <Box 
        sx={{
            backgroundColor:'#8fa1a1',
            display:'flex',
            padding:'40px',
            alignItems:'flex-start',
            flexWrap:{md:'nowrap', xs:'wrap'}
            
        }}
        >
            <Box
            sx={{
                maxWidth:'100%',
                "& > img" : {
                    width:{md:'auto', xs:'100%'}
                }
            }}
            >
                <img src="/images/about.webp" alt="img"/>
            </Box>
            <Box
            sx={{
                background: "#f6f6f6",
                padding:'40px 30px 30px 40px',
                marginLeft:{md:'-240px', xs:'0'},
                marginTop:'40px',
                minHeight:'350px'
            }}
            >
                <Typography variant="h5" sx={{marginBottom:'20px'}}>about hurst</Typography>
                <Typography paragraph fontSize={15}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magn aliqua. Ut enim ad minim veniam, ommodo consequa.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia is be deserunt mollit anim id est laborum.</Typography>
                <Typography paragraph fontSize={15}>Lorem ipsum dolor sit ameelit, sed do eius ut labore et dolore magn aliqua. Ut enim ad minim veniam, ommodo consequa.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia is be deserunt mollit anim id est laborum.</Typography>
                <Typography paragraph fontSize={15}>cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia is be deserunt mollit anim id est laborum.</Typography>
            </Box>
        </Box>
    </ArticleStyled>
}

export default Article;