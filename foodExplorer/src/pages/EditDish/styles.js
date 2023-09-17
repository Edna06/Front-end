import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    /* max-width: 136.8rem; */
    margin: 7rem auto 0;
    width: 136.8rem;

    display: flex;
    flex-direction: column;
    padding: 2.4rem 12.3rem;

    >h2{
        font-size: 32px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 136.8rem;

    label {
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    input:nth-child(2){
        border: 1px solid ${({theme}) => theme.COLORS.GRAY};
    }

    .inline {
        display: flex;
        justify-content: space-between;

        >div{
            background-color: ${({theme})=> theme.COLORS.BACKGROUND};
            width: 223px;
        }
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    gap: 3.2rem;
    flex-wrap: wrap;
    margin-bottom: 3.2rem;
    margin-top: 3.2rem;

    >div{
        background-color: ${({theme})=> theme.COLORS.BACKGROUND}
    }
`;

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    margin-bottom: 4.8rem;

    > label{
        margin-top: 3.2rem;
        width: 100%;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > textarea {
        height: 17.2rem;
        width: 100%;
        padding: 1.4rem;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border-radius: 0.5rem;
        border: 1px solid ${({theme}) => theme.COLORS.GRAY};
        resize: none;
    }
`;

export const SectionIngredients = styled.section`

>p{
    color: ${({theme}) => theme.COLORS.GRAY_100};
    margin-bottom: 1rem;
}

.ingredients{
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    width: 100%;

    }
`;

export const SectionPrice = styled.div`
    width: 20%;
`;

export const ButtonBack = styled(Link)`
    background-color: transparent;
    color: ${({theme})=> theme.COLORS.GRAY};
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 33.6rem;
    position: absolute;
    top: -2rem;
    left: 10%;

    :hover {
        color: ${({theme})=> theme.COLORS.LOGO_COLOR};
    }
`;