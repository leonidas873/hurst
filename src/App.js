import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Cart, AboutUs, ErrorPage, Shop, BlogDetails, Login, Blog, Contact, SingleProduct } from './Pages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/BlogDetails" element={<BlogDetails/>}/>
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
