import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients } from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';

import {Input} from '../../components/Inputt';
import {Button} from '../../components/Button';
import { NoteItem } from '../../components/NoteItemm';

import { useState } from 'react';

export function EditDish(){

    const [description, setDescription] = useState("");

    return(
        <Container>
            <Header />

            <ButtonBack to='/'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_403_3101)">
        <path d="M17.1699 24C17.0383 24.0008 16.9078 23.9756 16.786 23.9258C16.6641 23.876 16.5533 23.8027 16.4599 23.71L8.28989 15.54C7.82426 15.0756 7.45483 14.5238 7.20277 13.9164C6.9507 13.3089 6.82095 12.6577 6.82095 12C6.82095 11.3424 6.9507 10.6912 7.20277 10.0837C7.45483 9.47626 7.82426 8.92451 8.28989 8.46005L16.4599 0.290063C16.5531 0.196825 16.6638 0.122864 16.7856 0.0724035C16.9075 0.0219432 17.038 -0.00402832 17.1699 -0.00402832C17.3018 -0.00402832 17.4323 0.0219432 17.5541 0.0724035C17.676 0.122864 17.7867 0.196825 17.8799 0.290063C17.9731 0.383301 18.0471 0.493991 18.0976 0.615813C18.148 0.737635 18.174 0.868203 18.174 1.00006C18.174 1.13192 18.148 1.26249 18.0976 1.38431C18.0471 1.50613 17.9731 1.61682 17.8799 1.71006L9.70989 9.88005C9.14809 10.4426 8.83253 11.205 8.83253 12C8.83253 12.7951 9.14809 13.5575 9.70989 14.12L17.8799 22.29C17.9736 22.383 18.048 22.4936 18.0988 22.6155C18.1496 22.7373 18.1757 22.868 18.1757 23C18.1757 23.132 18.1496 23.2628 18.0988 23.3846C18.048 23.5065 17.9736 23.6171 17.8799 23.71C17.7865 23.8027 17.6756 23.876 17.5538 23.9258C17.432 23.9756 17.3015 24.0008 17.1699 24Z" fill="#374957"/>
        </g>
        <defs>
        <clipPath id="clip0_403_3101">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

            <p>Voltar</p>
        </ButtonBack>

            <Main>



                    <h2>Editar prato</h2>
                <Form>

                <InputWrapper>
                        <Input
                        label="name"
                        title="Nome do prato"
                        type="text"
                        placeholder="Ex.: Salada Ceasar"
                        />



                    </InputWrapper>


                    <div className='inline'>

                    <SectionIngredients>

                        <p>Ingredientes</p>

                        <div className="ingredients">
                            <NoteItem value="Alface"/>
                            <NoteItem value="Tomate"/>
                            <NoteItem value="Tomate"/>
                            <NoteItem isNew placeholder='Adicionar'/>
                        </div>
                    </SectionIngredients>

                    <Input
                        label="name"
                        title="Preço"
                        type="text"
                        placeholder="R$ 00,00"
                        />


                    </div>



                    <TextArea>
                        <label htmlFor="">Descrição</label>
                        <textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                        >
                        </textarea>
                    </TextArea>

                    <Button
                    className='addButton'
                    title="Adicionar"
                    />

                </Form>

            </Main>

            <Footer />
        </Container>
    )
}
