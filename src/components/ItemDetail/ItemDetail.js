import "./ItemDetail.css";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate} from "react-router-dom";

export const ItemDetail = ( {item} ) =>{

    const {addItem, isInCart} = useContext(CartContext)

    const [cantidad, setCantidad] = useState(0)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        if (cantidad === 0) return
        
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart) 
    }

    return(

        <div className="itemDetail container my-5">

        <img className="imgDetail" alt={item.nombre} src={item.img} />
        
            <div className="dataPrd">

                <h2>{item.nombre}</h2>
                <p className="itemDescr">{item.descrip}</p>
                <strong className="prodcPrecio">€{item.precio}</strong>
                    
                    <div className="precioItem">
                    {
                        isInCart(item.id)
                        ? <Link to={"/cart"}><button className="btn btn-success">Finalizar mis compras</button></Link>
                        :
                        <ItemCounter
                           max={item.stock}
                           counter = {cantidad}
                           setCounter={setCantidad}
                           handleAgregar ={handleAgregar}
                        />
                    }
                    <br/>
                    <button onClick={handleVolver} className="btn btn-dark">VOLVER</button>  
                    </div>
            </div>
        </div>

    )
}