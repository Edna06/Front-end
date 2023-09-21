//imports
import { Container } from './styles';



export function ButtonHeader({title, icon, ...rest}){
    return(
        <Container to='/orderpage' {...rest}>
            {icon}
            {title}
        </Container>
    )
}