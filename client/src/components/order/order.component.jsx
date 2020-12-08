import React from 'react';
import { CheckoutItem } from '../checkout-item/checkout-item.component';
import moment from 'moment';

import {OrderContainer, DateContainer} from './order.styles';

const Order = ({ order }) => {
    return (
        <OrderContainer>
            <div>
                <h2>Your Order</h2>
                <DateContainer>{moment.unix(order.data.createdAt).format("Do MMMM, YY, h:mma")}</DateContainer>
            </div>
            {order.data.cartItems?.map((item) => (
				<CheckoutItem key={item.id} cartItem={ item } hideButton/>
			))}
        </OrderContainer>
    )
}

export default Order;
