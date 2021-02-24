import React from 'react';

import './ProductDisplay.css'

const ProductDisplay = ({ product }) => {
      return (
            <div className = "productdisplay_main">
                  <div>
                        <img src = {product.image}/>
                  </div>

                  <div>
                        <p>{product.title}</p>
                        <p style = {{fontWeight:'500'}}>$ {product.price}</p>
                  </div>
            </div>
      )
}

export default ProductDisplay;
