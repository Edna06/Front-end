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

    .options{
        display: flex;
        align-items: center;
        gap: 5rem;

    }

    //adicionando responsividade
    @media (max-width: 1140px){
        gap: 2rem;
        padding: 2.4rem 6rem;

        > a {
            min-width: 12rem;
        }
    }

    @media (max-width: 600px) {

    gap: 0.5rem;
    padding: 2rem 2rem;

    > a {
            min-width: 0rem;
        }
        .options{
        gap: 1rem;
    }


    .adm-header{
        display: flex;
        flex-direction: row;
        align-items: center;

        svg{
            margin-left: 3rem;
        }

        >div:nth-child(1){
            color: blue;
        }
    }}

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


    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 0rem;

        > h1 {
        font-size: 1rem;
    }

    .applicationName{
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        h2{
            font-size: 1.5rem;
        }

      > p{
          font-weight: bolder;
          font-size: 1rem;
      }
    }

      > svg {
          width: 2rem;
          height: 2rem;
      }

}`;

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

    @media (max-width: 600px) {

        display: none;

        > input {
            width: 0;
            height: 0;
            display: none;
        }

        > svg {
        display: none;
        }
    }
`;

export const User = styled(Link)`
   color: white;

   svg {
      width: 3.5rem;
      height: 3.5rem;
    }

    :hover{
        cursor: pointer;
        color: ${({theme}) => theme.COLORS.LOGO_COLOR};
    }

    @media (max-width: 600px) {

        svg {
            margin-left: 0rem;
            margin-right: 0rem;
        }
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
    @media (max-width: 600px) {

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }}
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


