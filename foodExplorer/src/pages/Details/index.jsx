//imports
import { Container, Main } from './styles';

import { Header } from '../../components/Header/';
import { Footer } from '../../components/Footer/';

import { CardDetails } from '../../components/CardDetails'

export function Details(){
    return(
        <Container>
            <Header />

            <Main>

            <CardDetails
                    title={"Salada de Ravanello"}
                    description={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."}
                    price={25.97}
            />
            </Main>

            <Footer />
        </Container>
    )
}