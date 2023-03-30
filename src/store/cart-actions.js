import { cartActions } from "./cart-slice";



export const fetchCartData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        let mail = localStorage.getItem("email"); 
        const res = await fetch(
          `https://e-commerce-db-34178-default-rtdb.firebaseio.com/cartData${mail}.json`
        )
        if (!res.ok) {
          throw new Error("Fetching Failed!");
        }else{
          console.log("success");
        }
  
        const data = await res.json();
        return data;
      };
      try {
        const cartData = await fetchData();
        console.log(cartData);
        dispatch(cartActions.replaceCart(
          cartData.cartItems || [],
        ));
      } catch {
        
      }
    };
  };

export const updateCartData = (cartData) => {
  
  return async ()=>{
    const updateData = async() => {
      const mail = localStorage.getItem("email"); 
      const res = await fetch(`https://e-commerce-db-34178-default-rtdb.firebaseio.com/cartData${mail}.json`, {
        method:"PUT", 
        body: JSON.stringify({cartItems: cartData})
      })

      if(!res.ok){
        throw new Error("Updating cart data failed"); 
      }
    }
    try{
      updateData(); 
    }
    catch{

    }
  }
}
  