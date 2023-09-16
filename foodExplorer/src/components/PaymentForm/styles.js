import styled from "styled-components";

export const Container = styled.form`
    width: 35rem;
    height: 27.4rem;


    div{
      background-color: transparent;

      >input{
        border: 1px solid ${({theme}) => theme.COLORS.GRAY};
      }
    }

    div:first-child{
      margin-bottom: 3rem;
    }

    .secondRow{
        display: flex;
        gap: 2rem;
    }
`;