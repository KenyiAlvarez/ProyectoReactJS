import "./NavBar.css";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";



export const Nav = () => {


    return (  
            <header className="header">

                <Link className="navLogo" to={"/"}><h1 >Tecnologia</h1></Link>
                
                    <nav className="navLinks">
                        <Link className="navLink" to={"/"}>Tienda</Link>
                        <Link className="navLink" to={"/categorias/computadoras"}>computadoras</Link>
                        <Link className="navLink" to={"/categorias/celulares"}>celulares</Link>
                    

                        <CartWidget/>
                    </nav>
                         
            </header>

    )

}