import { createContext, useContext, useState } from "react"

const mockUsers = [
    {email: "kenyialvarez05@gmail.com", pass: "kenyi12345"},
    {email: "coderhouse@gmail.com", pass: "coder12345"},
    {email: "invitados@gmail.com", pass: "12345"}
]

export const AuthContext = createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ( {children} ) =>{

    const [auth, setAuth] = useState({
        loggedIn: true,
        userId: "kenyialvarez05@gmail.com"
    })

    //console.log(auth)

    const login = (values) => {
        const {email, password} = values

        const match = mockUsers.find((user) => user.email === email)

        if(match) {
            if (match.pass === password){
                setAuth({
                    loggedIn: true,
                    userId: match.email
                })
            } else{
                alert("Password no Incorrecto")
            }
        } else {
            alert("Usuario no Incorrecto")
        }
    }

    const logOut = () =>{
        setAuth({
            loggedIn: false,
            userId: null
        })
    }

    return(
        <AuthContext.Provider value={{auth, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}