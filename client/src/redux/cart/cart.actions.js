import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item,
});

export const removeItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item,
});

export const clearItem = (item) => ({
    type: CartActionTypes.CLEAR_ITEM,
    payload: item,
});

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART,
});

export const updateCartInFirebase = () => ({
    type: CartActionTypes.UPDATE_CART_IN_FIREBASE,
});

export const setCartFromFirebase = (cartItems) => ({
    type: CartActionTypes.SET_CART_FROM_FIREBASE,
    payload: cartItems,
});

export const checkoutSuccess = () => ({
    type: CartActionTypes.CHECKOUT_SUCCESS,
});

export const buyAgain = (items) => ({
    type: CartActionTypes.BUY_AGAIN,
    payload: items,
});
