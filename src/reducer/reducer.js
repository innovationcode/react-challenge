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
            return {
              ...state,
              cart: [...state.cart, action.item]
            };
      
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
            console.log(state.cart)

        default:
            return state;
    }
};
    