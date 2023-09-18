//imports
import { createContext, useContext, useState } from "react";

// API
import { api } from '../Services/api'

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({email, password}){

        // login
        try{
            const responseAPI = await api.post('/sessions', {email, password})

            const { user, token } = responseAPI.data

            api.defaults.headers.authorization = `Bearer ${token}`

            setData({user, token})
        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível fazer o login")
            }
        }
    }

    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }
