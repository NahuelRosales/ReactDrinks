import { useReducer, createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { actionTypes } from "../actions/cart.actions";
import { cartInitialState, cartReducer } from "../reducers/cart.reducer";
import getTotalPricesItems from "../utils/cartUtils";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const [orderTotal, setOrderTotal] = useState();
    useEffect(() => {
        let total = getTotalPricesItems(state.cartItems).reduce(
            (a, b) => a + b, 0
        );
        setOrderTotal(total);
    }, [state]);

    function addToCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink });
    }

    function removeOneFromCart(idDrink) {
        dispatch({
            type: actionTypes.REMOVE_ONE_FROM_CART,
            payload: { idDrink },
        });
    }

    function removeAllFromCart(idDrink) {
        dispatch({
            type: actionTypes.REMOVE_ALL_FROM_CART,
            payload: { idDrink },
        });
    }

    function clearCart() {
        dispatch({
            type: actionTypes.CLEAR_CART,
        });
    }

    function sendOrder() {
        alert(JSON.stringify(state));
    }

    const cartValues = {
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        cart: state,
        sendOrder,
        orderTotal,
    };

    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    );
};

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { CartProvider, CartContext };
