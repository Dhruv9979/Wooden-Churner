import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../modal/modal.component';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { addOrdertoUser } from '../../firebase/firebase.utils';
import { checkoutSuccess } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ price, cartItems, user, checkoutSuccess }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HIpyoBKDd89KDux9kc0OHzgbMHLvpHeH1Za6vQGfIlf1lGTc08V0RKapTVAEUO3BYtoi0qdlob6hX5tlN97mRJW00gBwUNQa7';

    const [successfulPaymentModalState, setSuccessfulPaymentModalState] = useState(false);

    const toggleSuccessfulPaymentModalState = () => {
        setSuccessfulPaymentModalState(!successfulPaymentModalState);
    };

    const [paymentIssueModalState, setPaymentIssueModalState] = useState(false);

    const togglePaymentIssueModalState = () => {
        setPaymentIssueModalState(!paymentIssueModalState);
    };

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
                toggleSuccessfulPaymentModalState();
                checkoutSuccess();
            })
            .catch((error) => {
                console.log('PaymentError: ', error);
                togglePaymentIssueModalState();
            });
    };

    return (
        <>
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
            <Modal
                modalState={successfulPaymentModalState}
                toggleModalState={toggleSuccessfulPaymentModalState}
                form={false}
                header="Successful Payment!!!"
                text="Your order in on the way. Happy Cooking!!!"
                buttonText="OK"
            />
            <Modal
                modalState={paymentIssueModalState}
                toggleModalState={togglePaymentIssueModalState}
                form={false}
                header="Payment Issue"
                text="There was an issue with your payment! Please make sure you use the provided credit card."
                buttonText="OK"
            />
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    checkoutSuccess: () => dispatch(checkoutSuccess()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
