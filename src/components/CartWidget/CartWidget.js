import "./CartWidget.css";
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

export const CartWidget = () =>{

    const {totalQuantity} = useCartContext()

    return(
        <div className='cart'>
            <Link to="/cart">
                <FaCartPlus className="iconCarrito"/>
                <span className='cantCart'>{totalQuantity()}</span>
            </Link>
        </div>
    )
}