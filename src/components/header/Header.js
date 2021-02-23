import React from "react";
import "./Header.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  return (
    <div className="header_main">
      <div className="header_top_logo_social">
        <div className="header_logo">
          <img src= './tnooklogo.png' />
        </div>

        <div className="header_social_cart">
          <li style={{ background: "#DEB887" }}>
            <InstagramIcon className="social_buttons" />
          </li>
          <li style={{ background: "#cd5c5c" }}>
            <TwitterIcon className="social_buttons" />
          </li>
          <li style={{ background: "#00CED1" }}>
            <FacebookIcon className="social_buttons" />
          </li>
          <li style={{ background: "#008B8B" }}>
            <PinterestIcon className="social_buttons" />
          </li>
          <span className="cart-icon-block">
            <span style={{ fontSize: "13px", padding: "4px 10px" }}>cart</span>
            <ShoppingCartIcon />
            <span className="cart_quantity_number">20</span>
          </span>
        </div>
      </div>

      <div className="header_bottom_navbar">
        <li>new arrivals</li>
        <li>babies</li>
        <li>girls</li>
        <li>boys</li>
        <li>sale</li>
      </div>
    </div>
  );
};

export default Header;
