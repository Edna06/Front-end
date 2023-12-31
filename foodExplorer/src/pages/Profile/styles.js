import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.4rem auto 7.2rem;
    grid-area:
    "header"
    "main";

    @media (max-width: 600px) {
    margin-bottom: 32rem;
    }
`;

export const Main = styled.main`
    grid-area: "main";
    margin: 8rem auto;
    width: 110rem;
    display: flex;
    gap: 2rem;
    background-color: ${({theme}) => theme.COLORS.BRACKGROUND_HEADER};
    box-shadow: 0px 0px 10px 1px rgba(255, 255, 255, 0.1);
    .profile-card{
        width: 33%;
        box-shadow: 0px 0px 2px 1px rgba(255, 255, 255, 0.1);
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_PAYMENTBUTTON};
    }
    .profile-option{

        width: 67%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5rem;

        button{
            box-shadow: 0px 0px 8px 2px rgba(255, 255, 255, 0.1);
            height: 7rem;
            width: 70%;
        }
    }

    @media (max-width: 600px) {
        width: fit-content;
        gap: 0rem;

        display: flex;
        flex-direction: column;

        padding: 3rem;

        .profile-card{
         width: 100%;

         box-shadow: none;
         border-bottom: 2px solid  rgba(255, 255, 255, 0.1) ;
          }


        .profile-option{
            width: 100%;
            align-items: center;
            gap: 3rem;
            padding: 8rem 0;

            button{
            width: 100%;
        }
        }}

`;

export const Form = styled.form`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    margin: 6rem auto;
    button{
        margin-top: 2rem;
    }

    > div:nth-child(1){
      border: transparent;
    }

    > div {
        border: 2px solid white;
        &:focus-within{
        border: 2px solid ${({theme}) => theme.COLORS.LOGO_COLOR};
        }
    }
    > div:nth-child(4) {
        margin-top: 2rem;
    }
`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 3.2rem;
    width: 17rem;
    height: 17rem;

    >img {
        width: 17rem;
        height: 17rem;
        border-radius: 50%;
    }

    > label {
        width: 4rem;
        height: 4rem;
        background-color: ${({theme})=> theme.COLORS.PROFILE_BUTTONS};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        cursor: pointer;

        input {
            display: none;
        }
        svg {
            width: 2rem;
            height: 2rem;
            color: ${({theme})=> theme.COLORS.GRAY_100};
        }
    }
`;