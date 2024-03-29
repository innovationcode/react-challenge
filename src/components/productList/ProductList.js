import React from 'react'
import ProductDisplay from './../productDisplay/ProductDisplay.js';

import { products } from './../../Data/data.js';

import './ProductList.css';

const ProductList = () => {
      return (
            <div className = "productlist_main">
                  {products ? (
                        <div className = "productlist_inner">
                              {products.map((product, i) => (
                                    <div key={product.id} className="product_map">
                                          <ProductDisplay product={product} key={product.id}/>
                                    </div>
                               ))}
                        </div>
                  ) : (
                         <p> Loading...</p>
                   )}
            </div>
      )
}

export default ProductList;
