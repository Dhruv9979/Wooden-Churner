import OrdersActionTypes from './order.types';

export const setOrdersFromFirebase = (orders) => ({
    type: OrdersActionTypes.SET_ORDERS_FROM_FIREBASE,
    payload: orders
});