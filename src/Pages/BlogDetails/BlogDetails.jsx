import { HeroBanner, MainLayout } from "../../Components";
import { BlogComments, BlogImage, BlogText } from "../../Components/BlogDetails";
import { Box } from "@mui/system";


const BlogDetails = () => {
    return <MainLayout>
         <HeroBanner text="single-blog" breadcrumbs={{ current: 'single-blog', links: [{ text: 'home', href: '/' }] }} />
        <Box
        sx={{
            padding:'20px',
            margin:'20px auto',
            maxWidth:'1200px'
        }}
        >
        <BlogImage/>
        <BlogText/>
        <BlogComments/>
        </Box>

    </MainLayout>
}

export default BlogDetails;