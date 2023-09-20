//imports
import { Container, Main, Form, Avatar } from './styles';
import avatarPlaceholder from '../../assets/svg/avatar_placeholder.svg'

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import {InputProfile} from '../../components/InputProfile'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../Hooks/authContext';

import { api } from '../../Services/api';

import { FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

export function Profile(){
    const navigate = useNavigate()

    function handleGoToOrderHistoryPage(){
        navigate("/OrderHistory")
    }

    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState()
    const [passwordNew, setPasswordNew] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/avatarFiles/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState("null")

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        await updateProfile({ user, avatarFile })
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]


        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }


    function handleGoToAddDishPage(){
        navigate("/addDish")
    }

    function handleGoToEditDishPage(){
        navigate("/editdish")
    }

    function handleGoToDeleteDishPage(){
        navigate("/deletedish")
    }


    return(
        <Container>
            <Header />

            { !user.isAdmin ?

            <Main>
                <section className='profile-card'>

                <Form>

                 <Avatar>
                    <img src={avatar} alt="Foto do perfil do usuário" />

                        <label htmlFor="avatar">
                                <FiCamera />

                                <input
                                    id="avatar"
                                    type="file"
                                    onChange={handleChangeAvatar}
                                />
                            </label>
                        </Avatar>

                        <InputProfile
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        />

                        <InputProfile
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        />

                        <InputProfile
                        placeholder="Senha atual"
                        type="password"
                        icon={FiLock}
                        onChange={e=> setPasswordOld(e.target.value)}
                        />

                        <InputProfile
                        placeholder="Nova senha"
                        type="password"
                        icon={FiLock}
                        onChange={e=> setPasswordNew(e.target.value)}
                        />

                        <Button
                        title="Salvar"
                        onClick={handleUpdate}
                        />

                    </Form>

                    </section>

                    <section className='profile-option'>

                            <Button
                            title={"Histórico de pedidos"}
                            onClick={handleGoToOrderHistoryPage}
                            />
                            <Button title={"Fale conosco"}/>
                    </section>
                </Main>
                 :
                <Main>
                <section className='profile-card'>
                    <Form>

                        <Avatar>
                            <img
                            src={avatar}
                            alt="Foto do usuário"
                            />

                            <label htmlFor="avatar">
                                <FiCamera />

                                <input
                                    id="avatar"
                                    type="file"
                                    onChange={handleChangeAvatar}
                                />
                            </label>
                        </Avatar>

                        <InputProfile
                        placeholder="Nome"
                        type="text"
                        icon={FiUser}
                        value={name}
                        onChange={e=> setName(e.target.value)}
                        />

                        <InputProfile
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        />

                        <InputProfile
                        placeholder="Senha atual"
                        type="password"
                        icon={FiLock}
                        onChange={e=> setPasswordOld(e.target.value)}
                        />

                        <InputProfile
                        placeholder="Nova senha"
                        type="password"
                        icon={FiLock}
                        onChange={e=> setPasswordNew(e.target.value)}
                        />

                        <Button
                        title="Salvar alterações"
                        onClick={handleUpdate}
                        />

                    </Form>
                </section>


                <section className='profile-option'>

                        <Button
                        title={"Adicionar um prato"}
                        onClick={handleGoToAddDishPage}
                        />

                        <Button
                        title={"Deletar um prato"}
                        onClick={handleGoToDeleteDishPage}
                        />
                </section>
                </Main>

                }
        </Container>
    )
}
