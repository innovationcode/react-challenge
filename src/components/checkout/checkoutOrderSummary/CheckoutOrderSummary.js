import React from 'react';
import { Link } from 'react-router-dom';

import './CheckoutOrderSummary.css';

const CheckoutOrderSummary = ({ cartItem }) => {
      return (
            <div className="checkout_order_summary_main">
                  <div className="checkout_order_summary_image">
                        <img src = {cartItem.image} alt = "product_image" style = {{width: '90px', height: '100px', marginRight:'14px'}}/>
                  </div>
                
                  <div className = "checkout_order_summary_text">
                        <p>{cartItem.title}</p>
                        <p>size &nbsp;: &nbsp;{cartItem.size}</p>
                        <p>color&nbsp;: &nbsp;{cartItem.color}</p>
                        <Link to= {`/product_detail/${cartItem.product_id}`}  className = "no-decoration">
                        <p style = {{color:'rgb(2, 109, 109)', cursor:'pointer'}}>
                              Change
                        </p>
                  </Link>
                  </div>
                  <div className= "checkout_order_summary_price">
                        <p> ${cartItem.price}</p>
                  </div>
            </div>
      )
}

export default CheckoutOrderSummary;
