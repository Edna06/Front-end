import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    background-color: ${({theme})=> theme.COLORS.BUTTON};
    color: ${({theme})=> theme.COLORS.WHITE};

    min-width: fit-content;
    height: 5.6rem;

    border-radius: 0.5rem;

    padding: 1.2rem 3.2rem;
    padding-left: -10px;
    gap: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    >svg:nth-child(1){
        margin-left: -1.2rem;
    }

    > svg {
        width: 3.2rem;
        height: 3.2rem;
    }

    @media (max-width: 600px){

        background: none;
        font-size: 0rem;
        width: fit-content;
        padding: 0px;

        > svg {
        width: 3.4rem;
        height: 3.4rem;
    }

    :hover{
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.LOGO_COLOR};
    }
    }
`;
