import React from "react";
import StripeCheckout from "react-stripe-checkout";
// import { ReactComponent as Logo } from "../../assets/logo.svg";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HIpyoBKDd89KDux9kc0OHzgbMHLvpHeH1Za6vQGfIlf1lGTc08V0RKapTVAEUO3BYtoi0qdlob6hX5tlN97mRJW00gBwUNQa7";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful");
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

export default StripeCheckoutButton;