import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import ProductPage from "../product/product.component";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.action";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const ProductPageWithSpinner = WithSpinner(ProductPage);
class ShopPage extends React.Component {
	state = {
		isLoading: true,
	};
	unSubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection("collections");

		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ isLoading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { isLoading } = this.state;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
				<Route
					exact
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId/:productId`}
					render={(props) => <ProductPageWithSpinner isLoading={isLoading} {...props} />}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
