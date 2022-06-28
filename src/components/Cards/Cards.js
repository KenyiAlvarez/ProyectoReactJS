import { Link } from "react-router-dom"
import "./Cards.css"
import { IoBagAddOutline } from 'react-icons/io5';
 
export const Cards = ( {items} ) =>{

    return (
        <div className="cards">
                
                <img className="imgCards" alt="img Productos" src={items.img} />

                <p className="tituloCards">{items.nombre}</p>
                <hr/>
                <div className="containerPrecio">
                    <strong className="precioCards">€ {items.precio}</strong>

                    <Link to={`/item/${items.id}`}>
                        <button className="btn btn-dark"><IoBagAddOutline className="bag"/></button>
                    </Link>
                </div>

            </div>
    )
}