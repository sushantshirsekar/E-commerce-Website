import React, { useState } from "react";
import CartContext from "./cart-context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartProvider = (props) => {
  const nav = useNavigate();
  
  const productsArr = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
      description:'A great shade of all colors colors that make you feel good',

    },

    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
      description:'A great shade of black and white colors that make you feel good',
    },

    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
      description:'A great shade of yellow and black colors that make you feel good',

    },

    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
      description:'A great shade of blue colors and its combination that make you feel good',

    },
  ];
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  let storageToken = localStorage.getItem('idToken')
  const [token, setToken] = useState(storageToken)
  const [emailId, setEmail] = useState(""); 
  const [postreq, setPost] = useState(false); 


  const addItemToCartHandler = (item) => {
    let cartItems = [...items];
    let index = items.findIndex((item1) => item1.id === item.id);
    if (index === -1) {
      cartItems.push({...item});
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
    let storageId = localStorage.getItem('crudId');
    axios.put(`https://crudcrud.com/api/8853aeb55e854386a6f47e79694a28b3/data${emailId}/${storageId}`,{
      cartItems:cartItems, 
    }).then((res)=>{
      console.log(res);
    })
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
    let storageId = localStorage.getItem('crudId');
    axios.put(`https://crudcrud.com/api/8853aeb55e854386a6f47e79694a28b3/data${emailId}/${storageId}`,{
      cartItems:newItems, 
    }).then((res)=> console.log(res));
    setItems(newItems);
    setTotal(newTotal);
    setQuantity(newQuantity);
  };





  const logInHandler = (token,email) => {
    setToken(token)
    localStorage.setItem('idToken', token);
    nav("/");
    let str = ""; 
    let emailMap = email.split(""); 
    emailMap.forEach((char)=> {
      if(char !== "." && char !== "@"){
        str = str + char; 
      }
    })
    setEmail(str); 
    axios.get(`https://crudcrud.com/api/8853aeb55e854386a6f47e79694a28b3/data${str}`)
    .then((res)=>{
      if(res.data.length){
        console.log(res.data);
        console.log('no need');
        let nq = 0; 
        let nt = 0; 
        res.data[0].cartItems.forEach((item)=>{
          nq = Number(nq) + Number(item.quantity); 
        })
        res.data[0].cartItems.forEach((item)=>{
          nt = Number(nt) + (Number(item.quantity)*Number(item.price)); 
        })
        setQuantity(nq);
        setItems(res.data[0].cartItems);
        setTotal(nt); 
        console.log(res.data[0]._id);
        localStorage.setItem('crudId',res.data[0]._id);
      }
      else {
        console.log('post needed'); 
        console.log(res.data);
        setPost(true);
      }
    })
    if(postreq === true){
      axios.post(`https://crudcrud.com/api/8853aeb55e854386a6f47e79694a28b3/data${str}`,{
        cartItems:[], 
      }).then((res)=>{
        console.log(res.data);
        console.log(res.data._id);
        localStorage.setItem('crudId',res.data._id)
      })
    }
  }



  const logOutHandler = () => {
    setToken(null)
    localStorage.removeItem('idToken');
    nav("/contact");
  }
  const userIsLoggedIn = !!token; 

  
  const cartContext = {
    items: items,
    totalAmount: total,
    quantity: quantity,
    addItem: addItemToCartHandler,
    removeItem: reomveItemFromCartHandler,
    products: productsArr,
    token: token,
    isLoggedIn: userIsLoggedIn, 
    login: logInHandler,
    logout: logOutHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
