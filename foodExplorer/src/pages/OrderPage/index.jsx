//imports
import { Container, Main } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderItem } from '../../components/OrdemItem';
import { PaymentForm } from '../../components/PaymentForm';

import qrCode from '../../assets/svg/qrcode.svg';

import {BsXDiamond} from 'react-icons/bs';
import {AiOutlineCreditCard} from 'react-icons/ai';

import { useState } from 'react';

export function OrderPage(){

    const [paymentType, setPaymentType] = useState('card');

    const selectedPix = paymentType === 'pix';
    const selectedCard = paymentType === 'card';

    function handlePix() {
        setPaymentType('pix');
    }

    function handleCreditCard() {
        setPaymentType('card');
    }

    return(
        <Container>
            <Header />

            <Main>
            <section className='allOrders'>
                    <h2>Meu pedido</h2>

                    <OrderItem
                    qntd={1}
                    title={"PomoBourbon"}
                    price={79.97}
                    />

                    <OrderItem
                    qntd={3}
                    title={"Torradas de Parma"}
                    price={25.97}
                    />

                    <OrderItem
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />

                    <OrderItem
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />

                    <OrderItem
                    qntd={2}
                    title={"Bolo de damasco"}
                    price={19.97}
                    />

                    <span className='priceItems'>Total: R$ 197,82</span>
                </section>


                <section className='paymentMethods'>
                    <h2>Pagamento</h2>

                    <div className='paymentBox'>
                        <div className='paymentMethods__wrapper'>
                            <button disabled={selectedPix} onClick={handlePix}>
                                <BsXDiamond size={24}/>
                                PIX
                            </button>

                            <button disabled={selectedCard} onClick={handleCreditCard}>
                                <AiOutlineCreditCard size={24}/>
                                Crédito
                            </button>

                        </div>

                        <div className='paymentForms'>
                            {paymentType === 'pix' ? <img src={qrCode} /> : <PaymentForm />}
                        </div>
                    </div>

                </section>
            </Main>

            <Footer />
        </Container>
    )
}
