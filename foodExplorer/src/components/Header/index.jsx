//imports
import { Container, Content, Logo, Logout, Search, User,Profile } from './styles';
import { ButtonHeader } from '../../components/ButtonHeader';
import { AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi';

import {useAuth} from '../../Hooks/authContext';

import { useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../../Services/api';

export function Header({search}){

    const {user, signOut} = useAuth();

    const navigate = useNavigate();

    function handleGoToProfilePage(){
        navigate("/profile")
    };

    function handleWrapperSignOut(){
        signOut()
        navigate("/")
    };

    return(
        <Container>

            {
                !user.isAdmin?

            <Content>
                <Logo to='/'>
                    <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.0318 0.216515L43.4349 12.0919V35.8426L22.0318 47.7179L0.628698 35.8426V12.0919L22.0318 0.216515Z" fill="#065E7C"/>
                    </svg>
                    <h1>Food Explorer</h1>
                </Logo>

            <Search>
            {<AiOutlineSearch size={20}/>}
                <input
                    placeholder = "Busque por pratos"
                    type = "text"
                    onChange={e => {search(e.target.value)}}
                />
            </Search>


            <ButtonHeader
                title="Pedidos (0)"
            />

            <User to='/profile' onClick={handleGoToProfilePage}>
            <AiOutlineUser/>
            </User>

            <Logout onClick={handleWrapperSignOut}>
                <FiLogOut />
            </Logout>

            </Content>
                    :
                 <Content>
                 <Logo to='/'>
                     <svg width="44" height="48" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
                     </svg>

                     <h2>Food Explorer</h2>
                 </Logo>

                 <div className='adm-header'>
                 <Profile onClick={handleGoToProfilePage}>
                     <RiAdminLine />
                 </Profile>

                 <Logout onClick={handleWrapperSignOut}>
                     <FiLogOut />
                 </Logout>
                 </div>


             </Content>
            }
        </Container>
    )
}