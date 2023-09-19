import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    background-color: ${({theme})=> theme.COLORS.BUTTON};
    color: ${({theme})=> theme.COLORS.WHITE};

    min-width: 20%;
    height: 5.6rem;

    border-radius: 0.5rem;

    padding: 1.2rem 3.2rem;
    gap: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
        width: 3.2rem;
        height: 3.2rem;
    }
`;
