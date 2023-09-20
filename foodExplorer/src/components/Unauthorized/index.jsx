import { Container } from './styles';

import { Button } from '../Button';

import { useNavigate } from 'react-router-dom';

export function Unauthorized(){

    const navigate = useNavigate()

    function handleGoBack(){
        navigate("/")
    }

    return(
        <Container>
            <div>
                <h4>Error 401</h4>
                <span>Oops!</span>
                <h3>Você não possui autorização para acessar essa página! </h3>

                <Button
                title={"Voltar"}
                onClick={handleGoBack}
                />
            </div>
        </Container>
    )
}