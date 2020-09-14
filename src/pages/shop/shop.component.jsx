import React from "react";
import { Route } from "react-router-dom";

import "./shop.styles.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';
import ProductPage from '../product/product.component';
import ProductInformation from "../../components/product-information/product-information.component";

const ShopPage = ({ match }) => (
	<div className="shop-page">
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionId/:productId`} component={ProductPage} />

		<Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default ShopPage;