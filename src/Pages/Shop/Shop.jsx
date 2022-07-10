import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { fetchShopProducts } from "../../api/api";
import { MainLayout, HeroBanner } from "../../Components";
import Filters from "../../Components/Shop/Filters/Filters";
import Pagination from "../../Components/Shop/Pagination/Pagination";
import ShopProducts from "../../Components/Shop/ShopProducts/ShopProducts";

const Shop = () => {

const [products, setProducts] = useState(false);   

useEffect(()=>{
    fetchShopProducts().then(res=>setProducts(res.data.result))

},[])



    return <MainLayout>
        <HeroBanner text="shop" breadcrumbs={{ current: 'shop', links: [{ text: 'home', href: '/' }] }} />
        <Box sx={{
            maxWidth: '1200px',
            margin: 'auto',
            padding: '0 20px'
        }}>
            <Filters />
            {products && <ShopProducts productsData={products}/>}
            <Pagination />
        </Box>
    </MainLayout>
}

export default Shop;