import React from 'react'

// import Subtotal from "./Subtotal.js";
// import ItemInCart from "./ItemInCart.js";
import { useStateValue } from './../../reducer/StateProvider.js';

import './Cart.css';
 
const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();

  console.log("CARTBASKET", cart);

  return (
      <div className="cart_main">
            <h1 style = {{color:'rgb(2, 109, 109)', fontSize:'40px', margin:'0 auto'}}>your cart</h1>
            <div>
                  {cart.length ? (
                  <div className="cart_item_list">
                        <div className="cart_item_list_top">
                              {cart.map((cartItem) => (
                                    // <ItemInCart product={cartItem} />
                                    <h4>cart-item</h4>
                              ))}
                        </div>

                        <div className="cart_item_list_bottom">
                              {/* <Subtotal /> */}
                        </div>
                  </div>
            ) : (
        
                  <div className="cart_item_list">
                        <h3>Your shopping cart is empty</h3>
                  </div>
            )}
            </div>
      </div>
  );
};

export default Cart;

