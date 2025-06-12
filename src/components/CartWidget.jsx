import { FaCartShopping } from "react-icons/fa6"; 
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = ({ cantidad }) => {

  const {cart} = useContext(CartContext)
  
  return (
    <div className="cart-widget d-flex align-items-center position-relative">
      <FaCartShopping className="cart-icon" fontSize="1.5rem" />
      {cantidad > 0 && (
        <Badge pill bg="danger" className="cart-badge position-absolute top-0 start-100 translate-middle">
          {cantidad}
        </Badge>
      )}
    </div>
  );
}

export default CartWidget;