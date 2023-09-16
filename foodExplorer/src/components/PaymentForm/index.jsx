//imports
import { Container } from './styles';
import { Input } from '../Inputt';
import { Button } from '../Button';

export function PaymentForm(){

    return(
        <Container>
                <div className='firstRow'>
                    <Input
                    title={'Número do cartão'}
                    label={'Número do cartão'}
                    placeholder={'0000 0000 0000 0000'}
                    maxLength="16"
                    />
                </div>

                <div className='secondRow'>
                    <Input
                    title={'Validade'}
                    label={'Validade'}
                    placeholder={'MM/YY'}
                    maxLength="5"
                    />

                    <Input
                    title={'CVC'}
                    label={'CVC'}
                    placeholder={'999'}
                    maxLength="3"
                    />
                </div>


                <Button
                title={'Efetuar pagamento'}
                />
        </Container>
    )
}