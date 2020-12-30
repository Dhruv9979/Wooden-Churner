import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
	font-size: 36px;
	color: #762522;
	margin-bottom: 25px;
	cursor: pointer;
`;

TitleContainer.displayName = "TitleContainer";

export const PreviewContainer = styled.div`
	${"" /* display: flex;
	justify-content: space-between; */}

	@media screen and (max-width: 800px) {
		display: grid;
		grid-gap: 15px;
	}
`;
