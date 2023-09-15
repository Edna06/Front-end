import styled from 'styled-components'

export const Container = styled.div`

    grid-area: "footer";

    width: 100%;
    min-height: 7.2rem;

    background-color: ${({theme}) => theme.COLORS.BRACKGROUND_HEADER};
`;

export const Content = styled.div`

    max-width: 136.8rem;
    margin: auto;
    padding: 2.4rem 12.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
        padding: 1.8rem 0.5rem;
    }
`;

export const Logo = styled.div`

    display: flex;
    align-items: center;
    gap: 1.2rem;

    >h2{
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        line-height: 2.9rem;
        line-height: 3rem;
        opacity: 0.3;
    }

    @media (max-width: 600px) {

        gap: 0.2rem;

        >svg{
            width: 2.2rem;
            height: 1.8rem;
        }

        >h2{
            font-size: 1.52rem;
        }
    }

`;

export const Copyright = styled.span`

    > span {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.8rem;
        color: ${({theme})=> theme.COLORS.WHITE_200}
    }


    @media (max-width: 600px) {
    >span {
        font-size: 1.2rem;
    }
}
`;