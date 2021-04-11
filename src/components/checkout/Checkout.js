import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './../../reducer/StateProvider.js';
import CheckoutOrderSummary from './checkoutOrderSummary/CheckoutOrderSummary.js';
import SubTotal from './../../components/subtotal/SubTotal.js';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./../../reducer/reducer.js";
import Swal from 'sweetalert2';

import './Checkout.css';
import { FormLabel } from '@material-ui/core';

const Checkout = () => {
      const [{ cart }, dispatch] = useStateValue();
      const [address, setAddress] = useState({firstName: '', 
                                              lastName: '', 
                                              addressLine1: '', 
                                              addressLine2: '', 
                                              city: '', 
                                              state: '',
                                              postalCode: '', 
                                              phone: '',
                                              country : 'United States'
                                             });
      const [addressComplete, setAddressComplete] = useState(false)
      // const [country, setCountry] = useState('')

      const handleAddressComplete = () => {
            let valid = true;
            for(let key in address) {
                  if(key === 'firstName' || key === 'lastName'){ 
                        if (address[key].length < 3 && typeof(address[key] !== String)) {
                              valid = false
                              alert("Enter name in correct format") 
                        }      
                  }
                  
                  if(key === 'postalCode' || key === 'phone'){ 
                        if (key === 'phone' && address[key].length < 10) {
                              Swal.fire("Enter correct phone number") 
                              valid = false
                        }     
                  }

            }
            setTimeout(function() {
                  if (valid) {
                        return Swal.fire("Address complete", "Proceed to checkout").then(() => {
                              dispatch({
                                    type: "ADD_SHIPPING_ADDRESS",
                                    item: {
                                          address:address
                                    }
                              }); 
                              if(getCartTotal(cart) > 0) {                             
                                    setAddressComplete(true)
                              } else {
                                    Swal.fire("Oops...", "Cart total is ZERO")   
                              }
                        })
                  }
            }, 1000);        
      }      

      return (
            <div className = "checkout_main">
                <h1 style = {{color:'rgb(2, 109, 109)', fontSize:'40px', margin:'0 auto'}}>Checkout</h1> 
                <div style = {{display:'flex', margin:'0 auto'}}>
                      <div style = {{display: 'flex',
                                     flexDirection: 'column',
                                     minWidth: '55%'
                                    }}
                      >
                              <div className = "user_details">
                                    <p>1. customer </p>
                              </div>
                              <div className="user_details">
                                    <p style= {{marginBottom:'8px'}}>2. shipping </p>
                                   
                                    <div className="container_checkout">
                                          {/* <form> */}
                                          <div className = "label_input_column">
                                                <label>country</label>
                                                <CountryDropdown 
                                                      value={address.country} disabled
                                                />
                                          </div>
                                          <div className = 'label_input_row'>
                                                <div className = "label_input_column">
                                                      <label>first name</label>
                                                      <input type="text" 
                                                             value={address.firstName}
                                                             onChange= {e => setAddress({...address, firstName: e.target.value})}
                                                      />
                                                </div>
                                                <p style= {{width:'20px'}}></p>
                                                <div className = "label_input_column">
                                                      <label>last name</label>
                                                      <input type="text" 
                                                            value={address.lastName}
                                                            onChange= {e => setAddress({...address, lastName: e.target.value})}
                                                      />
                                                </div>
                                          </div>
                                          <div className = "label_input_column">
                                                <label>address line 1</label>
                                                <input type="text" 
                                                      value={address.addressLine1}
                                                      onChange= {e => setAddress({...address, addressLine1: e.target.value})}
                                                />                                          
                                          </div>
                                          <div className = "label_input_column">
                                                <label>address line 2</label>
                                                <input type="text" 
                                                      value={address.addressLine2}
                                                      onChange= {e => setAddress({...address, addressLine2: e.target.value})}
                                                />                                           
                                          </div>
                                          <div className = 'label_input_row'>
                                                <div className = "label_input_column">
                                                      <label>city</label>
                                                      <input type="text" 
                                                            value={address.city}
                                                            onChange= {e => setAddress({...address, city: e.target.value})}
                                                      />                                                 
                                                </div>
                                                <p style= {{width:'20px'}}></p>     
                                                <div className = "label_input_column">
                                                      <label>state</label>
                                                      <RegionDropdown
                                                            country={address.country}
                                                            value={address.state}
                                                            onChange= {e => setAddress({...address, state: e})}
                                                      />
                                                      {/* <input type="text" 
                                                            value={address.state}
                                                            onChange= {e => setAddress({...address, state: e.target.value})}
                                                      />                                                 */}
                                                </div>
                                          </div>                         
                                          <div className = 'label_input_row'>
                                                <div className = "label_input_column">
                                                      <label>postal code</label>
                                                      <input type="text" 
                                                            value={address.postalCode}
                                                            onChange= {e => setAddress({...address, postalCode: e.target.value})}
                                                      />                                                 
                                                </div>      
                                                <p style= {{width:'20px'}}></p>                          
                                                <div className = "label_input_column">
                                                      <label>phone number</label>
                                                      <input type="text" 
                                                            value={address.phone}
                                                            onChange= {e => setAddress({...address, phone: e.target.value})}
                                                      />                                                 
                                                </div>
                                          </div>
                                          
                                          <input type="radio"  name="shippingAddress" value="shippingAddress" checked disabled/>
                                          <label className= "input_radio_checkout">my billing is same as shipping address</label><br/>

                                          <p style = {{margin:'10px 0px', fontSize:'18px'}}>shipping method</p>

                                          <input type="radio"  name="shippingMethod" value="free" checked disabled />
                                          <label className= "input_radio_checkout">free</label><br/>
                                          
                                          <input type="radio"  name="shippingMethod" value="express" disabled/>
                                          <label className= "input_radio_checkout">expedia</label><br/>
                                          
                                          <br/>
                                          <button onClick={handleAddressComplete}>
                                                Address complete
                                          </button>
                                    </div>
                              </div>                           
                              <div className = "user_details">
                                    <p>3. Billing </p>
                              </div>
                              <div className= "user_details">
                                    <p>4. payment </p>
                              </div>
                      </div>

                      {/* Second div for cart summary */}
                      <div className = "checkout_order_summary">
                              <p className="order_summary_heading">
                                    order summary 
                                    <Link to = '/cart' 
                                          style = {{textDecoration:'none', color:' rgb(2, 109, 109)'}}>
                                          <span style= {{paddingLeft:'145px'}}>edit cart</span>
                                    </Link>
                              </p>
                              <div style = {{paddingTop:'40px'}}>
                                    {cart && cart.map((cartItem) => (
                                          <CheckoutOrderSummary cartItem = {cartItem}/>
                                    ))}
                              </div>

                              <div>
                                    {/* <SubTotal /> */}
                                    <div className="subtotal_main" style = {{paddingLeft:'0px'}}>
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
                                          
                                          <Link to = '/payment'>
                                                <button disabled={!(addressComplete)}>
                                                      Checkout
                                                </button>
                                          </Link>
                                    </div>
                              </div>
                      </div>
                </div> 
            </div>
      )
}

export default Checkout;
