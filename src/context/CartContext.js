import { createContext, useState, useContext } from "react";

export const CartContext = createContext()

export const useCartContext = () =>{
    return useContext(CartContext)
}

export const CartProvider = ( {children} ) =>{
    const [cart, setCart] = useState([])

    //console.log(cart)
   
    const addItem = (item)=>{
      setCart( [...cart,item] )
    }
  
    const isInCart = (id) =>{
      return cart.some((prod) => prod.id === id)
    }
  
    const totalPrice = () =>{
      return cart.reduce( (acc, prod) => acc += (prod.precio * prod.cantidad), 0)
    }
  
    const totalQuantity = () =>{
      return cart.reduce( (acc,prod) => acc += prod.cantidad, 0) 
    }
    
    const removeItem = (id) =>{
      setCart( cart.filter((prod) => prod.id !== id ))
    }
    
    const emptyCart = () =>{
      setCart( [] )
    }

    return(
        <CartContext.Provider value={ 
        {
            cart,
            addItem,
            isInCart,
            totalPrice,
            totalQuantity,
            removeItem,
            emptyCart 
        } 
    }>
         {children}
        </CartContext.Provider>
    )
}