import { MainLayout } from "../../components";
import { BlogImage } from "../../components/BlogDetails";
import { Box } from "@mui/system";


const BlogDetails = () => {
    return <MainLayout>
        <Box
        sx={{
            padding:'20px',
            margin:'20px auto',
            maxWidth:'1200px'
        }}
        >
        <BlogImage/>
        </Box>

    </MainLayout>
}

export default BlogDetails;