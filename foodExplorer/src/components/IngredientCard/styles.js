import styled from 'styled-components'

export const Container = styled.section`
        display: flex;
        gap: 4rem;
    .ingredients-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.4rem;

        > span {
            font-size: 1.8rem;
            line-height: 2.6rem;
            font-weight: 300;
            color: ${({theme}) => theme.COLORS.GRAY};
        }
    }
`;