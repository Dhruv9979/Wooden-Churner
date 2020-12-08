import React from 'react';
import { connect } from 'react-redux';

import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions';

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer,
} from './checkout-item.styles';

export const CheckoutItem = ({
    cartItem,
    clearItem,
    addItem,
    removeItem,
    hideButton,
}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                {!hideButton && (
                    <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                )}
                {!hideButton ? <span>{quantity}</span> : <span>{`Quantity: ${quantity}`}</span>}
                {!hideButton && (
                    <div onClick={() => addItem(cartItem)}>&#10095;</div>
                )}
            </QuantityContainer>
            <TextContainer>&#x20B9;{price}</TextContainer>
            {!hideButton && (
                <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                    &#10005;
                </RemoveButtonContainer>
            )}
        </CheckoutItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItem(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
