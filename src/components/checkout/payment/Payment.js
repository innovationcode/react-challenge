import React, {useState, useEffect} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './../../../reducer/reducer.js'
import { useStateValue } from "./../../../reducer/StateProvider.js";
import { useHistory } from 'react-router-dom'
import axios from './../../../axios.js'

import './Payment.css'

function Payment() {
      const [{ cart }, dispatch] = useStateValue();

      const history = useHistory();    

      const stripe = useStripe();
      const elements = useElements();
      const [error, setError] = useState(null);
      const [disabled, setDisabled] = useState(true); 
      const [succeeded, setSucceeded] = useState(false);
      const [processing, setProcessing] = useState('');
      const [clientSecret, setClientSecret] = useState(true)

      useEffect(() => {
            const getClientSecret = async () => {
                  const response = await axios({
                        method: 'post',
                        url: `/payments/create?total=${getCartTotal(cart) * 100}`
                  });
                  setClientSecret(response.data.clientSecret)
            }
            getClientSecret();
      },[cart])

      const handleSubmitCard = async (event) => {
            event.preventDefault();
            setProcessing(true);
            clientSecret=clientSecret.toString();
            const payload = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                        card: elements.getElement(CardElement)
                  }
            }).then(({ paymentIntent }) => {
                  setSucceeded(true);
                  setError(null);
                  setProcessing(false);

                  history.replace('/')
            })
      }

      const handleChange = (event) => {
            setDisabled(event.empty);
            setError(event.error? event.error.message : '')
      }

      return (
            <div className = "payment_main">
                  <h1 style = {{color:'rgb(2, 109, 109)', fontSize:'40px', margin:'0 auto', marginBottom:'100px'}}>Payment</h1> 
                
                  <form onSubmit = {handleSubmitCard}>
                        <CardElement onChange = {handleChange} style={{
                              
                                    base: {
                                          fontSize: '16px',
                                          color: '#424770',
                                          '::placeholder': {
                                                color: '#aab7c4',
                                          },
                                    },
                                    invalid: {
                                          color: '#9e2146',
                                    },
                        
                              }}
                        />

                        <div className= "payment_priceContainer">
                              <CurrencyFormat
                                    renderText={(value) => (
                                          <>
                                          
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

                              <button disabled= {processing || disabled || succeeded}>
                                    <span>{processing? <p>Processing</p> : "Buy Now"}</span>

                              </button>
                        </div>

                        {error && <div>{error}</div>}
                  </form> 
            </div>
      )
}

export default Payment;
