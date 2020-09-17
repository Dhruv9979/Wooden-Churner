import styled, { css } from 'styled-components';
import {Link} from 'react-router-dom';

const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;

export const HeaderContainer = styled.div`
	height: 150px;
	width: 100%;
	background: #fefeb3;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	position: -webkit-sticky;
	position: sticky;
	top: 0;
	z-index: 1;
`;

export const LogoContainer = styled(Link)`
	height: 100%;
	width: 70px;
	padding: 25px;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	font-size: 22px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
	${OptionContainerStyles}
`;