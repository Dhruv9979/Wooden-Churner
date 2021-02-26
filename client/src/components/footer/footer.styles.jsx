import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: linear-gradient(to right, #ffa500, #f5f186);
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
	padding: 10px;
    text-align: center;
	border-radius: 8px;
	position: relative;

    @media screen and (max-width: 800px) {
        margin-top: 70px;
    }
`;

export const VegetarianImg = styled.img`
    vertical-align: middle;
    width: 16x;
    height: 16px;
    margin-left: 5px;
`;

export const WavesContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(193% + 1.3px);
        height: 100px;
        transform: rotateY(180deg);
    }

    .shape-fill {
        fill: #ffffff;
    }
`;

export const ContentContainer = styled.div`
	padding-top: 70px;
`;
