import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const addItemToCartHandler = (item) => {
    let cartItems = [...items];
    let index = items.findIndex((item1) => item1.id === item.id);
    if (index === -1) {
      cartItems.push(item);
    } else {
      cartItems[index].quantity = Number(cartItems[index].quantity) + 1;
    }
    let newTotal = 0;
    cartItems.forEach(
      (item) =>
        (newTotal = Number(newTotal) + Number(item.quantity * item.price))
    );
    let newQuantity = 0; 
    cartItems.forEach((item)=> newQuantity = newQuantity + item.quantity);
    setItems(cartItems);
    setTotal(newTotal);
    setQuantity(newQuantity);
  };
  const reomveItemFromCartHandler = (id) => {
    let cartItems = [...items];
    let index = items.findIndex((item1) => item1.id === id);
    if (cartItems[index].id === id) {
      cartItems[index].quantity = Number(cartItems[index].quantity) - 1;
    }
    let newItems = cartItems.filter((item) => item.quantity !== 0);
    let newTotal = 0;
    newItems.forEach((item) => (newTotal = newTotal + item.price));
    let newQuantity = 0; 
    cartItems.forEach((item)=> newQuantity = newQuantity + item.quantity);
    setItems(newItems);
    setTotal(newTotal);
    setQuantity(newQuantity);
  };
  const cartContext = {
    items: items,
    totalAmount: total,
    quantity: quantity,
    addItem: addItemToCartHandler,
    removeItem: reomveItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
