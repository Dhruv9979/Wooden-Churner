import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    selectCartItems,
    selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer,
} from './checkout.styles';

export const CheckoutPage = ({ cartItems, user, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <TotalContainer>TOTAL: &#x20B9;{total}</TotalContainer>
            <WarningContainer>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/24 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton
                price={total}
                cartItems={cartItems}
                user={user}
            />
        </CheckoutPageContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    user: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
