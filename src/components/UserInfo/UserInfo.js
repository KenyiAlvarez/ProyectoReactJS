import { useAuthContext } from "../../context/AuthContext"

export const UserInfo = () =>{

    const {auth, logOut} = useAuthContext()

    return(
        <div className="container d-flex justify-content-between p-2">
            <p>Bienvenido, {auth.userId}</p>
            <button onClick={logOut} className="btn btn-danger" >LogOut</button>
        </div>
    )
}