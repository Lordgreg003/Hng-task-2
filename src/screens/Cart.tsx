import { Footer, Nav } from "../components/layouts";
import { Basket, Similar } from "../components/cart";
const Cart = () => {
  return (
    <div>
      <Nav />
      <Basket />
      <Similar />
      <Footer />
    </div>
  );
};

export default Cart;
