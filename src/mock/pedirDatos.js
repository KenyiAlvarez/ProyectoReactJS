import { products } from "./data"

export  const pedirDatos=()=>{
    
    return new Promise((resolve)=>{

        setTimeout(() =>{
                resolve(products)
        }, 1500)

    })
}