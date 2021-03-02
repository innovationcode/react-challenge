import React from 'react';
import {Link} from 'react-router-dom';

import './ProductDisplay.css'

const ProductDisplay = ({ product }) => {

      // console.log("Product display product id ",product.product_id)

      return (
            <div className = "productdisplay_main">
                  <Link to= {`/product_detail/${product.product_id}`}  className = "no-decoration">
                        <div style = {{width: '100%'}}>
                              <img src = {product.image}/>
                        </div>

                        <div>
                              <p >{product.title}</p>
                              <p style = {{fontWeight:'500'}}>$ {product.price}</p>
                        </div>
                  </Link>
            </div>
      )
}

export default ProductDisplay;
