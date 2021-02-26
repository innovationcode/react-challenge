import { ShoppingBasket } from "@material-ui/icons";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./../../reducer/StateProvider.js";
import { getCartTotal } from "./../../reducer/reducer.js";

import './SubTotal.css'

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
      <div className="subtotal_main">
            <CurrencyFormat
                  renderText={(value) => (
                        <>
                        <p>
                              Subtotal ({cart.length} items) : <span>{value}</span>
                        </p>
                        <p>Shipping 
                              <span>enter zipcode</span>
                        </p>
                        <p>Coupon Code 
                              <span>coupon code</span></p>
                        <p>Total  
                              <span><strong>{value}</strong></span>
                        </p>
                        </>
                  )}
            
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
            />

            <button>
                  Checkout
            </button>
    </div>
  );
};

export default Subtotal;
