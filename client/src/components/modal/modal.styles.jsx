import styled from "styled-components";
import {Link} from 'react-router-dom';

export const ModalContainer = styled.div`
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.4s ease-in-out;
	position: absolute;
	top: 0;
	left: 0;
	min-width: 100vw;
	height: ${({ vh }) => `${vh}px`};
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	z-index: 2;
	overflow: hidden;
	&.true {
		opacity: 1;
		pointer-events: visible;
	}
`;

export const ModalInner = styled.div`
	background: #fff;
	width: 600px;
	max-width: calc(100% - 60px);
	margin: auto;
	display: flex;
	border-radius: 8px;
	padding: 15px;
	color: #309030;
`;

export const CloseContainer = styled(Link)`

	svg {
		width: 40px;
		heigth: 40px;
		fill: url(#MyGradient);
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