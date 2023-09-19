//imports
import { Container, Content, Logo, Logout, Search, User } from './styles';
import { ButtonHeader } from '../../components/ButtonHeader';
import { AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';

import {Link} from 'react-router-dom';

import {useAuth} from '../../Hooks/authContext'

export function Header(){

    const {signOut} = useAuth();

    return(
        <Container>
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
                />
            </Search>


            <ButtonHeader
                title="Pedidos (0)"
            />

            <User to='/profile' onClick={() => {console.log("estou clui")}}>
            <AiOutlineUser/>
            </User>

            <Logout onClick={signOut}>
                <FiLogOut />
            </Logout>

            </Content>
        </Container>
    )
}