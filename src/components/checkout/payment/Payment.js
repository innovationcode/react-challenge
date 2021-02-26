import React, {useState} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './../../../reducer/reducer.js'
import { useStateValue } from "./../../../reducer/StateProvider.js";

import './Payment.css'

function Payment() {
      const [{ cart }, dispatch] = useStateValue();

      const stripe = useStripe();
      const elements = useElements();
      const [error, setError] = useState(null);
      const [disabled, setDisabled] = useState(true);  

      const handleSubmitCard = (e) => {

      }

      const handleChange = (event) => {
            setDisabled(event.empty);
            setError(event.error? event.error.message : '')
      }

      return (
            <div className = "payment_main">
                  <h1 style = {{color:'rgb(2, 109, 109)', fontSize:'40px', margin:'0 auto', marginBottom:'100px'}}>Payment</h1> 
                
                  <form onSubmit = {handleSubmitCard}>
                        <CardElement onChange = {handleChange}/>

                        <div className= "payment_priceContainer">
                              <CurrencyFormat
                                    renderText={(value) => (
                                          <>
                                          <p>
                                                Subtotal ({cart.length} items)  <span>{value}</span>
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
                        </div>
                  </form> 
            </div>
      )
}

export default Payment;
