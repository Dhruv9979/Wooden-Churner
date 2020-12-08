import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { addOrdertoUser } from '../../firebase/firebase.utils';
import { checkoutSuccess } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, cartItems, user, checkoutSuccess }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HIpyoBKDd89KDux9kc0OHzgbMHLvpHeH1Za6vQGfIlf1lGTc08V0RKapTVAEUO3BYtoi0qdlob6hX5tlN97mRJW00gBwUNQa7';

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token,
            },
        })
            .then((response) => {
                const paymentId = response.data.success.id;
                addOrdertoUser(user, cartItems, price, paymentId);
                alert('Successful Payment');
                checkoutSuccess();
            })
            .catch((error) => {
                console.log('PaymentError: ', error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Wooden Churner"
            billingAddress
            shippingAddress
            description={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = (dispatch) => ({
    checkoutSuccess: () => dispatch(checkoutSuccess()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
