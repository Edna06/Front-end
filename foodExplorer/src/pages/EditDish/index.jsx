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

            <Main>
                <ButtonBack>
                    <Link to ='/'>
                        <IoIosArrowBack size={32} />
                        Voltar
                    </Link>
                </ButtonBack>

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
