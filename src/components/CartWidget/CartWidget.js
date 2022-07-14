import "./CartWidget.css";
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () =>{

    const {totalQuantity, cart} = useCartContext()

    if (cart.length === 0) return <Link to={"/"}/>
    
    return(
        <div className='cart'>
            <Link to="/cart">
                <FaCartPlus className="iconCarrito"/>
                <span className={`totalCart ${totalQuantity() === 0 ? "hidden" : " "}`}>{totalQuantity()}</span>
            </Link>
        </div>
    )
}