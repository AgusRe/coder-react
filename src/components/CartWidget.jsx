import { FaCartShopping } from "react-icons/fa6";
import Badge from 'react-bootstrap/Badge';

const CartWidget = ({ cantidad }) => {
  return (
    <div className="cart-widget">
      <FaCartShopping className="cart-icon" fontSize="1.5rem" />
      <Badge pill bg="danger" className="cart-badge">
        {cantidad}
      </Badge>
    </div>
  );
}

export default CartWidget;