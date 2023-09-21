import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.4rem auto 7.2rem;
    grid-area:
    "header"
    "main"
    "footer";

    .titleSectionIngredients{
    >p{
    color: ${({theme}) => theme.COLORS.GRAY_100};
        }
}`;

export const Main = styled.main`
    grid-area: "main";
    margin: 0 auto;
    width: 136.8rem;

    display: flex;
    flex-direction: column;
    padding: 2.4rem 12.3rem;

    @media (max-width: 600px) {
    margin: 0 auto;
    width: 100%;

    padding: 2rem 2rem;
    }
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
    > h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 4.48rem;
    }

    @media (max-width: 600px) {
    margin: 1rem 0;

    > a {
        font-size: 1.9rem;
    }
    > h2 {
        font-size: 2.6rem;
    }}
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 136.8rem;
    label {
        background-color: ${({theme})=> theme.COLORS.BACKGROUND};
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    input {
        background-color: ${({theme})=> theme.COLORS.BACKGROUND};
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
        height: 5.8rem;
        width: 22rem;
     }
    }
  }
}`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
    margin-bottom: 3.2rem;

    >div{
      background: none;

      :nth-child(2){
        border: 1px solid white;
      }
    }

    .dishCategory {
    p{
        color: ${({theme})=> theme.COLORS.GRAY_100};
    }

    select {
    margin-top: 1rem;
    background: transparent;

    border-radius: 0.5rem;
    border: none;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY};

    height: 4.8rem;
    width: 20rem;

    padding: 12px;

    font-size: 16px;

    line-height: 26px;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
}


@media (max-width: 600px) {

    .dishCategory {
        select{
            height: 4.8rem;
            width: 12rem;
    }
}}

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
        border: 1px solid white;
        resize: none;
    }
`;

export const SectionIngredients = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    width: 100%;
    border-radius: 0.5rem;
    padding: 1rem;
`;


export const SendFormWithImage = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    > button{
        width: 40%;
    }`;