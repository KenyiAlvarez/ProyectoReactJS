import { useCartContext } from "../../context/CartContext"
import { IoMdTrash } from "react-icons/io"
import { Link } from "react-router-dom"
import { EmptyCart } from "../EmptyCart/EmptyCart"
import "./Cart.css" 

export const Cart = () =>{

    const {cart, totalPrice, removeItem ,emptyCart} = useCartContext()

    if (cart.length === 0) return <EmptyCart/>

    return (
        <div className="container my-5">
            <h2>Carrito de la compra</h2>
            <hr />

            {
            cart.map((item) => (

            <div key={item.id} className="my-2 container">

                <div className="containerCart">
                    <IoMdTrash className="iconRemove" onClick={() => removeItem(item.id)} />
                    <img className="imgCardsCart" alt={item.nombre} src={item.img} />
                    <h2 className="titleCartProd">{item.nombre}</h2>
                    <strong>Cantidad: {item.cantidad}</strong>
                    <strong className="prodPre">Precio: ${item.precio * item.cantidad}</strong>
                    <hr />
                </div>
                <hr />

            </div>))
            }

            <div className="container my-5 detail">
                <strong>Total del Carrito:  €{totalPrice()}</strong>
            </div>
            <div>
                <button onClick={emptyCart} className="btn btn-danger" >Vacias Carrito</button>

                <Link to={"/checkout"} className="btn btn-success mx-4">Terminar mi compra</Link>
            </div>
        </div>
    )

} 