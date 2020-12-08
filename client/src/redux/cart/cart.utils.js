export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const placeSameOrder = (cartItems, cartItemsToAdd) => {
    cartItemsToAdd.forEach((addingItem) => {
        const existingCartItem = cartItems.find(
            (cartItem) => cartItem.id === addingItem.id
        );
        if (existingCartItem) {
            cartItems = cartItems.map((cartItem) =>
                cartItem.id === addingItem.id
                    ? {
                          ...cartItem,
                          quantity: cartItem.quantity + addingItem.quantity,
                      }
                    : cartItem
            );
        } else {
            cartItems = [
                ...cartItems,
                { ...addingItem, quantity: addingItem.quantity },
            ];
        }
    });

    return cartItems;
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return clearItemFromCart(cartItems, cartItemToRemove);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
