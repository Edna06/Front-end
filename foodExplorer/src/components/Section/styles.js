import styled from "styled-components";

export const Container = styled.footer`
    width: 100%;
    height: 67.2rem;
    justify-content: center;
    padding: 0;

    display: flex;
    flex-direction: column;

    margin-top: 2rem;
    margin-left: 15%;



    h2 {
        font-weight: 500;
        font-size: 3.2rem;
        line-height: 4.5rem;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        margin-bottom: 3rem;
    }

    ::-webkit-scrollbar {
            display: none;
        }


    .slide-item{

        width: fit-content;
        height: 100vh;

        position: relative;


    }
`;