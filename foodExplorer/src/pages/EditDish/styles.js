import styled from 'styled-components';

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
    margin: 2rem auto 0;
    width: 136.8rem;

    display: flex;
    flex-direction: column;
    padding: 2.4rem 12.3rem;

    >h2{
        font-size: 3.2rem;
    }

    @media (max-width: 600px) {
    margin: 0 auto;
    width: 100%;

    padding: 2rem 2rem;

    >h2{
        font-size: 2.4rem;
        font-weight: 600;

    }

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
    .uploadImage {
    #file {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      .uploadImageSelect {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        border-radius: 0.5rem;
        height: 4.8rem;
        width: 30rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      }
    }
    input[type="file"] {
    /* Retirando a mensagem padrão */
    display: none;
    }
  }

  @media (max-width: 600px) {
    .uploadImage {
    #file {
      .uploadImageSelect {
        height: 4.8rem;
        width: 22rem;
     }
    }
  }
}
`;

export const InputWrapper = styled.div`
    display: flex;

    flex-wrap: wrap;
    margin-bottom: 3.2rem;
    margin-top: 3.2rem;

    justify-content: space-between;

    >div{
        background-color: ${({theme})=> theme.COLORS.BACKGROUND};

    }

    >div:nth-child(2){
        width: 40%;
    }

    >div:nth-child(3){
        width: 30%;
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

export const SendFormWithImage = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

`;
