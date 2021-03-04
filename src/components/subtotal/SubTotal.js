import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../../reducer/StateProvider.js";
import { getCartTotal, getICartQuantity } from "./../../reducer/reducer.js";
import { useHistory } from 'react-router-dom';

import './SubTotal.css'

const Subtotal = () => {
  const history = useHistory();    
  const [{ cart }, dispatch] = useStateValue();

  return (
      <div className="subtotal_main">
            <CurrencyFormat
                  renderText={(value) => (
                        <>
                        <p>
                              Subtotal ({getICartQuantity(cart)} items)  <span>{value}</span>
                        </p>
                        <p>Shipping
                              <span style= {{paddingLeft:'170px'}}>enter zipcode</span>
                        </p>
                        <p>Coupon Code 
                              <span>coupon code</span></p>
                        <p>Total  
                              <span style= {{paddingLeft:'230px'}}><strong>{value}</strong></span>
                        </p>
                        </>
                  )}
            
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
            />

            <button onClick = {e => history.push('/checkout')}>
                  Checkout
            </button>
    </div>
  );
};

export default Subtotal;
