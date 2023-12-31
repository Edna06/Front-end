//imports
import { Container, Main} from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';
import { Input } from '../../components/Inputt';
import { Button } from '../../components/Button';

import { useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { api } from '../../Services/api';
import { useAuth } from '../../Hooks/authContext';

export function DeleteDish(){

    const {user}= useAuth();
    const navigate = useNavigate();

    const [idDelItem, setIdDelItem] = useState("");
    const [dish, setDish] = useState([]);

    function handleBack(){
        navigate("/")
    };

    async function handleRemoveItem(){
        const confirm = window.confirm("Deseja realmente deletar o prato do cardápio?")

        if(confirm){
            await api.delete(`/adminDishes/${idDelItem}`)
            handleBack()
        }

    };

    useEffect(()=>{
        async function fetchNameDish(){
            const ApiResponse = await api.get(`/dishes/${idDelItem}`)
            setDish(ApiResponse.data)
        }

        fetchNameDish()
    }, [idDelItem]);

    return(

        <Container>
            <Header />

            {
            user.isAdmin ?

            <Main>

                <h2>
                    O id que você digitou é referente ao prato: <span>{dish.title}</span>
                </h2>

                <Input
                placeholder="Digite o id do prato que deseja remover"
                type="text"
                onChange={(e)=> setIdDelItem(e.target.value)}
                />

                <Button
                title="Deletar"
                onClick={handleRemoveItem}
                />
            </Main>
                :
            <Main>
                <h1>Error 401</h1>
                <h2>
                    <span>Oops!</span>
                </h2>
                <h3>Você não possui autorização para acessar está página!</h3>
                </Main>
            }

            <Footer />
        </Container>
    )
}