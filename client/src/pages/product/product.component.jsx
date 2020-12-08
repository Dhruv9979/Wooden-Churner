import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
// import ProductInformation  from '../../components/product-information/product-information.component';

import { selectProducts } from "../../redux/shop/shop.selectors";

import {
	ProductPageContainer,
	ProductTitle,
	ProductItemsContainer,
	OptionButton
} from "./product.styles";

export const ProductPage = ({ items, history }) => {
	console.log(history);

	const { name, products } = items;
	return (
		<ProductPageContainer>
			<OptionButton onClick={() => history.goBack()}>GO BACK</OptionButton>
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