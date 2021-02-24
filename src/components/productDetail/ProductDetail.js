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
                        <div className = "productdetail_image"style = {{  border: '1px solid yellow'}}>
                              <img src = {productLocal.image} alt = "product_image"/>
                        </div>

                        <div className = "productdetail_text" style = {{  border: '1px solid green'}}>
                              <div className = "productdetail_title_price">
                                    <p style = {{width: '250px'}}>{productLocal.title}</p>
                                    <p>${productLocal.price}</p>
                              </div>
                              <div className = "productdetail_size_color">
                                    <p>size <span style = {{color:'rgb(2, 109, 109)'}}>: size chart</span></p>
                                    <p>color : required</p>
                              </div>
                              <div className = "productdetail_quantity">
                                    <span>quantity: &nbsp; <button>-</button>&nbsp; &nbsp;1&nbsp; &nbsp;<button>+</button></span>                                    
                              </div>
                              <button className = "add_to_cart">add to cart</button>
                        </div>
                  </div>
            </div>
      )
}

export default ProductDetail;
