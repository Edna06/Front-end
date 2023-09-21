import styled from 'styled-components'

export const Container = styled.section`
        display: flex;
        gap: 4rem;

    .ingredients-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 1rem;
        padding: 0.6rem;

        border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

        > span {
            font-size: 1.8rem;
            line-height: 2.6rem;
            font-weight: 300;
            color: ${({theme}) => theme.COLORS.GRAY};
        }


    @media (max-width: 600px) {

        border-radius: 1rem;
        padding: 0.1rem;

        border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

        > span {
            font-size: 1.7rem;
            line-height: 2.6rem;
        }
    }}

`;