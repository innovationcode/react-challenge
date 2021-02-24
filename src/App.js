import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import ProductList from './components/productList/ProductList.js';
import Cart from './components/cart/Cart.js';

import { Route } from "react-router-dom";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Route exact path={["/", "/products"]} component={ProductList} />
      <Route exact path="/cart" component={Cart} />

      <Footer />
    </div>
  );
}

export default App;
