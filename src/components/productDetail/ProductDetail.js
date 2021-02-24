import React, { useState } from 'react'

import './ProductDetail.css'

import { products } from './../../Data/data.js'

const ProductDetail = (id) => {
      console.log("ID  : ", id)
      console.log("ID  : ", id.match.params.id)
      const pr = products[id.match.params.id-1];

      const [productLocal, setProductLocal] = useState(pr);

      console.log("Product Local in product detail  ",productLocal)

      return (
            <div className = "productdetail_main">
                  <h1 style = {{color:'rgb(2, 109, 109)', fontSize:'40px'}}>boys</h1>
                  <div className="productdetail_all_info">
                        <div className = "productdetail_image">
                              <img src = {productLocal.image} alt = "product_image"/>
                        </div>

                        <div className = "productdetail_text">
                              <div className = "productdetail_title_price">
                                    <p style = {{width: '250px'}}>{productLocal.title}</p>
                                    <p>${productLocal.price}</p>
                              </div>
                              <div className = "productdetail_size_color">
                                    <div className = "size-radio-buttons">
                                          <p style = {{paddingBottom:'10px'}}>size <span style = {{color:'rgb(2, 109, 109)'}}>: size chart</span></p>
                                          <input type="radio" name="size" value="0-12 months"/>0-12 months<br/>
                                          <input type="radio" name="size" value="12-24 months"/>12-24 months<br/>
                                          <input type="radio" name="size" value="2-5 years"/>2-5 years<br/>
                                          <input type="radio" name="size" value="6-12 years"/>6-12 years<br/>
                                    </div>
                                    <div className = "size-radio-buttons">
                                          <p style = {{paddingBottom:'10px'}}>color : required</p>
                                          <input type="radio" name="color" value="0-12 months"/>Teal<br/>
                                          <input type="radio" name="color" value="12-24 months"/>White<br/>
                                          <input type="radio" name="color" value="2-5 years"/>Green<br/>
                                          <input type="radio" name="color" value="6-12 years"/>Blue<br/>
                                    </div>
                              </div>
                              <div className = "productdetail_quantity">
                                    <span>quantity: &nbsp; <button>-</button>&nbsp; &nbsp;1&nbsp; &nbsp;<button>+</button></span>                                    
                              </div>
                              <button className = "add_to_cart">add to cart</button>
                        </div>
                  </div>

                  <div className = "productdetail_description">
                        <p style = {{marginBottom: '20px', fontSize:'17px'}}>Description</p>

                        <p>Your 1970s gym class is calling! Retro inspired velour short with our signature Avocado Print pairs with anything, really!</p>
                        <p>- Machine Wash Cold/Low Heat or Flat Dry</p>
                        <p>By Angel Dear</p>
                  </div>

                  <div className = "productdetail_related_products">
                        <p style = {{marginBottom: '20px', fontSize:'17px'}}>Related Products</p>
                  </div>
            </div>
      )
}

export default ProductDetail;
