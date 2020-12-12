import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    &:hover {
        .image {
            opacity: 0.8;
        }
        button {
            opacity: 0.85;
            display: flex;
        }
    }

    @media screen and (max-width: 800px) {
        width: 40vw;
        &:hover {
            .image {
                opacity: unset;
            }
            button {
                opacity: unset;
            }
        }
    }
`;

export const AddButton = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px;
    }
`;

AddButton.displayName = 'AddButton';

export const BackgroundImage = styled(Link)`
    width: 100%;
    height: 90%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-bottom: 5px;
    position: relative;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImage.displayName = 'BackgroundImage';


export const TextContainer = styled.div`
	position: relative;
	z-index: 1;
    font-size: 35px;
    text-transform: uppercase;
	top: 50%;
	left: 5%;
	color: darkred;
	transform: rotate(65deg);
`;

export const TestOpacity = styled.div`
    position:absolute;  
    top:0;  
    bottom:0;
    left:0;  
    width:100%;  
    background-color: #fff;
    opacity: 0.8;
`;

TestOpacity.displayName = 'TestOpacity';

export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    padding: 0 45px;
    font-size: 15px;
`;

CollectionFooterContainer.displayName = 'CollectionFooterContainer';

export const NameContainer = styled.span`
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
`;

NameContainer.displayName = 'NameContainer';

export const PriceContainer = styled.span`
    width: 25%;
    text-align: right;
`;

PriceContainer.displayName = 'PriceContainer';
