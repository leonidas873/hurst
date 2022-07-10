import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Cart, AboutUs, ErrorPage, Shop, BlogDetails, Login, Blog, Contact, SingleProduct } from './Pages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/cart/*" element={localStorage.getItem('token') ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/login" element={localStorage.getItem('token') ? <Navigate to="/" /> : <Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleProduct/:id" element={<SingleProduct />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
