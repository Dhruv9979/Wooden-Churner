import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
// import ProductInformation  from '../../components/product-information/product-information.component';

import { selectProduct } from "../../redux/collection/collection.selectors";

import {
	ProductPageContainer,
	ProductTitle,
	ProductItemsContainer,
} from "./product.styles";

const ProductPage = ({items}) => {
	const { name, products } = items;
    return (
		<ProductPageContainer>
			<ProductTitle>{name}</ProductTitle>
			{/* {Object.entries(description).map(([key, val]) => 
				<ProductInformation h2 = {h2} p = {val.p} li = {val.li} />
			)} */}
			{/* <ProductInformation description={description} /> */}
			<ProductItemsContainer>
				{products.map((product) => (
					<CollectionItem key={product.id} item={product} />
				))}
			</ProductItemsContainer>
		</ProductPageContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	items: selectProduct(ownProps.match.params.productId)(state),
});

export default connect(mapStateToProps)(ProductPage);