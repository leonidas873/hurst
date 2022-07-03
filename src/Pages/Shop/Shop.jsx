import { Box } from "@mui/system";
import { MainLayout } from "../../components";
import Filters from "../../components/Shop/Filters/Filters";
import Pagination from "../../components/Shop/Pagination/Pagination";
import ShopProducts from "../../components/Shop/ShopProducts/ShopProducts";

const Shop = () => {
    return <MainLayout>
        <Box sx={{
            maxWidth:'1200px',
            margin:'auto',
            padding:'0 20px'
        }}>
        <Filters/>
        <ShopProducts/>
        <Pagination/>
        </Box>
    </MainLayout>
}

export default Shop;