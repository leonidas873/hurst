import { MainLayout } from "../../components";
import Filters from "../../components/Shop/Filters/Filters";
import Pagination from "../../components/Shop/Pagination/Pagination";
import ShopProducts from "../../components/Shop/ShopProducts/ShopProducts";

const Shop = () => {
    return <MainLayout>
        <Filters/>
        <ShopProducts/>
        <Pagination/>
    </MainLayout>
}

export default Shop;