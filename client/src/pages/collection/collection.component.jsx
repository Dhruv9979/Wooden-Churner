import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
	OptionButton
} from "./collection.styles";

export const CollectionPage = ({ collection, history }) => {
	const { title, items } = collection;
	const displayCollectionItems = Object.entries(items).map(([key, val]) => (
		<CollectionItem key={val.id} item={val} />
	));
	return (
		<CollectionPageContainer>
		<OptionButton onClick={() => history.goBack()}>GO BACK</OptionButton>
			<CollectionTitle>{title}</CollectionTitle>
			<CollectionItemsContainer>
				{displayCollectionItems}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
