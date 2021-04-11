import React, {useState, useEffect} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from './../../../reducer/reducer.js';
import { useStateValue } from "./../../../reducer/StateProvider.js";
import { useHistory } from 'react-router-dom';
import axios from './../../../axios.js';
import { db } from './../../../firebase.js';
import Loader from './../../../assets/loader.gif';

import './Payment.css'

function Payment() {
      const [{ cart, shippingAddress }, dispatch] = useStateValue();

      const history = useHistory();    

      const stripe = useStripe();
      const elements = useElements();
      const [error, setError] = useState(null);
      const [disabled, setDisabled] = useState(true); 
      const [succeeded, setSucceeded] = useState(false);
      const [processing, setProcessing] = useState('');
      const [clientSecret, setClientSecret] = useState('')

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
            const payload = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                        card: elements.getElement(CardElement)
                  }
            }).then(({ paymentIntent }) => {
                  db.collection('orders')
                    .doc(paymentIntent.id)
                    .set({
                            cart: cart, 
                            amount: paymentIntent.amount, 
                            created: paymentIntent.created,
                            deliveryAdress: shippingAddress
                     })
                  
                  setSucceeded(true);
                  setError(null);
                  setProcessing(false);

                  dispatch({
                        type : 'EMPTY_CART'
                  })
                  history.replace(`/confirmation/${paymentIntent.id}`)
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
                                          border:'1px solid red',
                                          iconColor: '#c4f0ff',
                                          fontFamily: "Roboto !important",
                                          fontSize: '16px',
                                          color: '#424770',
                                          '::placeholder': {
                                                color: '#aab7c4',
                                          },
                                          fontSmoothing: 'antialiased',
                                          ":-webkit-autofill": {color: "#fce883"},
                                          ":-placeholder": {color: "#87bbfd"}
                                    },
                                    invalid: {
                                          border:'1px solid red',

                                          color: '#9e2146',
                                          iconColor:'#ffc7ee'
                                    },
                        
                              }}
                        />

                        <div className= "payment_priceContainer">
                              <CurrencyFormat
                                    renderText={(value) => (
                                          <>
                                          
                                          <p style= {{padding:'15px 0px'}}>Total Amount :
                                                <span style= {{paddingLeft:'20px'}}><strong>{value}</strong></span>
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
                              {processing && <div>
                                    <img src = {Loader} alt="loading" style= {{width:'100px'}} />
                              </div>}
                        </div>

                        {error && <div>{error}</div>}
                  </form> 
            </div>
      )
}

export default Payment;

