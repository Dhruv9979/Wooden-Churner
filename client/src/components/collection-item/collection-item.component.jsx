import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer,
    TextContainer,
} from './collection-item.styles';

export const CollectionItem = ({ item, addItem, match, history }) => {
	const { name, price, imageUrl, routeName, type, stock } = item;
	const outOfStock = "Out Of Stock";
    const routingProducts = routeName
        ? match.url.indexOf(type) > -1
            ? `${match.url}/${routeName}`
            : `${match.url}/${type}/${routeName}`
        : `${match.url}`;

    const product = (
        <CollectionItemContainer>
            {stock === outOfStock ? (
                <BackgroundImage
                    to={routingProducts}
                    className="image"
					imageUrl={imageUrl}
					style={{ opacity: "0.3" }}
                >
                    <TextContainer>{stock}</TextContainer>
                </BackgroundImage>
            ) : (
                <BackgroundImage
                    to={routingProducts}
                    className="image"
                    imageUrl={imageUrl}
                />
            )}
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>&#x20B9;{price}</PriceContainer>
            </CollectionFooterContainer>
            {(routeName, stock === outOfStock) ? (
                ''
            ) : (
                <AddButton onClick={() => addItem(item)}>ADD TO CART</AddButton>
            )}
        </CollectionItemContainer>
    );

    return product;
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CollectionItem));
