import { Container } from './styles'

export function Button( props ){
  return (
    <Container type="button" disabled={props.loading}>
        {props.loading? "carregando..." : props.title}
    </Container>
  );
}