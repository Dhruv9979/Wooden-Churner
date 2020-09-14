import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";
import ProductInformation  from '../../components/product-information/product-information.component';

import { selectProduct } from "../../redux/collection/collection.selectors";

import './product.styles.scss'

const ProductPage = ({items}) => {
	const { name, products } = items;
    return (
		<div className="product-page">
			<h2 className="title">{name}</h2>
			<ProductInformation />
			<div className="products">
				{products.map((product) => (
					<CollectionItem key={product.id} item={product} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	items: selectProduct(ownProps.match.params.productId)(state),
});

export default connect(mapStateToProps)(ProductPage);