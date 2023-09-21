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

    overflow-x: hidden;
`;

export const Main = styled.main`
    grid-area: "main";
    padding: 2.4rem 12.3rem;

    display: grid;
    grid-template-columns: 2fr 2.5fr;

    margin: 0 auto;

    h2 {
        font-size: 3.2rem;
        line-height: 4.5rem;
        font-weight: 500;
        color: ${({theme})=> theme.COLORS.GRAY};
    }

    .allOrders{
        display: flex;
        flex-direction: column;
        gap: 3.2rem;

          >span{
            color: ${({theme}) => theme.COLORS.LOGO_COLOR};
          }
   }

   .priceItems{
        font-size: 2rem;
        line-height: 3.2rem;
        font-weight: 500;
    }

    .paymentMethods{
        margin-left: 3rem;
    }

    .paymentBox{
        margin-top: 3.2rem;
        width: 53rem;
        height: 44.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
    .paymentMethods__wrapper{
        display: flex;
        justify-content: space-between;

        button {
            width: 26.5rem;
            height: 8.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000C12;
            color: ${({theme})=> theme.COLORS.WHITE};
            border: 1px solid rgba(255, 255, 255, 0.1);

            &:disabled {
                background: rgba(255, 255, 255, 0.05)
        }
        }
        .paymentForms{
            img{
                width: 27rem;
                height: 27rem;
            }
        }
    }


    @media (max-width: 600px) {

    grid-area: "main";
    /* width: fit-content; */
    padding: 2.4rem 2rem;

    display: flex;
    flex-direction: column;

    margin: 0rem;

    h2 {
        font-size: 2.5rem;
    }

    .allOrders{
        display: flex;
        flex-direction: column;
        gap: 2rem;

          >span{
              justify-content: center;
            color: ${({theme}) => theme.COLORS.LOGO_COLOR};
          }
   }

   .priceItems{
        font-weight: 700;
        font-size: 1.7rem;
    }

    .paymentMethods{
        margin-top: 5rem;
        margin-left: 0rem;
        width: fit-content;
    }

    .paymentBox{
        margin-top: 3.2rem;
        width: 43rem;
        height: 44.5rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
    .paymentMethods__wrapper{

        button {
            width: 21.5rem;
            height: 8.1rem;
        }
        }
        .paymentForms{
            img{
                width: 20rem;
                height: 20rem;
            }
        }
    }

`;