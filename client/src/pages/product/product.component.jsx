import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
// import ProductInformation  from '../../components/product-information/product-information.component';

import { selectProducts } from "../../redux/shop/shop.selectors";

import {
	ProductPageContainer,
	ProductTitle,
	ProductItemsContainer,
} from "./product.styles";

const ProductPage = ({ items }) => {
	const { name, products } = items;
	return (
		<ProductPageContainer>
			<ProductTitle>{name}</ProductTitle>
			{/* {Object.entries(description).map(([key, val]) => 
				<ProductInformation h2 = {h2} p = {val.p} li = {val.li} />
			)} */}
			{/* <ProductInformation description={description} /> */}
			<ProductItemsContainer>
				{Object.entries(products).map(([key, val]) => (
					<CollectionItem key={val.id} item={val} />
				))}
			</ProductItemsContainer>
		</ProductPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	items: selectProducts(
		ownProps.match.params.collectionId,
		ownProps.match.params.productId
	)(state),
});

export default connect(mapStateToProps)(ProductPage);