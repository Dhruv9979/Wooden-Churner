import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => {
	const displayCollectionItem = collections.map(({ id, ...otherCollectionProps }) => (
		<CollectionPreview key={id} {...otherCollectionProps} />
	));
	return <div className="collections-overview">{displayCollectionItem}</div>;
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
