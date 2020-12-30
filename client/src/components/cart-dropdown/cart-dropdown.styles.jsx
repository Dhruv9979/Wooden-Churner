import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 3px solid #d6f5a4;
	border-radius: 8px;
	background-color: #fff;
	top: 90px;
	right: 40px;
	z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
	margin: 10px auto auto;
	width: 100px;
`;

CartDropdownButton.displayName = "CartDropdownButton";

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

EmptyMessageContainer.displayName = "EmptyMessageContainer";

export const CartItemsContainer = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;
