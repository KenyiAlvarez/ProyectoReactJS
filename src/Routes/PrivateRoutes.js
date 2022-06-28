import { Nav } from "../components/Navbar/Navbar"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import { Navigate, Route, Routes } from "react-router-dom"
import { Cart } from '../components/Cart/Cart';
import { UserInfo } from "../components/UserInfo/UserInfo";
import Footer from "../components/Footer/Footer";

export const PrivateRoutes = () =>{

    return(
        <>
            <Nav/>
            <UserInfo />
                <Routes>
                    <Route path='/' element={ <ItemListContainer/> } />
                    <Route path='/categorias/:categoryId' element={ <ItemListContainer/> } />
                    <Route path='/item/:itemId' element={ <ItemDetailContainer/> } /> 
                    <Route path='/cart' element={ <Cart/> } /> 
                    <Route path='*' element={ <Navigate to={"/"}/> } />
                </Routes>
            <Footer/>
        </>
    )
}
