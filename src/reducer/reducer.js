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
          if(index2 >= 0 && state.cart[index2].color === action.item.color && state.cart[index2].size === action.item.size) { 
              state.cart[index2].quantity += action.item.quantity;
              return state 
          } else { 
            return {
              ...state,
              cart: [...state.cart, action.item]
            };
          }
      
        case "REMOVE_FROM_CART":
            let newBasket = [...state.cart];
            const index = state.cart.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
              console.warn(
                `Can't remove product{id: ${action.id}} as it is not in the basket`
              );
            }
            return {
              ...state,
              cart: newBasket
            };
      
        case "UPDATE_CART_QUANTITY":
            const updateQuantityId = action.item.product_id; 
            console.log("updateQuantityId  .. ",updateQuantityId)

            const index1 = (state.cart).findIndex((cartItem) => cartItem.product_id === updateQuantityId);  
            console.log("Action quantity  .. ",action.item.quantity)
            console.log("index  .. ",index1)

            // alert(index1)

            state.cart[index1].quantity = action.item.quantity
            
            console.log("Updated.. ", state.cart)

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
    