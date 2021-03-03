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
                  
        case "INCREASE_CART_QUANTITY":
            state.cart[action.item].quantity += 1
            return {
              ...state,
              cart: state.cart
            };
            
        case "DECREASE_CART_QUANTITY":
            state.cart[action.item].quantity -= 1
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
    