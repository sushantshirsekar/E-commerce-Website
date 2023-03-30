import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQuantity: 0,
    loggedIn: JSON.parse(localStorage.getItem("isLogin")) ||  false,
  },
  reducers: {
    addItem(state, action) {
      let data = action.payload;
      let existing = state.items.find((item) => item.id === data.id);
      if (!existing) {
        state.items.push(data);
      } else {
        existing.quantity++;
      }
      console.log(data);
      state.totalQuantity = state.totalQuantity + 1;
      state.totalAmount = state.totalAmount + Number(data.price); 
    },
    removeItem(state, action) {
      let data = action.payload;
      console.log(data);
      let existing = state.items.find((item) => item.id === data.id);
      console.log(existing.quantity);

      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== data.id);
      } else {
        existing.quantity--;
      }
      state.totalQuantity = state.totalQuantity - 1; 
      state.totalAmount = state.totalAmount - data.price; 
    },
    logout(state){
        state.loggedIn = false; 
    },
    login(state){
        state.loggedIn = true; 
    }, 
    replaceCart(state, action){
      console.log(action.payload);
        state.items = action.payload; 
        console.log(state.items);
      let data = action.payload; 
      let sum = 0; 
      let q = 0; 
      data.forEach(item => {
        sum = sum + (Number(item.price)*Number(item.quantity)); 
        q = Number(q) + item.quantity; 
        console.log(item.price);
        console.log(item.quantity);
      });
      state.totalAmount = sum;
      state.totalQuantity = q;
    }, 

  },
});

export const cartActions = cart.actions;

export default cart.reducer;
