import { actionTypes } from "../actions/cart.actions";

export const cartInitialState = {
    cartItems: [],
};
export function cartReducer(state, { payload = {}, type }) {
    const { idDrink } = payload;
    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink);
    switch (type) {
        case actionTypes.ADD_TO_CART:
            if (drinkInCart) {
                let cartItemUpdated = state.cartItems.map((item) => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    }
                    return item;
                });
                return { ...state, cartItems: cartItemUpdated };
            } else {
                payload.quantity = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload],
                };
            }

        case actionTypes.REMOVE_ONE_FROM_CART:
            if (drinkInCart.quantity > 1) {
                let cartItemUpdated = state.cartItems.map((item) => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity - 1,
                        };
                    }
                    return item;
                });
                return { ...state, cartItems: cartItemUpdated };
            } else {
                let cartItemUpdated = state.cartItems.filter(
                    (item) => item.idDrink !== idDrink
                );
                return { ...state, cartItems: cartItemUpdated };
            }
        case actionTypes.REMOVE_ALL_FROM_CART:
            if (drinkInCart) {
                let cartItemUpdated = state.cartItems.filter(
                    (item) => item.idDrink !== idDrink
                );
                return { ...state, cartItems: cartItemUpdated };
            }
            return state;
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
            };
    }
}