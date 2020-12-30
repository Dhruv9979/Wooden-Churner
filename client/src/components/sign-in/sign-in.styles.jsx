import styled from "styled-components";
import {Link} from 'react-router-dom';

export const SignInContainer = styled.div`
	width: 350px;
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
