import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './../../reducer/StateProvider.js';
import CheckoutOrderSummary from './checkoutOrderSummary/CheckoutOrderSummary.js';
import SubTotal from './../../components/subtotal/SubTotal.js';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "./../../reducer/reducer.js";

import './Checkout.css';

const Checkout = () => {
      const [{ cart }, dispatch] = useStateValue();
      // const [country, setCountry] = useState('')

      return (
            <div className = "checkout_main">
                <h1 style = {{color:'rgb(2, 109, 109)', fontSize:'40px', margin:'0 auto'}}>Checkout</h1> 
                <div style = {{display:'flex'}}>
                      {/* First div user info shipping card ... */}
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
                                    {/* <span className = "shipping">shipping address</span><br/>
                                    <label className = "shipping">country</label>
                                    <CountryDropdown />
                                    <div className = "shipping shipping_row_div">
                                          <label>first name</label>
                                          <input type ="text" />
                                          <label>last name</label>
                                          <input type ="text" />
                                    </div>
                                    <label className = "shipping">address line 1</label>
                                    <input type ="text" />
                                    <label className = "shipping">address line 2</label>
                                    <input type ="text" />
                                    <div className = "shipping shipping_row_div">
                                          <label>city</label>
                                          <input type ="text" />
                                          <label>state</label>
                                          <RegionDropdown />
                                    </div>
                                    <div className = "shipping shipping_row_div">
                                          <label>postal code</label>
                                          <input type ="text" />
                                          <label>phone number</label>
                                          <input type ="text" />
                                    </div>
                                    <input type="radio" className = "shipping"/>my billing address is same as the shipping address<br/>
                                    <span>shipping method</span>
                                    <input type="radio" className = "shipping"/>free<br/>
                                    <input type="radio" className = "shipping"/>expedite<br/>
                                    <button className = "submit">submit</button>
                              </div> */}

                              {/* ********************************************************* */}
                              {/* ************************************************************************************************************** */}
                                    <div class="container_checkout">
                                          <form>
                                          <div className = "label_input_column">
                                                <label for="lname">country</label>
                                                <CountryDropdown />
                                                {/* <input type="text" id="country" name="country"/> */}
                                          </div>
                                          <div className = 'label_input_row'>
                                                <div className = "label_input_column">
                                                      <label for="fname">first name</label>
                                                      <input type="text" id="fname" name="firstname"/>
                                                </div>
                                                <p style= {{width:'20px'}}></p>
                                                <div className = "label_input_column">
                                                      <label for="lname">last name</label>
                                                      <input type="text" id="lname" name="lastname"/>
                                                </div>
                                          </div>
                                          <div className = "label_input_column">
                                                <label for="lname">address line 1</label>
                                                <input type="text" id="address1" name="address1"/>
                                          </div>
                                          <div className = "label_input_column">
                                                <label for="lname">address line 2</label>
                                                <input type="text" id="address2" name="address2"/>
                                          </div>
                                          
                                          <div className = 'label_input_row'>
                                                <div className = "label_input_column">
                                                      <label for="fname">city</label>
                                                      <input type="text" id="city" name="city"/>
                                                </div>
                                                <p style= {{width:'20px'}}></p>     
                                                <div className = "label_input_column">
                                                      <label for="lname">state</label>
                                                      <input type="text" id="state" name="state"/>
                                                </div>
                                          </div>
                                          
                                          
                                          <div className = 'label_input_row'>
                                                <div className = "label_input_column">
                                                      <label for="fname">postal code</label>
                                                      <input type="text" id="postal" name="postal"/>
                                                </div>      
                                                <p style= {{width:'20px'}}></p>                          
                                                <div className = "label_input_column">
                                                      <label for="lname">phone number</label>
                                                      <input type="text" id="phone" name="phone"/>
                                                </div>
                                          </div>
                                          
                                          <input type="radio"  name="shippingAddress" value="shippingAddress"/>
                                          <label for="shippingAddress" className= "input_radio_checkout">my billing is same as shipping address</label><br/>

                                          <p style = {{margin:'10px 0px', fontSize:'18px'}}>shipping method</p>

                                          <input type="radio"  name="shippingMethod" value="free" />
                                          <label className= "input_radio_checkout">free</label><br/>
                                          
                                          <input type="radio"  name="shippingMethod" value="express" />
                                          <label className= "input_radio_checkout">expedia</label><br/>
                                          
                                          <br/><br/>
                                          <input type="submit" value="Submit"/>

                                          </form>
                                    </div>
                              </div>                           
                              
                              {/* ********************************************************* */}
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
                                          <span style= {{paddingLeft:'145px'}}>edit card</span>
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
                                          
                                          <Link to = '/payment'><button>
                                                Checkout
                                          </button></Link>
                                    </div>
                              </div>
                      </div>
                </div> 
            </div>
      )
}

export default Checkout;
