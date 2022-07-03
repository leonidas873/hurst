import { Box } from "@mui/system";
import { MainLayout } from "../../Components";
import Filters from "../../Components/Shop/Filters/Filters";
import Pagination from "../../Components/Shop/Pagination/Pagination";
import ShopProducts from "../../Components/Shop/ShopProducts/ShopProducts";

const Shop = () => {
    return <MainLayout>
         <HeroBanner text="shop" breadcrumbs={{ current: 'shop', links: [{ text: 'home', href: '/' }] }} />
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