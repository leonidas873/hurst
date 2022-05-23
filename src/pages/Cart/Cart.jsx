import { CartRoutes } from "../../Components/Cart/index";
import styled from "@emotion/styled";
import { Footer, Navbar } from "../../Components";



const Cart = () => {
    return <>
        <Navbar />
        <CartStyled>
            <Container>
                <CartRoutes />
            </Container>
        </CartStyled>
        <Footer />
    </>
}

export default Cart;

const CartStyled = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #d9d9d9;

`

const Container = styled.div`
    width:100%;
    max-width:1200px;
    box-sizing:border-box;
    padding:40px 40px 80px 40px;
`