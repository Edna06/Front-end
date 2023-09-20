import { Container } from './styles'

import { useState } from "react";

import { Button } from '../Button/index';

import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart } from 'react-icons/ai';

import { useNavigate, Link } from 'react-router-dom';

export function Card({data, ...rest}){
    const imagem = `../../../src/assets/Pratos/${data.title}.png`

    const [quantity, setQuantity] = useState(1);

     //incrementando prato
     const increase = () => {
      if (quantity > 19) {
          toast.warn("A quantidade máxima é de 20 unidades!")
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


    return(
        <Container {...rest}>
            <button className='FavoriteDish'>
                <AiOutlineHeart />
            </button>

            <img src={imagem} alt="" />

            <Link to={`/details/${data.id}`}>
                <h2>{data.title}</h2>
            </Link>

            <span>{data.description}</span>

            <h4>R$ {data.price}</h4>


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
        </Container>
    )
}