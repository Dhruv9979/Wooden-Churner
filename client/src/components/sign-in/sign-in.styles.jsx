import styled from "styled-components";
import {Link} from 'react-router-dom';

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ForgotPasswordContainer = styled(Link)`
	margin-top: 20px;
`;

export const ModalContainer = styled.div`
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.4s ease-in-out;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	z-index: 2;

	&.true {
		opacity: 1;
		pointer-events: visible;
	}
`;

export const ModalInner = styled.div`
	background: #fefeb3;
	width: 600px;
	max-width: calc(100% - 60px);
	margin: auto;
	display: flex;
	border-radius: 8px;
	padding: 15px;
`;

export const CloseContainer = styled(Link)`

	svg {
		width: 40px;
		heigth: 40px;
		fill: #762522;
	}
`;

export const ModalText = styled.div`
	padding: 25px;
`;

export const ModalHeader = styled.h2`
`;

export const Text = styled.div`
	line-height: 180%;
`;