


export const ItemCounter = ( {max, setCounter, counter, handleAgregar} ) => {

    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > 0 && setCounter(counter - 1)
    }
    
    if (max === 0) {
        return (
            <div className="my-3">
                <p>NO HAY STOCK DE ESTE PRODUCTO</p>
            </div>
        )
    }
    
    return (
        <div className="my-3">
            <button 
                onClick={handleRestar} 
                className={counter === 0 ? "btn btn-outline-danger" : "btn btn-outline-primary"}
                disabled={counter === 0}
            >
                -
            </button>

            <span className="mx-2">{counter}</span>

            <button 
                onClick={handleSumar} 
                className={counter === max ? "btn btn-danger" : "btn btn-primary"}
                disabled={counter ===max}
            >
                +
            </button>
            <hr/>

            <button 
                disabled={counter === 0}
                onClick={handleAgregar} 
                className="btn btn-dark"
            >
                Agregar al carrito
            </button>
        </div>
    )
}

