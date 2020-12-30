import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
	margin: 10px 15px;
	width: 35px;
	height: 35px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: #762522;
	font-family: 'Poppins', serif;
`;

CartContainer.displayName = "CartContainer";

export const ShoppingIcon = styled(ShoppingIconSVG)`
	width: 50px;
	height: 50px;
`;

export const ItemCountContainer = styled.span`
	position: absolute;
	font-size: 15px;
	font-weight: bold;
	bottom: 2px;
`;
ItemCountContainer.displayName = "ItemCountContainer";

export const TitleContainer = styled.span`
	position: absolute;
	top: 32px;
	font-size: 18px;
`;
