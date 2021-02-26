import styled from 'styled-components';

export const ProductPageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
    color: #762522;
`;

export const ProductItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
    }
`;

export const OptionButton = styled.button`
    padding: 10px 15px 50px;
    width: 150px;
    background-color: #fff;
    border: none;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    outline: none;
    color: #762522;
    font-family: 'Poppins', serif;
`;
