import React, { useState, useEffect } from "react";
import { useStateValue } from './../../reducer/StateProvider.js';
import { Link } from 'react-router-dom';
import { getItemTotal, getCartTotal } from './../../reducer/reducer.js';

import "./ItemInCart.css";

const ItemInCart = ({ product, cartItemIndex }) => {
      console.log("cartItemIndex  ============>    ", cartItemIndex)
      const [quantity, setQuantity] = useState( product.quantity )
      const [{ cart }, dispatch] = useStateValue();

      useEffect(() => {
            dispatch({
                  type: "UPDATE_CART_QUANTITY",
                  item: {
                        product_id: product.product_id,
                        title: product.title,
                        price: product.price,
                        image: product.image,
                        quantity: quantity,
                        size : product.size,
                        color: product.color,
                  },
                  
            })
      }, [quantity]);

      const quantityDown = () => {
            if(quantity > 1) {
                  setQuantity(quantity - 1) 
            }else {
                  alert('Minimum quantity 1')
            }  
      }
  
      const removeFromCart = () => {
            dispatch({
                  type: "REMOVE_FROM_CART",
                  id: product.id
            });
      };
      
      
      return (
      <div className="item_in_cart_main">
            <div className="item-in-cart-first">
                <div >
                  <img src = {product.image} alt = "product_image" style = {{width: '110px', height: '120px', marginRight:'14px'}}/>
                </div>
                <div className = "item-in-cart-first-text">
                  <p>{product.title}</p>
                  <p>size &nbsp;: &nbsp;{product.size}</p>
                  <p>color&nbsp;: &nbsp;{product.color}</p>
                  <Link to= {`/product_detail/${product.product_id}`}  className = "no-decoration">
                        <p style = {{color:'rgb(2, 109, 109)', cursor:'pointer'}}>
                              Change
                        </p>
                  </Link>
                </div>
            </div>

            <div className = "quantity_main_div">
                  <p className = "price">${product.price}</p>
                  <p className = "quantity_span">
                        <button onClick = {quantityDown}
                                className = "quantity_button"
                        > - 
                        </button> 
                            <span style = {{padding: '0px 8px'}}>{quantity}</span>
                        <button onClick = {()=> setQuantity(quantity+1)}
                                className = "quantity_button"
                        > + 
                        </button>
                  </p>
                        <p className= "getitemtotal">${getItemTotal(product)}</p>
                  <button className = "delete" onClick = {removeFromCart}>x</button>
            </div>
      </div>
  );
};

export default ItemInCart;
