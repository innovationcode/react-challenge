import React from "react";
import "./Header.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {Link} from 'react-router-dom';
// import Logo from './../../assets/tnooklogo.jpg';
import Logo from './../../assets/baby_cloths.PNG';
import { useStateValue } from './../../reducer/StateProvider.js';
import { getICartQuantity } from './../../reducer/reducer.js';

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();

  const facebook_click = (url, name, width, height) => {
    const u = url      
    const t = name;

    var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    const windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer',windowFeatures);
    return false;
  }

  const twitter_click = (url, name, width, height) => {
    const u = url      
    const t = name;
    var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    const windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open('https://twitter.com/intent/tweet?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t),'sharer',windowFeatures);
    return false;
  }

  const instagram_click = (url, name, width, height) => {
    const u = url      
    const t = name;
    var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    const windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open('https://www.instagram.com/sharer?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t),'sharer',windowFeatures);
    return false;
  }

  const pinterest_click = (url, name, width, height) => {
    const u = url      
    const t = name;
    var leftPosition, topPosition;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    const windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open('https://www.pinterest.com/pin/create/button/?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t),'sharer',windowFeatures);
    return false;
  }
  
  return (
    <div className="header_main">
      <div className="header_top_logo_social">
        <div className="header_logo">
          <img src= {Logo} />
        </div>

        <div className="header_social_cart">
          <li style={{ background: "#DEB887" }}>
            <InstagramIcon className="header_social_buttons" onClick={() => instagram_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}/>
          </li>
          <li style={{ background: "#cd5c5c" }}>
            <TwitterIcon className="header_social_buttons" onClick={() => twitter_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}  />
          </li>
          <li style={{ background: "#00CED1" }} onClick={() => facebook_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}>
            <FacebookIcon className="header_social_buttons" />
          </li> 
          <li style={{ background: "#008B8B" }} onClick={() => pinterest_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}>
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
