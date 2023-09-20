//imports
import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients, SendFormWithImage } from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';
import { Input } from '../../components/Inputt';
import { NoteItem } from '../../components/NoteItemm';
import { Button } from '../../components/Button';

import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';

import { useState } from 'react';
import { api } from '../../Services/api';

export function AddDish(){

    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const [ingredients, setIngredients] = useState([])
    const [newIngredient, setNewIngredient] = useState("")
    const [category, setCategory] = useState("");


    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    function handleRemoveIngredient(ingredientDeleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
    }

    async function handleNewDish(){
        api.post("/adminDishes", { title, description, price, category, ingredients })
        alert("Prato criado com sucesso")
        navigate("/")
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

                    <h2>Adicionar prato</h2>
                </ButtonBack>



                <Form>
                    <InputWrapper>
                        <Input
                        label="name"
                        title="Nome do prato"
                        type="text"
                        placeholder="Ex.: Salada Ceasar"
                        onChange={e => setTitle(e.target.value)}
                        />

                        <Input
                        label="name"
                        title="Preço"
                        type="text"
                        placeholder="R$ 00,00"
                        onChange={e => setPrice(e.target.value)}
                        />

                        <Input
                        label="name"
                        title="Categoria"
                        type="text"
                        placeholder="Categoria"
                        onChange={e => setCategory(e.target.value)}
                        />

                    </InputWrapper>


                        <div className="titleSectionIngredients">
                            <p>Ingredientes</p>
                        </div>
                    <SectionIngredients>



                        {
                            ingredients.map((ingredient, index) => (
                                <NoteItem
                                key={String(index)}
                                value={ingredient}
                                onClick={() => handleRemoveIngredient(ingredient)}
                                />
                                ))
                            }

                                <NoteItem
                                isnew
                                placeholder='Adicionar'
                                onChange={e => setNewIngredient(e.target.value)}
                                value={newIngredient}
                                onClick={handleAddIngredient}
                                />

                    </SectionIngredients>

                    <TextArea>
                        <label htmlFor="">Descrição</label>
                        <textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        onChange={e => setDescription(e.target.value)}
                        >
                        </textarea>
                    </TextArea>


                    <SendFormWithImage>
                        <div className='uploadImage'>
                        <label id="file" htmlFor="image">
                            Imagem do prato
                            <div className='uploadImageSelect'>
                                <FiUpload size={24}/>
                                <span>Selecione a imagem</span>
                                <input id="image" type="file"/>
                            </div>
                        </label>
                        </div>

                        <Button
                        className='addButton'
                        title="Adicionar pedido"
                        onClick={handleNewDish}
                        />
                    </SendFormWithImage>
                </Form>
            </Main>

            <Footer />
        </Container>
    )
}