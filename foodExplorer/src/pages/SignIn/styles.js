import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > div{
        display: flex;
        align-items: center;
        gap: 2rem;
        > h1 {
            font-size: 4.2rem;
            line-height: 5rem;
        }
    }


    //adicionando responsividade
    @media (max-width: 810px) {
    > div{
        > h1 {
            font-size: 3.6rem;
        }
        > svg {
            width: 6rem;
            height: 6rem;
        }
    }
}
    @media (max-width: 760px) {
    flex-direction: column;
    justify-content: space-evenly;
    > div{
        padding: 1.2rem;
        > h1 {
            font-size: 3.2;
            line-height: 4rem;
        }
        > svg {
            width: 5.2rem;
            height: 5.2rem;
        }
    }
}
`;

export const Form = styled.form`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    min-width: 47.6rem;
    min-height: 54rem;
    padding: 6.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    gap: 3.2rem;
    border-radius: 1.6rem;
    box-shadow: -0.7rem 0.4rem 0 ${({theme}) => theme.COLORS.LOGO_COLOR};

    >h2 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 2.4rem;
        text-align: center;
    }

    > a {
        text-decoration: none;
        color: ${({theme})=> theme.COLORS.WHITE};
    }

    >a:hover{
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    input{
      border: 1px solid ${({theme}) => theme.COLORS.LOGO_COLOR};
    }

    //adicionando responsividade
    @media (max-width: 768px) {
      min-width: 42rem;
      padding: 4.8rem;
      margin: 0 1rem;
    }

    @media (max-width: 350px) {
      min-width: 30rem;
      padding: 3.2rem;
      margin: 0 2rem;
        >h2 {
         font-size: 2.2rem;
    }
}
`