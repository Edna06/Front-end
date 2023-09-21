import styled from 'styled-components'

export const Container = styled.button`
    background-color: ${({theme})=> theme.COLORS.BUTTON_SIGNIN};
    color: ${({theme})=> theme.COLORS.WHITE};

    width: 100%;
    height: 4.8rem;

    border-radius: 0.5rem;
    padding: 1.2rem 3.2rem;

    &:disabled{
        opacity: 0.5;
    }

    @media (max-width: 600px) {
    width: fit-content;
    height: 5.8rem;

    padding: 0.5rem 3.2rem;
    margin: 0 auto;
    }

`;