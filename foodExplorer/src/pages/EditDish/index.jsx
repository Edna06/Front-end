import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients, SendFormWithImage } from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';
import {Input} from '../../components/Inputt';
import {Button} from '../../components/Button';
import { NoteItem } from '../../components/NoteItemm';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';

import { useState } from 'react';

import { Link } from 'react-router-dom';

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

                <SendFormWithImage>
                        <div className='uploadImage'>
                        <label id="file" htmlFor="image">
                            Imagem do prato
                            <div className='uploadImageSelect'>
                                <FiUpload size={24}/>
                                <span>Selecione a imagem</span>
                                <input id="image" type="file" onChange={e => setImageFile(e.target.files[0])}/>
                            </div>
                        </label>
                        </div>
                    </SendFormWithImage>

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
