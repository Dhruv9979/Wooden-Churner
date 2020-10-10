import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${mainColor};
`;

export const ContactContainer = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
`;

export const Title = styled.h2`
	margin: 10px 0;
`;

export const ContactForm = styled.form`
	width: 500px;
`;

export const AddressInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 260px;
`;

export const TextArea = styled.div`
	position: relative;
	margin: 45px 0;
`;

export const TextAreaLabel = styled.label`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	&.shrink {
		${shrinkLabelStyles}
	}
`;

export const TextAreaInput = styled.textarea`
	background: none;
	background-color: white;
	color: ${subColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${subColor};
	margin: 25px 0;
	&:focus {
		outline: none;
	}
	&:focus ~ label {
		${shrinkLabelStyles}
	}
`;