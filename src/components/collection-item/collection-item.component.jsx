import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";

import {
	CollectionItemContainer,
	CollectionFooterContainer,
	AddButton,
	BackgroundImage,
	NameContainer,
	PriceContainer,
} from "./collection-item.styles";


const CollectionItem = ({ item, addItem, match, history }) => {
	const { name, price, imageUrl, routeName, type } = item;
	const routingProducts = routeName
		? match.url.indexOf(type) > -1
			? `${match.url}/${routeName}`
			: `${match.url}/${type}/${routeName}`
		: `${match.url}`;

	return (
		<CollectionItemContainer>
			<BackgroundImage to={routingProducts} className="image" imageUrl={imageUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>&#x20B9;{price}</PriceContainer>
			</CollectionFooterContainer>
			{routeName ? "" : <AddButton onClick={() => addItem(item)}>ADD TO CART</AddButton>}
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
