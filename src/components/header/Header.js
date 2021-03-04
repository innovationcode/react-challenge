import React from "react";
import "./Header.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom';
import Logo from './../../assets/tnooklogo.jpg';
import { useStateValue } from './../../reducer/StateProvider.js';
import { getICartQuantity } from './../../reducer/reducer.js';

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header_main">
      <div className="header_top_logo_social">
        <div className="header_logo">
          <img src= {Logo} />
        </div>

        <div className="header_social_cart">
          <li style={{ background: "#DEB887" }}>
            <InstagramIcon className="header_social_buttons"/>
          </li>
          <li style={{ background: "#cd5c5c" }}>
            <TwitterIcon className="header_social_buttons" />
          </li>
          <li style={{ background: "#00CED1" }}>
            <FacebookIcon className="header_social_buttons" />
          </li>
          <li style={{ background: "#008B8B" }}>
            <PinterestIcon className="header_social_buttons" />
          </li>
          <span className="cart-icon-block">
            <span style={{ fontSize: "13px", padding: "4px 10px" }}>cart</span>
            <Link to="/cart" className="no-decoration">
              <ShoppingCartIcon style = {{cursor:'pointer', color:'#008B8B'}}/>
              <span className="cart_quantity_number">{getICartQuantity(cart)}</span>
            </Link>
          </span>
        </div>
      </div>

      <div className="header_bottom_navbar">
        <Link to = '/babies' className = "no-decoration"><li>new arrivals</li></Link>
        <Link to = '/babies' className = "no-decoration"><li>babies</li></Link>
        <Link to = '/babies' className = "no-decoration"><li>girls</li></Link>
        <Link to = '/babies' className = "no-decoration"><li>boys</li></Link>
        <Link to = '/babies' className = "no-decoration"><li>sale</li></Link>
      </div>
    </div>
  );
};

export default Header;
