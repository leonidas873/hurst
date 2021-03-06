import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { fetchShopProducts } from "../../api/api";
import { MainLayout, HeroBanner } from "../../Components";
import Filters from "../../Components/Shop/Filters/Filters";
import Pagination from "../../Components/Shop/Pagination/Pagination";
import ShopProducts from "../../Components/Shop/ShopProducts/ShopProducts";
import {useSelector} from 'react-redux';
import { useLocation } from "react-router-dom";

const Shop = () => {

const [products, setProducts] = useState(false);   
const {shopPage} = useSelector(state=>state);
const search = useLocation().search;
const queryPage = new URLSearchParams(search).get('page');

useEffect(()=>{
    fetchShopProducts(queryPage ? queryPage : shopPage).then(res=>setProducts(res.data.result))
},[shopPage])



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