import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Cart, Login, Blog, Contact } from './Pages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/*" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
