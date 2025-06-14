import { Badge } from "react-bootstrap";
import { IoCartSharp  } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetReactIcons = () =>{
const {cartQuantity}=useContext(CartContext)

    return(
        <div>
            <IoCartSharp  fontSize={'1.5rem'} />
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}
export default CartWidgetReactIcons