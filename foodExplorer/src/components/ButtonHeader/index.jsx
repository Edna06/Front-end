import {Container} from './styles'
import { TbReceipt } from 'react-icons/tb'

export function ButtonHeader({title}){
    return(
        <Container>
            <TbReceipt />
            {title}
        </Container>
    )
}