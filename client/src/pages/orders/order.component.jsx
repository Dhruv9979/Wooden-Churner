import React, { useState, useEffect } from 'react';
import Order from '../../components/order/order.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { firestore } from '../../firebase/firebase.utils';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { MyOrderContainer, TitleContainer } from './order.styles'

const OrderPage = ({ user }) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            
            firestore
                .collection('users')
                .doc(user?.id)
                .collection('orders')
                .orderBy('createdAt', 'desc')
                .onSnapshot((snapshot) => {
                    setOrders(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            data: doc.data()
                        }))
                    );
                });
        } else setOrders([]);
    }, [user]);

    return (
        <MyOrderContainer>
            <TitleContainer>My Orders</TitleContainer>
            <div className="orders-order">
                {orders?.map(order => (
                    <Order key={order.id} order={order} />
                ))}
            </div>
        </MyOrderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
});

export default connect(mapStateToProps)(OrderPage);
