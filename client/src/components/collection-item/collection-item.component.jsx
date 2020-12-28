import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { addItem } from '../../redux/cart/cart.actions';

import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer,
    TextContainer,
    TestOpacity,
} from './collection-item.styles';

export const CollectionItem = ({ currentUser, item, addItem, match }) => {
    const { name, price, imageUrl, routeName, type, stock } = item;
    const outOfStock = 'Out Of Stock';
    const routingProducts = routeName
        ? match.url.indexOf(type) > -1
            ? `${match.url}/${routeName}`
            : `${match.url}/${type}/${routeName}`
        : `${match.url}`;
    var rupees = '\u20B9';

    const product = (
        <CollectionItemContainer>
            {stock === outOfStock ? (
                <BackgroundImage
                    to={routingProducts}
                    className="image"
                    imageUrl={imageUrl}
                >
                    <TestOpacity></TestOpacity>
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
                {typeof price === 'number' && (
                    <PriceContainer>
                        {rupees} {price}
                    </PriceContainer>
                )}
            </CollectionFooterContainer>
            {routeName ? (
                ''
            ) : stock === outOfStock ? (
                ''
            ) : (
                <AddButton
                    onClick={() =>
                        currentUser
                            ? addItem(item)
                            : alert('Please sign in to add items to cart.')
                    }
                >
                    ADD TO CART
                </AddButton>
            )}
        </CollectionItemContainer>
    );

    return product;
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CollectionItem)
);
