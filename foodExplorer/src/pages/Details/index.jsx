//imports
import { Container, Main, ButtonBack, Content, AllIngredientCards } from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';
import { Button } from '../../components/Button/';
import {IngredientCard} from '../../components/IngredientCard/';

import {IoIosArrowBack} from 'react-icons/io';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {api} from '../../Services/api'
import { useAuth } from '../../Hooks/authContext';

import { itemsDatabase } from '../../utils/database';

export function Details(){

        const [quantity, setQuantity] = useState(1);

        const { id } = useParams();
        const data = itemsDatabase.find((item) => item.id === Number(id));

        const params = useParams();
        const navigate = useNavigate();
        const { user } = useAuth();

        function handleAddItem() {
            setQuantity (quantity+1)
        }

        function handleRemoveItem() {
            setQuantity (quantity-1)
            if(quantity == 1){
                setQuantity(1)
            }
        }

        async function handleDeleteDish(){
            const confirm = window.confirm("Deseja realmente deletar o prato do cardápio?")

            if(confirm){
                await api.delete(`/adminDishes/${data.id}`)
                navigate(-1)
            }
        }

        function handleGoToEditPage(){
            navigate(`/editDish/${data.id}`)
        }

    return(
        <Container>
        <Header />
        <Main>
        <ButtonBack>
                <Link to ='/'>
                    <IoIosArrowBack size={32} />
                    Voltar
                </Link>
        </ButtonBack>

        <Content>
        <img src={data.image} alt="Imagem do prato" />
        <div className='details'>
            <div className='details-wrapper'>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>

            {data.ingredients && (
            <AllIngredientCards>
            {data.ingredients.map ((ingredient) => (
                <IngredientCard
                data={ingredient}
                />
            ))}
              </AllIngredientCards>
            )}
            <div className='AmountItemsAndBuy-wrapper'>
                <h4>R$ {data.price}</h4>


                {
                    !user.isAdmin ?

                <div className='Amount'>
                    <button
                    className='MinusItem'
                    onClick={handleRemoveItem}
                    >
                        <BiMinus />
                    </button>
                    <span>0{quantity}</span>

                    <button
                    className='PlusItem'
                    onClick={handleAddItem}
                    >
                        <BiPlus />
                    </button>
                    <Button title="incluir"/>
                </div>
                :
                <div className='Amount'>
                    <Button title="Deletar" onClick={handleDeleteDish} />
                    <Button title="Editar" onClick={handleGoToEditPage} />
                </div>
                }
            </div>
        </div>
        </Content>
        </Main>
        <Footer />
    </Container>
)
}