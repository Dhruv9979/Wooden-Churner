import {} from './cart.actions';

import {
    addItemToCart,
    clearItemFromCart,
    removeItemFromCart,
    placeSameOrder,
} from './cart.utils';

import CartActionTypes from './cart.types';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        case CartActionTypes.CLEAR_ITEM:
            return {
                ...state,
                cartItems: clearItemFromCart(state.cartItems, action.payload),
            };
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
        case CartActionTypes.SET_CART_FROM_FIREBASE:
            return {
                ...state,
                cartItems: action.payload,
            };
        case CartActionTypes.BUY_AGAIN:
            return {
                ...state,
                cartItems: placeSameOrder(state.cartItems, action.payload),
            };
        default:
            return state;
    }
};

export default cartReducer;
