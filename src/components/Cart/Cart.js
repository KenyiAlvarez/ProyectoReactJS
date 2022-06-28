import { useCartContext } from "../../context/CartContext"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom"

export const Cart = () =>{

    const {cart, totalPrice, removeItem ,empycart} = useCartContext()

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Tu carrito esta vacio</h2>
                <hr/>

                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }

    return(
        <div className="container my-5">
            
            <h2>Mi carrito</h2>
            <hr/>
            {
                cart.map((item) => (
                <div key={item.id} className="my-2">
                    <IoMdClose onClick={() => removeItem(item.id)} />
                    <img className="imgCards" alt="img Productos" src={item.img} />
                    <h2>{item.nombre}</h2>
                    <p>Cantidad: {item.cantidad}</p>
                    <strong>Precio: €{item.precio * item.cantidad}</strong>
                    <hr/>
                </div>))
            }

            <div className="container my-5 detail">
                <p>Total del Carrito</p>
                
                    
                <hr/>

                <h4>Total: €{totalPrice()}</h4>
            </div>

            <button onClick={empycart} className="btn btn-danger" >Vacias Carrito</button>
        </div>
    )

} 