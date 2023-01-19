import React from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
        ]
    const addItemToCartHandler = () => {
        console.log('Inside add item');
    }
    const reomveItemFromCartHandler = () => {
        console.log('inside remove item');
    }
    const total = 0;
    const cartContext = {
        items: cartElements,
        totalAmount: total,
        addItem: addItemToCartHandler,
        removeItem: reomveItemFromCartHandler,
      };
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider; 