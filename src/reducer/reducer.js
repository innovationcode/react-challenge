export const initialState = {
  cart: []
};
    
//reduce function to get basket total
export const getCartTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
    
export const reducer = (state, action) => {
  console.log("Action received : ", action);
    switch (action.type) {
        case "ADD_TO_CART":
            return {
              ...state,
              cart: [...state.cart, action.item]
            };
      
        case "REMOVE_FROM_CART":
            console.log("state.cart .. ", state.cart);
            // Logic for removing item from basket
            //clone the basket
            let newBasket = [...state.cart];
            console.log("newBasket.. ", newBasket);
            const index = state.cart.findIndex(
              (basketItem) => basketItem.id === action.id
            );
            console.log("INDEX.. ", newBasket);
      
            if (index >= 0) {
              //item exist in the basket, remove it
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
      
        default:
            return state;
    }
};
    