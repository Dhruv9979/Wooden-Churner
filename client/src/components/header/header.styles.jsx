import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    background: linear-gradient(to right, #9dfbc8, #f5f186);
    height: 170px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-radius: 8px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;

    @media screen and (max-width: 800px) {
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 220px;
    padding-left: 40px;

    @media screen and (max-width: 800px) {
        width: 50px;
        padding: 0;
    }
`;

export const MenuContainer = styled.div`
    padding-bottom: 80px;
    display: flex;
    justify-content: flex-end;
`;

export const WavesContainer = styled.div`
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);

    svg {
        position: relative;
        display: block;
        width: calc(150% + 1.3px);
        height: 100px;
        transform: rotateY(180deg);
    }

    .shape-fill {
        fill: #ffffff;
    }
`;
