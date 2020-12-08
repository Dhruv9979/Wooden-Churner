import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import { CheckoutItem } from '../checkout-item/checkout-item.component';

import { buyAgain } from '../../redux/cart/cart.actions';

import { OrderContainer, DateContainer, AddButton } from './order.styles';

const Order = ({ order, buyAgain }) => {
    const items = order.data.cartItems;
    return (
        <OrderContainer>
            <div>
                <h2>Your Order</h2>
                <DateContainer>
                    {moment
                        .unix(order.data.createdAt)
                        .format('Do MMMM, YY, h:mma')}
                </DateContainer>
            </div>
            {order.data.cartItems?.map((item) => (
                <CheckoutItem key={item.id} cartItem={item} hideButton />
            ))}
            <AddButton onClick={() => buyAgain(items)}>BUY AGAIN</AddButton>
        </OrderContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    buyAgain: (items) => dispatch(buyAgain(items)),
});

export default withRouter(connect(null, mapDispatchToProps)(Order));
