import styled from "styled-components";

import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    min-height: 46.5rem;

    display: flex;
    align-items: center;
    gap: 6rem;

    position: relative;

    margin-top: 9rem;
    margin-bottom: 6rem;

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

    .ingredients{
        display: flex;
        gap: 8px;
    }

    .ingredients-wrapper{
        width: fit-content;
        background: var(--dark-dark-1000, #192227);
        display: flex;
        padding: 0.4rem 0.8rem;
        justify-content: center;
        align-items: center;
        border-radius: 5px;

        > span {
            font-size: 1.8rem;
            line-height: 2.6rem;
            font-weight: 300;
            color: ${({theme}) => theme.COLORS.GRAY};
            ;

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
    top: -21rem;

    :hover {
        color: ${({theme})=> theme.COLORS.LOGO_COLOR};
    }
`;