import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`

    grid-area: "header";

    width: 100%;
    height: 10.4rem;
    background-color: ${({theme}) => theme.COLORS.BRACKGROUND_HEADER};
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;
    padding: 2.4rem 12.3rem;
    justify-content: space-between;

    button {
        max-width: 21.6rem;
    }

    .adm-header{
        display: flex;
        align-items: center;

        svg{
            margin-left: 5rem;
        }
    }

    //adicionando responsividade
    @media (max-width: 1140px){
            gap: 2rem;
            padding: 2.4rem 6rem;
        > a {
            min-width: 12rem;
        }
    }

    @media (max-width: 850px) {
        gap: 1.6rem;
        padding: 2.4rem 3rem;

        > a {
            min-width: 12rem;
            font-size: 1.4rem;
            text-align: center;
        }

        button {
            max-width: 12rem;
            font-size: 1.2rem;
            padding: 0.6rem 2rem;
            > svg {
                display: none
            }
        }
    }

    @media (max-width: 600px) {

        gap: 1rem;
        padding: 2.4rem 1.5rem;

        > a {
            min-width: 8rem;
            font-size: 1.2rem;
        }

        button {
            max-width: 12rem;
            font-size: 1.2rem;
            padding: 0.4rem 1rem;
        }
    }

    @media (max-width: 430px) {

        gap: 0.rem;
        padding: 2.4rem 1rem;

        > a {
            min-width: 6rem;
            font-size: 1.2rem;
        }

        button {
            max-width: 8rem;
            font-size: 1rem;
        }
    }
`;

export const Logo = styled(Link)`
    min-width: 21rem;
    gap: 1.2rem;
    display: flex;
    align-items: center;

    text-decoration: none;
    color: currentColor;


    > h1 {
        font-size: 2.4rem;
    }

    .applicationName{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

      > p{
          color: ${({theme}) => theme.COLORS.LOGO_COLOR};
          font-weight: bolder;
      }
    }

      > svg {
          width: 6rem;
          height: 6rem;
      }

    @media (max-width: 1140px){
    min-width: 18rem;

      > h1 {
          font-size: 2rem;
      }
    }

    @media (max-width: 850px) {
    min-width: 6rem;
    gap: 0rem;

      h1{
        display: none;
    }
      > svg {
        width: 6rem;
        height: 6rem;
      }
}
    @media (max-width: 600px) {
        display: none;
    }
`;

export const Search = styled.div`
    width: 90rem;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
    border-radius: 8px;

    border: 2px solid transparent;
    &:focus-within{
        border: 2px solid ${({theme}) => theme.COLORS.LOGO_COLOR};
    }

      > input {
          height: 4.8rem;
          width: 100%;
          padding: 1.6rem 1.4rem;
          color: ${({theme}) => theme.COLORS.WHITE};
          background: ${({theme}) => theme.COLORS.INPUT_BACKGROUND};
          border: none;
          border-radius: 8px;
      }

      > svg {
          margin-left: 1.4rem;
          fill: ${({theme}) => theme.COLORS.GRAY_100};;
      }

    @media (max-width: 850px) {
        > input {
            font-size: 1.4rem;
            padding: 1.2rem 1rem;
        }
    }
    @media (max-width: 600px) {
        > input {
            padding: 0.8rem 0.6rem;
            font-size: 1.4rem;
        }
        > svg {
        margin-left: 1rem;
        fill: ${({theme}) => theme.COLORS.GRAY_100};;
        }
    }
`;

export const User = styled(Link)`
   color: white;

   svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    :hover{
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.LOGO_COLOR};
    }
`


export const Logout = styled.div`
    svg {
      width: 3.2rem;
      height: 3.2rem;
    }

    :hover{
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.LOGO_COLOR};
    }


    //adicionando responsividade
    @media (max-width: 850px) {
        svg {
        width: 2.2rem;
        height: 2.2rem;
        }
    }
    @media (max-width: 600px) {
        svg {
        width: 1.8rem;
        height: 1.8rem;
        }
    }
`;

export const Profile = styled.button`
    text-decoration: none;
    border: none;
    outline: none;
    background: transparent;

    > svg {
        color: ${({theme}) => theme.COLORS.WHITE};
        width: 3.2rem;
        height: 3.2rem;
        transition: all 400ms ease;
        &:hover{
            transform: scale(1.2);
        }
    }
`;

