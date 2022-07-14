import { Link } from "react-router-dom"
import "./EmptyCart.css"
import { BsCartX } from 'react-icons/bs';

export const EmptyCart = () =>{

    return(
        <div className="container my-5">
            <h2>Carrito de la compra</h2>
            <hr/>

            <div className="titleProd emptyContainer">
                <BsCartX className="iconCartEmpty"/>
                <p className="cartEmptyText">Carrito vacío.</p>
            </div>

            <div className="containerEmpty">
                <Link to="/" className="btn btn-outline-dark empty">Ir a comprar</Link>
            </div>
        </div>
    )
}