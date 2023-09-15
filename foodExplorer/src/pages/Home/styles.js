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
`;


export const Main = styled.main`
    grid-area: "main";
    max-width: 136.8rem;
    display: flex;
    margin: 0 auto;

    .Banner {
        position: relative;

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

        box-shadow: 0px 0px 10px 5px ${({theme}) => theme.COLORS.LOGO_COLOR};

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
`;