import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import ProductList from './components/productList/ProductList.js';
import ProductDetail from './components/productDetail/ProductDetail.js';
import Cart from './components/cart/Cart.js';

import { Route } from "react-router-dom";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Route exact path={["/", "/babies"]} component={ProductList} />
      <Route exact path={["/product_detail/:id"]} component={ProductDetail }/>
      <Route exact path="/cart" component={Cart} />

      <Footer />
    </div>
  );
}

export default App;
