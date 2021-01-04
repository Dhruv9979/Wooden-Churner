import styled from 'styled-components';
import CustomButton from "../custom-button/custom-button.component";

export const OrderContainer = styled.div`
    padding: 40px;
    margin: 20px 0;
    border: 2px dashed #762522;
    border-radius: 60px;
    background-color: white;
    position: relative;
`;

export const DateContainer = styled.p`
    top: 50px;
    right: 20px;
    position: absolute;
`;

export const AddButton = styled(CustomButton)`
	width: 10%;
	position: absolute;
	top: 70%;
	left: 85%;
	@media screen and (max-width: 800px) {
		min-width: unset;
		padding: 0 10px;
	}
`;

AddButton.displayName = 'AddButton';