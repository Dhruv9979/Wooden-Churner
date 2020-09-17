import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/collection-item.component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
	CollectionPreviewContainer,
	TitleContainer,
	PreviewContainer,
} from './collection-preview.styles';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 3,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CollectionPreview = ({ title, routeName, items, history, match }) => (
	<CollectionPreviewContainer>
		<TitleContainer onClick={() => history.push(`${match.url}/${routeName}`)}>
			<h1>{title.toUpperCase()}</h1>
		</TitleContainer>
		<PreviewContainer>
			<Carousel responsive={responsive}>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</Carousel>
		</PreviewContainer>
	</CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
