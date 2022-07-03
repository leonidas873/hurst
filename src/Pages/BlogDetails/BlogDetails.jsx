import { MainLayout } from "../../Components";
import { BlogImage } from "../../Components/BlogDetails";
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