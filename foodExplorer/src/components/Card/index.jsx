import { Container } from './styles'

import { Button } from '../Button/index';

import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai';
import {BiEdit} from 'react-icons/bi'

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Hooks/authContext';
import { api } from '../../Services/api';

export function Card({data, ...rest}){

    const navigate = useNavigate();
    const { user } = useAuth();

    const imageURL = `${api.defaults.baseURL}/files/dishFiles/${data.image}`;

    const [quantity, setQuantity] = useState(1);

    function handleRefreshPage(){
        navigate(0)
    };

     //incrementando prato
     const increase = () => {
      if (quantity > 19) {
          alert("A quantidade máxima é de 20 unidades!")
          return;
      }
      setQuantity(count => count + 1);
  };

  //descementando prato
  const decrease = () => {
      if (quantity < 2) {
          return;
      }
      setQuantity(count => count - 1);
  };

    function handleGoToEditPage(){
        navigate(`/editDish/${data.id}`)
    }

    async function handleDeleteItem(){
        const confirm = window.confirm("Deseja realmente deletar o prato do cardápio?")

        if(confirm){
            await api.delete(`/adminDishes/${data.id}`)
            handleRefreshPage()
        }
    };


    return(
        <Container {...rest}>
              {
            !user.isAdmin ?
            <button className='FavoriteDish'>
                <AiOutlineHeart />
            </button>
            :
            <button className='FavoriteDish'>
                <BiEdit  onClick={handleGoToEditPage} />
            </button>
            }

            <img src={imageURL} alt="" />

            <Link to={`/details/${data.id}`}>
                <h2>{data.title}</h2>
            </Link>

            <span>{data.description}</span>

            <h4>R$ {data.price}</h4>


            {
            !user.isAdmin ?

            <div className='AmountItemsAndBuy-wrapper'>
                <div className='Amount'>
                    <button className='MinusItem' onClick={decrease}>
                        <BiMinus />

                    </button>

                    <span>{quantity.toString().padStart(2, '0')}</span>

                    <button className='PlusItem' onClick={increase}>
                        <BiPlus />
                    </button>

                </div>


                <Button title="incluir"/>
            </div>
            :
            <div className='admItensController'>
                <Button
                title="Deletar"
                onClick={handleDeleteItem}
                />
            </div>
            }

        </Container>
    )};