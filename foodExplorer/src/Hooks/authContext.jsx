// Imports
import { createContext, useContext, useState, useEffect } from "react";

//utilizando a api
import { api } from '../Services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});


    async function signIn({email, password}){

        // tentativa de iniciar uma sessão
        try{
            const responseAPI = await api.post('/sessions', {email, password});

            const { user, token } = responseAPI.data;

            //armazenando no localstorage os dados do usuário
            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({user, token});

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível fazer o login")
            }
        }
    }

    //lógica para sair da conta
    function signOut(){
        // apagando as informações do usuário do localstorage
        console.log("Sign out clicked")

        localStorage.removeItem("@foodexplorer:token")
        localStorage.removeItem("@foodexplorer:user")

        setData({})
    }

    // Atualizando os dados do usuário
    async function updateProfile({ user, avatarFile }){
        try{

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user)

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

            setData({ user, token: data.token })
            alert("Perfil atualizado")

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else{
                alert("Não foi possível fazer o login")
            }
        }
    }

    useEffect(() => {
        // pegando  as informações que estão armazenadas no localstorage
        const token = localStorage.getItem("@foodexplorer:token")
        const user = localStorage.getItem("@foodexplorer:user")

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])


    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user, updateProfile}}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }