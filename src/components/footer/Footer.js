import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {
  return (
    <div className="footer_main">
      <div style={{ display: "flex" }}>
        <div className="navigate">
          <h3>navigate</h3>
          <li>new arrivals</li>
          <li>babies</li>
          <li>boys</li>
          <li>girls</li>
          <li>gifts</li>
          <li>sale</li>
          <li>blog</li>
        </div>

        <div className="customer_care">
          <h3>customer care</h3>
          <li>contact Us</li>
          <li>my account</li>
          <li>sizing</li>
          <li>shipping & returns</li>
          <li>customer care</li>
          <li>FAQs</li>
        </div>
      </div>

      <div className="footer_social_buttons">
        <div className="footer_social_cart">
          <li>
            <InstagramIcon className="social_buttons" />
          </li>
          <li>
            <TwitterIcon className="social_buttons" />
          </li>
          <li>
            <FacebookIcon className="social_buttons" />
          </li>
          <li>
            <PinterestIcon className="social_buttons" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
