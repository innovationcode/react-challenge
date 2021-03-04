import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import ProductList from './components/productList/ProductList.js';
import ProductDetail from './components/productDetail/ProductDetail.js';
import Cart from './components/cart/Cart.js';
import Checkout from './components/checkout/Checkout.js';
import Payment from './components/checkout/payment/Payment.js'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Route } from "react-router-dom";
import Confirmation from './components/confirmation/Confirmation.js'

import './App.css';

// console .log("STRIPE API : ",process.env.REACT_APP_STRIPE_KEY)

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

const App = () => {
  return (
    <div className="App">
      <Header />

      <div className = "app_router_paths">
        <Route exact path={["/", "/babies"]} component={ProductList} />
        <Route exact path={["/product_detail/:id"]} component={ProductDetail }/>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/payment"> 
            <Elements stripe = {promise}> 
                <Payment />
            </Elements>
        </Route>
        <Route exact path="/confirmation/:order_id" component = {Confirmation}/> 
      </div>
      <Footer />
    </div>
  );
}

export default App;
