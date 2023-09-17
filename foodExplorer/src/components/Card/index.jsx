import { Container } from './styles'

import { useState } from "react";

import { Button } from '../Button/index'

import { BiMinus, BiPlus} from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export function Card({image, title, description, price, ...rest}){

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
        <Container>
            <button className='FavoriteDish'>
                <AiOutlineHeart />
            </button>

            <img src={Image} alt="" />


            <h2>{title}</h2>

            <span>{description}</span>

            <h4>R$ {price}</h4>



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