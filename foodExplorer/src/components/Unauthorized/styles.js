import styled from "styled-components";

export const Container = styled.div`
    grid-area: "main";
    margin: 0 auto;
    width: 136.8rem;

    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;


    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        animation: topdown 0.8s;
        h4{
            font-size: 1.8rem;
            font-weight: 300;
        }
        span{
            font-weight: 700;
            color: ${({theme})=> theme.COLORS.TEXT_DELETE};
            font-size: 9rem;

        }

        button{
            margin: 3rem auto;
            width: 12rem;
        }
    }
        @keyframes floaty {
        0% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(30px);
        }
        }
        @keyframes topdown {
        0%{
            opacity: 0;
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;