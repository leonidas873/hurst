import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Cart } from './Pages';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart/*" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
