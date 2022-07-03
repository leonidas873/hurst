import { Routes, Route, useNavigate, Link } from "react-router-dom";
import OrderComplete from "../OrderComplete/OrderComplete";
import Whishlist from "../Wishlist/Wishlist";
import styled from "@emotion/styled";
import Checkout from "../Checkout/Checkout";
import ShoppinCart from "../ShoppingCart/ShoppingCart";
import { useState } from "react";
import { CartRoutesStyled } from "./styles";
import Box from '@mui/material/Box';


const CartRoutes = () => {

const [activePage, setActivePage] = useState('shoppingCart');
const navigate = useNavigate();
console.log(activePage);
  return (
    <CartRoutesStyled>
      
      <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap:'20px',
        overflow: 'hidden',        
        fontWeight: 'bold',
        marginBottom: '30px'
      }}
    >
      
        <LinkStyled active={activePage=="shoppingCart"} onClick={()=>navigate("")}>
         shopping cart
        </LinkStyled>
        <LinkStyled active={activePage=="wishlist"} onClick={()=>navigate("whishlist")}>
          Wshishlist
        </LinkStyled>
        <LinkStyled active={activePage=="checkout"} onClick={()=>navigate("checkout")}>
          checkout
        </LinkStyled>
        <LinkStyled active={activePage=="orderComplete"} onClick={()=>navigate("order-complete")}>
          OrderComplete
        </LinkStyled>

        
      </Box>


      <Routes>
        <Route path="/" element={<ShoppinCart setActivePage={e=>setActivePage(e)}/>} />
        <Route path="/whishlist" element={<Whishlist setActivePage={e=>setActivePage(e)} />} />
        <Route path="/checkout" element={<Checkout setActivePage={e=>setActivePage(e)}/>} />
        <Route path="/order-complete" element={<OrderComplete setActivePage={e=>setActivePage(e)} />} />
      </Routes>
    </CartRoutesStyled>
  );
};

export default CartRoutes;

const LinksStyled = styled.div`
  display: flex;
  gap: 30px;
`;

const LinkStyled = styled.div`
  flex: 1;
  width:100%;
  background:${props=>props.active ?  '#c8a165' : 'white'} ;
  display: block;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
  text-align: center;
  text-transform: uppercase;
 color: #3d3d3d;
cursor:pointer;
`;
