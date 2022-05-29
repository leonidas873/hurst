import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Cart, AboutUs, ErrorPage, Shop } from './pages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/*" element={<Cart/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/aboutUs" element={<AboutUs/>} />
        <Route path="/*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
