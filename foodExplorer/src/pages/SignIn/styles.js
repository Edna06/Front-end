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

    >a:hover{
      color: ${({theme}) => theme.COLORS.GRAY_200};
    }

    input{
      border: 1px solid ${({theme}) => theme.COLORS.LOGO_COLOR};
    }

    button:hover{
      transform: scale(0.99);
      transition: all 0.7s;
    }
`