import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10.4rem auto 7.2rem;
    grid-area:
    "header"
    "main"
    "footer";
`;

export const Main = styled.main`
    grid-area: "main";
    margin: 0 auto;
    width: 70rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2.4rem 12.3rem;

    > div {

        background: transparent;

        >input{
            border: 2px solid white;

            &:focus-within{
                border: 2px solid ${({theme}) => theme.COLORS.LOGO_COLOR};
      }}
    }
        h2 {
            font-size: 2rem;

            >span{
                color: ${({theme})=> theme.COLORS.TEXT_DELETE}
            }
        }




        @media (max-width: 600px) {

        width: 100%;
        padding: 2rem;

        display: flex;
        text-align: center;
        align-items: center;

        h2 {
                width: 30rem;
                font-size: 2rem;

                font-style: oblique;

                >span{
                    color: ${({theme})=> theme.COLORS.TEXT_DELETE}
                }
            }
        }
`;