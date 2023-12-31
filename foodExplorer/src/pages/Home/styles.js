import styled from 'styled-components';
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
    max-width: 136.8rem;
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    align-items: center;


    .Banner {
        position: relative;
        margin-bottom: 6.2rem;
        > img {
            position: absolute;
            top: 1.5rem;
            left: -5rem;
            z-index: 10;
        }
        .Banner-background {
        width: 112rem;
        height: 26rem;
        margin-top: 16.4rem;
        position: relative;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border: 1px solid #000000;
        border-radius: 0.8rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        > div{
            position: absolute;
            top: 8.7rem;
            left: 59.7rem;
            > h2 {
                font-size: 4rem;
                line-height: 5.6rem;
                font-weight: 500;
            }
            > span{
                font-size: 1.6rem;
                line-height: 2.2rem;
                font-weight: 400;
            }
        }
    }
    }
    .dishesSections{
    width: 100%;
    height: 67.2rem;
    justify-content: center;
    padding: 0;

    display: flex;
    flex-direction: column;

    margin-top: 6rem;
    margin-left: 15%;
    margin-bottom: 6rem;


        h2 {
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 4.5rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        margin-bottom: 3rem;
    }
    }

       //adicionando responsividade
    @media (max-width: 600px) {
        .Banner {
        position: relative;
        margin-top: -12rem;

        > img {
            width: 19.1rem;
            height: 14.9rem;

            top: 14.5rem;
            left: -2.7rem;
            z-index: 10;

        }
        .Banner-background {
            width: 37.6rem;
            height: 12rem;

        > div{
            position: absolute;
            top: 0.5rem;
            left: 16.7rem;
            width: 21.5rem;

            > h2 {
                font-size: 1.8rem;
            }
            > span{
                font-size: 1.2rem;
            }
        }
     }
    }
 }

`;