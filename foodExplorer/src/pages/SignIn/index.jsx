import { Container } from './styles'
import { Button } from '../../components/Button/index'
import {AddButton} from '../../components/AddButton'
import {ButtonHeader} from '../../components/ButtonHeader'

export function SignIn(){
  return(
    <Container>

      <h1> Olá, mundo!</h1>

      <Button title="Criar conta"/>
      <AddButton/>
      <ButtonHeader title="Meu pedido (0)"/>


    </Container>
  )
}