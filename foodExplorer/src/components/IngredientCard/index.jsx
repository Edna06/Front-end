//imports
import { Container } from './styles';

export function IngredientCard({data}){
    return(
        <Container>
            <div className='ingredients-wrapper'>
                <span>{data.title}</span>
            </div>
        </Container>
    )
}
