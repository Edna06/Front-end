import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.4rem auto 7.2rem;
    grid-area:
    "header"
    "main"
    "footer";
`;
export const Main = styled.main`
    grid-area: "main";
    margin: 0 auto;
    width: 136.8rem;

    display: flex;
    flex-direction: column;
    padding: 2.4rem 12.3rem;
    gap: 8rem;

    @media (max-width: 600px) {
        width: 100%;

        padding: 2.4rem 2rem;
        gap: 4rem;
    }
`;

export const Content = styled.div`
    width: 100%;
    min-height: 46.5rem;
    display: flex;
    align-items: center;
    gap: 6rem;
    position: relative;
    img {
        width: 45rem;
        height: 45rem;
    }
    h4 {
        font-size: 3.2rem;
        font-weight: 400;
        line-height: 5.12rem;
        color: ${({theme})=> theme.COLORS.VALUE_TEXT}
    }
    .details{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        width: 60.3rem;
        height: 35.6rem;
    }
    .details-wrapper{
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        > h2 {
            font-size: 4rem;
            color: ${({theme}) => theme.COLORS.GRAY};
            font-weight: 500;
            line-height: 5.6rem;
        }
        > p {
            font-size: 2.4rem;
            color: ${({theme}) => theme.COLORS.GRAY};
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            line-height: 3.4rem;
        }
    }

    .Amount {
            display: flex;
            align-items: center;
            gap: 2rem;
            .PlusItem,
            .MinusItem{
                display: flex;
                align-items: center;
                background: transparent;
                color: ${({theme})=> theme.COLORS.WHITE};
                > svg {
                width: 1.8rem;
                height: 1.8rem;
            }
        }
    }
    .AmountItemsAndBuy-wrapper {
        display: flex;
        align-items: center;
        gap: 5.4rem;
        span {
            font-weight: 700;
            font-size: 2rem;
            line-height: 3.2rem;
            color: ${({theme})=> theme.COLORS.GRAY};
    }
}

@media (max-width: 600px) {

    height: 100%;

    margin: -3rem 0 6rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    gap: 6rem;

    img {
        width: 30rem;
        height: 30rem;
    }
    h4 {
        font-size: 2.9rem;
    }
    .details{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 30.3rem;
        height: fit-content;
    }
    .details-wrapper{
        > h2 {
            font-size: 3rem;
        }
        > p {
            font-size: 2rem;
            line-height: 2rem;
        }
    }

    .AmountItemsAndBuy-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 2.4rem;

}



}`;

export const AllIngredientCards = styled.section`
    display: flex;
    gap: 1.2rem;
`;


export const ButtonBack = styled.div`
    margin: 1.8rem 0;
    max-width: 136.8rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    > a {
        background-color: transparent;
        color: ${({theme})=> theme.COLORS.GRAY};
        display: flex;
        align-items: center;
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.6rem;
    }

    @media (max-width: 600px) {
        margin: 1rem 0 3rem;
        > a {
        font-size: 1.9rem;
    }
}
`;