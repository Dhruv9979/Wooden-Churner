import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer,
} from './cart-dropdown.styles';

export const CartDropdown = ({ cartItems, history, dispatch }) => {
    const dropDownRef = useRef(null);

    useEffect(() => {
        dropDownRef.current.focus();
    }, []);

    return (
        <CartDropdownContainer
            ref={dropDownRef}
            tabIndex="0"
            onBlur={() => {
                dispatch(toggleCartHidden());
            }}
        >
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer>
                        Your cart is empty
                    </EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <CartDropdownButton
                onMouseDown={(e) => {
                    // prevent default triggering blur
                    e.preventDefault();
                }}
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
