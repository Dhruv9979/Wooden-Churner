import React from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import "./collection-preview.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, routeName, items, history, match }) => (
	<div className="collection-preview">
		<div onClick={() => history.push(`${match.url}/${routeName}`)} className="title">
			<h1>{title.toUpperCase()}</h1>
		</div>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
);

export default withRouter(CollectionPreview);