import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 0,
      description:'A great shade of all colors colors that make you feel good',

    },

    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 0,
      description:'A great shade of black and white colors that make you feel good',
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 0,
      description:'A great shade of yellow and black colors that make you feel good',

    },

    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 0,
      description:'A great shade of blue colors and its combination that make you feel good',

    },
  ];
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const addItemToCartHandler = (item) => {
    let cartItems = [...items];
    let index = items.findIndex((item1) => item1.id === item.id);
    if (index === -1) {
      cartItems.push({...item, quantity: Number(quantity)+ 1});
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
    products: productsArr,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
