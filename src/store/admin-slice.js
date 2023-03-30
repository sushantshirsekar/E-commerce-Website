import { createSlice } from "@reduxjs/toolkit";

const admin = createSlice({
  name: "admin",
  initialState: {
    itemList: [],
    isAdmin: JSON.parse(localStorage.getItem("isAdmin")) ||  false, 
  },
  reducers: {
    addToList(state, action) {

      console.log(action.payload);
      let data = action.payload;
      console.log(data);
      let arr = []; 
      if(state.itemList){
        arr = [...state.itemList]
      }
      let existing;
      if (!state.itemList) {
      } else {
        existing = state.itemList.find((item) => item.id === data.id);
      }
      if (existing) {
        alert("Please change product ID, ID should be unique");
      } else {
        arr.push(data);  
        alert("Item added to the products successfully!");
      }
      state.itemList = arr;
    },
    replaceList(state, action) {
      state.itemList = action.payload;
    },
    deleteListItem(state, action) {
      state.itemList = state.itemList.filter(
        (item) => item.id !== action.payload
      );
    },
    adminLogin(state){
        state.isAdmin = true; 
    }, 
    adminLogout(state){
        state.isAdmin = false; 
    }
  },
});

export const adminActions = admin.actions;
export default admin.reducer;
