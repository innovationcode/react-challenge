import React from "react";
import "./Footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import PinterestIcon from "@material-ui/icons/Pinterest";
import {Link} from 'react-router-dom';

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
  window.open('https://www.instagram.com/?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t),'sharer',windowFeatures);
  return false;
}

const pinterest_click = (url, name, width, height) => {
  const u = url      
  const t = name;
  var leftPosition, topPosition;
  leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
  topPosition = (window.screen.height / 2) - ((height / 2) + 50);
  const windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
  window.open('https://www.pinterest.com/?url='+encodeURIComponent(u)+'&text='+encodeURIComponent(t),'sharer',windowFeatures);
  return false;
}


const Footer = () => {
  return (
    <div className="footer_main">
      <div style={{ display: "flex" }}>
        <div className="navigate">
          <h3>navigate</h3>
          <Link to = '/babies' className = "no-decoration"><li>new arrivals</li></Link>
          <Link to = '/babies' className = "no-decoration"><li>babies</li></Link>
          <Link to = '/babies' className = "no-decoration"><li>girls</li></Link>
          <Link to = '/babies' className = "no-decoration"><li>boys</li></Link>
          <Link to = '/babies' className = "no-decoration"><li>sale</li></Link>
          {/* <li>new arrivals</li>
          <li>babies</li>
          <li>boys</li>
          <li>girls</li>
          <li>sale</li> */}
          <li>gifts</li>
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
          <li onClick={() => instagram_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}>
            <InstagramIcon className="social_buttons" />
          </li>
          <li onClick={() => twitter_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}>
            <TwitterIcon className="social_buttons" />
          </li>
          <li onClick={() => facebook_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}>
            <FacebookIcon className="social_buttons" />
          </li>
          <li onClick={() => pinterest_click('https://react-challenge-a52f9.web.app/', 'Baby Cloths', 400, 400)}>
            <PinterestIcon className="social_buttons" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
