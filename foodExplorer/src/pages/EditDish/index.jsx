import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients, SendFormWithImage } from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';
import {Input} from '../../components/Inputt';
import {Button} from '../../components/Button';
import { NoteItem } from '../../components/NoteItemm';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';

import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

export function EditDish(){

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [imageFile, setImageFile] = useState(null);

    //lógica para asicionar um novo ingrediente
    function handleAddIngredient(){
        setIngredients(prevState => [...prevState, newIngredient])
        setNewIngredient("")
    }

    //removendo um ingrediente específico
    function handleRemoveIngredient(ingredientDeleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== ingredientDeleted))
    }

    async function handleEditDish(){
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
                                <input id="image" type="file" name='image' onChange={e => setImage(e.target.files[0])}/>
                            </div>
                        </label>
                        </div>
                    </SendFormWithImage>

                        <Input
                        label="name"
                        title="Nome do prato"
                        type="text"
                        placeholder="Ex.: Salada Ceasar"
                        onChange={e => setTitle(e.target.value)}
                        />

                        <Input
                        label="name"
                        title="Categoria"
                        type="text"
                        placeholder="Categoria"
                        onChange={e => setCategory(e.target.value)}
                        />

                    </InputWrapper>


                    <div className='inline'>

                    <SectionIngredients>
                        <p>Ingredientes</p>

                        <div className="ingredients">
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
                        </div>
                    </SectionIngredients>

                        <Input
                            label="name"
                            title="Preço"
                            type="text"
                            placeholder="R$ 00,00"
                            onChange={e=> setPrice(e.target.value)}
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
                    onClick={handleEditDish}
                    />

                </Form>

            </Main>

            <Footer />
        </Container>
    )
}
