import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

//Check for routeName.
// If yes, check for type. If no then match.url.
//If yes for type then add type to route. If no, then match.url/routeName
// routeName ? (type ? `${match.url}/${type}/${routeName}` : `${match.url}/${routeName}`) : `${match.url}`


const CollectionItem = ({ item, addItem, match, history }) => {
	const { name, price, imageUrl, routeName, type } = item;
	
	const routingProducts = routeName
		? match.url.indexOf(type) > -1
			? `${match.url}/${routeName}`
			: `${match.url}/${type}/${routeName}`
		: `${match.url}`;

	return (
		<div className="collection-item">
			<Link
				to={routingProducts}
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">&#x20B9;{price}</span>
			</div>
			{routeName ? (
				""
			) : (
				<CustomButton inverted onClick={() => addItem(item)}>
					ADD TO CART
				</CustomButton>
			)}
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
