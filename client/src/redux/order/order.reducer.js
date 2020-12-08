import {} from './order.actions';

import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    user: '',
    orders: [],
};

const ordersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OrdersActionTypes.SET_ORDERS_FROM_FIREBASE:
            return {
                ...state,
                orders: action.payload,
            };
        default:
            return state;
    }
};