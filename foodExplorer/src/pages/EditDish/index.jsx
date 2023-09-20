import { Container, Main, ButtonBack, Form, InputWrapper, TextArea, SectionIngredients, SendFormWithImage } from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';
import {Input} from '../../components/Inputt';
import {Button} from '../../components/Button';
import { NoteItem } from '../../components/NoteItemm';
import { Unauthorized } from '../../components/Unauthorized';

import { IoIosArrowBack } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';

import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../Hooks/authContext';

import { api } from '../../Services/api'


export function EditDish(){

    const {user } = useAuth();
    const navigate = useNavigate();
    const params = useParams();

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

        if (newIngredient) {
            return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar.Clique para adicionar ou deixe o campo vazio.")
        }

        api.put(`/adminDishes/${params.id}`, { title, description, price, category, ingredients })

        const formData = new FormData();
        formData.append("image", imageFile);

        api.patch(`/adminDishes/dishImage/${params.id}`, formData)

        alert("Prato atualizado com sucesso")
        navigate("/")
    }

    useEffect(() => {
        async function fetchDish() {
          const response = await api.get(`/dishes/${params.id}`)

          const { title, description, category, price, ingredients,imageFile } = response.data;
          setTitle(title);
          setDescription(description);
          setCategory(category);
          setPrice(price);
          setIngredients(ingredients.map(ingredient => ingredient.name));
          setImageFile(image);
        }

        fetchDish();
      }, [])


    return(

        <Container>
            <Header />

        {
            user.isAdmin ?

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
                                <input
                                id="image"
                                type="file"
                                onChange={e => setImageFile(e.target.files[0])}
                                />
                            </div>
                        </label>
                        </div>
                    </SendFormWithImage>

                        <Input
                        label="name"
                        title="Nome do prato"
                        type="text"
                        placeholder="Ex.: Salada Ceasar"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />

                        <Input
                        label="name"
                        title="Categoria"
                        type="text"
                        placeholder="Categoria"
                        value={category}
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
                            value={price}
                            onChange={e=> setPrice(e.target.value)}
                        />
                    </div>

                    <TextArea>
                        <label htmlFor="">Descrição</label>
                        <textarea
                        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        >
                        </textarea>
                    </TextArea>

                    <Button
                    className='addButton'
                    title="Editar prato"
                    onClick={handleEditDish}
                    />

                </Form>

            </Main>
            :
            <Unauthorized/>
        }

            <Footer />
        </Container>
    )
}
