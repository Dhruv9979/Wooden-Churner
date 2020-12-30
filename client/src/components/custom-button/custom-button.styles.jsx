import styled, { css } from "styled-components";

const buttonStyles = css`
	background: #d6f5a4;
	color: #762522;
	border: none;

	&:hover {
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
	}

	&:active {
		transform: scale(.9);
		outline: none;
	}
`;

const invertedButtonStyles = css`
	background: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	border-radius: 5px;
	min-width: 125px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 10px 0 10px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Poppins', serif;
	cursor: pointer;
	display: flex;
	justify-content: center;
	${buttonStyles}
`;
