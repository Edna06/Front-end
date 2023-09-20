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

                    {/* <svg width="186" height="186" viewBox="0 0 186 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="186" height="186" rx="93" fill="#2C4452"/>
                    <path d="M79.875 98.625C84.625 97.5 89 96.9375 93 96.9375C97 96.9375 101.375 97.5 106.125 98.625C110.875 99.75 115.188 101.625 119.062 104.25C123.062 106.875 125.062 109.812 125.062 113.062V125.062H60.9375V113.062C60.9375 109.812 62.875 106.875 66.75 104.25C70.75 101.625 75.125 99.75 79.875 98.625ZM81.75 65.8125C84.875 62.5625 88.625 60.9375 93 60.9375C97.375 60.9375 101.125 62.5625 104.25 65.8125C107.375 68.9375 108.938 72.6875 108.938 77.0625C108.938 81.4375 107.375 85.1875 104.25 88.3125C101.125 91.4375 97.375 93 93 93C88.625 93 84.875 91.4375 81.75 88.3125C78.625 85.1875 77.0625 81.4375 77.0625 77.0625C77.0625 72.6875 78.625 68.9375 81.75 65.8125ZM109.312 107.812C103.938 105.688 98.5 104.625 93 104.625C87.5 104.625 82.0625 105.688 76.6875 107.812C71.3125 109.812 68.625 111.562 68.625 113.062V117.375H117.375V113.062C117.375 111.562 114.688 109.812 109.312 107.812ZM99 71.0625C97.375 69.4375 95.375 68.625 93 68.625C90.625 68.625 88.625 69.4375 87 71.0625C85.375 72.6875 84.5625 74.6875 84.5625 77.0625C84.5625 79.4375 85.375 81.4375 87 83.0625C88.625 84.5625 90.625 85.3125 93 85.3125C95.375 85.3125 97.375 84.5625 99 83.0625C100.625 81.4375 101.438 79.4375 101.438 77.0625C101.438 74.6875 100.625 72.6875 99 71.0625Z" fill="#065E7C"/>
                    </svg>
                   */}

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
                            <Button title={"Pratos favoritos"}/>
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
