import React from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
	<div className="collection-preview">
		<div onClick={() => history.push(`${match.url}/${routeName}`)} className="title">
			<h1>{title.toUpperCase()}</h1>
		</div>
		<div className="preview">
			<Carousel responsive={responsive}>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</Carousel>
		</div>
	</div>
);

export default withRouter(CollectionPreview);
