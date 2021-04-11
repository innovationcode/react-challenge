import React, { useState } from 'react'
import { useStateValue } from './../../reducer/StateProvider.js';
import { products } from './../../Data/data.js'
import size_chart from './../../assets/size_chart.PNG';
import Swal from 'sweetalert2';

import './ProductDetail.css'
// import { Link } from 'react-router-dom';

const ProductDetail = (id) => {
      const [{ cart }, dispatch] = useStateValue();
      const [size, setSize] = useState('')
      const [color, setColor] = useState('')
      const [quantity, setQuantity] = useState(1)
      const [showSizeChart, setshowSizeChart] = useState(false)


      // console.log("ID  : ", id)
      // console.log("ID  : ", id.match.params.id)
      const pr = products[id.match.params.id-1];
      const [productLocal, setProductLocal] = useState(pr);

      // console.log("Product Local in product detail  ",productLocal)
      // console.log("Current cartBasket : ", cart);

      const handleSize = (e) => {
            setSize(e.target.value)
      }

      const handleColor = (e) => {
            setColor(e.target.value)
      }

      const quantityUp = () => {
            setQuantity(quantity + 1) 
      }

      const quantityDown = () => {
            if(quantity > 1) {
                  setQuantity(quantity - 1) 
            }else {
                  alert('Minimum quantity 1')
            }  
      }

      const addToCart = () => {
            if(!size && !color) {
                  Swal.fire("Select size and color")   
            } else {
                  dispatch({
                        type: "ADD_TO_CART",
                        item: {
                              product_id: productLocal.product_id,
                              title: productLocal.title,
                              price: productLocal.price,
                              image: productLocal.image,
                              quantity: quantity,
                              size : size,
                              color: color
                        }
                  });
            }
      };

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
                                          <p style = {{paddingBottom:'10px'}}>size 
                                                <span style = {{color:'rgb(2, 109, 109)', cursor:'pointer'}} 
                                                      onClick = {()=> setshowSizeChart(true)}>
                                                            : size chart
                                                </span>
                                          </p>
                                          <form onChange = {handleSize}>
                                                <input type="radio" name="size" value="0-12 months"/>0-12 months<br/>
                                                <input type="radio" name="size" value="12-24 months"/>12-24 months<br/>
                                                <input type="radio" name="size" value="2-5 years"/>2-5 years<br/>
                                                <input type="radio" name="size" value="6-12 years"/>6-12 years<br/>
                                          </form>
                                    </div>
                                    <div className = "size-radio-buttons" style = {{marginLeft:'18px'}}>
                                          <p style = {{paddingBottom:'10px'}}>color : required</p>
                                          <form onChange = {handleColor}>
                                                <label className="container">
                                                      <input type="radio" name="color" value="Teal" />Teal<br/>
                                                      <span className="circle teal"></span>
                                                </label>
                                                <label className="container">
                                                      <input type="radio" name="color" value="Mustard"/>Mustard<br/>
                                                      <span className="circle mustard"></span>
                                                </label>
                                                <label className="container">
                                                      <input type="radio" name="color" value="Gray"/>Gray<br/>
                                                      <span className="circle gray"></span>
                                                </label>
                                                <label className="container">
                                                      <input type="radio" name="color" value="Forest"/>Forest<br/>
                                                      <span className="circle forest"></span>
                                                </label>
                                          </form>
                                    </div>
                              </div>
                              <div className = "productdetail_quantity">
                                    <span>quantity: &nbsp; 
                                          <button onClick = {quantityDown}>-</button> &nbsp; &nbsp;{quantity}&nbsp; &nbsp;
                                          <button onClick = {quantityUp}>+</button></span>                                    
                              </div>
                              <button className = "add_to_cart" onClick={addToCart}>add to cart</button>
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
                        <div style = {{display:'flex', justifyContent:'space-evenly', padding:'0px 30px'}}>                       
                              {products.map(product => (
                                    <div key = {product.product_id}>
                                    {product.product_id < 6? ( 
                                          // <Link to= {`/product_detail/${product.product_id}`}  className = "no-decoration">
                                          <div className = "related_products">
                                                      <img src={product.image} alt ="product_image"/>
                                                      <p>{product.title}</p>
                                                      <p>${product.price}</p>
                                          </div>
                                          // </Link>
                                    ) : null}
                              </div>
                        ))}
                        </div>
                  </div>

                  {/* show size chart */}
                  {showSizeChart && 
                        <div className="show_size_chart">
                              <div className="show_size_chart_inner">
                                    <h3 style = {{color:'rgb(2, 109, 109)', fontSize:'25px', textAlign:'center', paddingBottom:'30px'}}>
                                          Size chart
                                    </h3>
                                    <span className = "size_chart_close"
                                          onClick = {()=> setshowSizeChart(false)}
                                    >x</span>
                                    <img src= {size_chart} alt='size-chart'/>
                              </div>
                        </div>
                  }
            </div>
      )
}

export default ProductDetail;

