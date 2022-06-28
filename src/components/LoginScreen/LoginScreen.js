import {  useState } from "react"
import { useAuthContext } from "../../context/AuthContext"
import "./LoginScreen.css"

export const LoginScreen = () =>{

    const {login} = useAuthContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return(
        <div className="loginScreen">
            <div className="loginContainer">
                <h3>Login</h3>
                <hr/>
                <form onSubmit={handleSubmit}>
                    <input
                        type={"email"} 
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        placeholder='Email de usuario'
                        className="form-control my-4"
                    />
                    {/* {error.email && <small className='text-danger'>{error.email}</small>} */}
                    <input
                        type={"password"} 
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        placeholder='Contraseña'
                        className="form-control my-4"
                    />
                    {/* {error.password && <small className='text-danger'>{error.password}</small>} */}
                    <br/>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                </form>
            </div>
    </div>
    )
}