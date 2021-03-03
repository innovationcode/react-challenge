export const initialState = {
  cart: []
};
    
export const getItemTotal = (product) => (product.price * product.quantity);


//reduce function to get basket total
export const getCartTotal = (basket) =>
  basket?.reduce((amount, item) => (item.price * item.quantity) + amount, 0);
  
  
export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
          const updateQuantityId_0 = action.item.product_id; 
          const index2 = (state.cart).findIndex((cartItem) => cartItem.product_id === updateQuantityId_0);  
          if(index2 >= 0 && 
             state.cart[index2].product_id === action.item.product_id && 
             state.cart[index2].color === action.item.color && 
             state.cart[index2].size === action.item.size
            ) { 
                state.cart[index2].quantity += 1;
                return state 
            } else { 
              return {
                ...state,
                cart: [...state.cart, action.item]
              };
            }
      
        case "REMOVE_FROM_CART":
            let newCart = [...state.cart];
            newCart.splice(action.item, 1);

            return {
              ...state,
              cart: newCart
            };
                  
       case "UPDATE_CART_QUANTITY":
            console.log("UPDATE_QUANTITY... ", action.item)
            state.cart[action.item].quantity += 1
            // const updateQuantityId = action.item 
            // console.log("updateQuantityId  .. ",updateQuantityId)

            // const index1 = (state.cart).findIndex((cartItem) => cartItem.product_id === updateQuantityId);  
            // console.log("Action quantity  .. ",action.item.quantity)
            // console.log("index  .. ",index1)

            // // alert(index1)

            // state.cart[index1].quantity = action.item.quantity
            
            // console.log("Updated.. ", state.cart)

            return {
              ...state,
              cart: state.cart
            };
        case "EMPTY_CART":
            return {
              ...state,
              cart: []
            };

        default:
            return state;
    }
};
    