import React from "react";
import "../Styles/Footer.css";
import logo from "../images/Digital track.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 logo_area">
            <img src={logo} alt="Digital Track Logo" />
            <p>
              We work with small businesses to provide affordable marketing
              services and more.Let’s chat, give us a call at (900) 465-7330
              today.
            </p>
            <div className="col-md-4 footersocial-icon">
            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            <Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link> 
            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link> 
            <Link to="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link> 
            <Link to="#">  <i className="fa fa-linkedin" aria-hidden="true"></i></Link> 
            <Link to="#"><i className="fa fa-yelp" aria-hidden="true"></i></Link> 
          </div>
          </div>
          <div className="col-md-3 service_footer">
            <h2>Services</h2>
            <p>
              <i class="fa fa-angle-right" aria-hidden="true"></i> Search Engine
              Optimization
            </p>
            <p>
              <i class="fa fa-angle-right" aria-hidden="true"></i> Website
              Design
            </p>
            <p>
              <i class="fa fa-angle-right" aria-hidden="true"></i> Social Media
              Branding
            </p>
            <p>
              <i class="fa fa-angle-right" aria-hidden="true"></i> Strategic
              Marketing
            </p>
            <p>
              <i class="fa fa-angle-right" aria-hidden="true"></i> Search Engine
              Marketing
            </p>
            <p>
              <i class="fa fa-angle-right" aria-hidden="true"></i> Affiliate
              Marketing
            </p>
          </div>
          <div className="col-md-4">
            <h2>Get in Touch</h2>
            <p>
              <i class="fa fa-phone" aria-hidden="true"></i> 9004657330
            </p>
            <p>
              <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
              admin@edigiflux.com
            </p>
            <p>
              <i class="fa fa-map-marker" aria-hidden="true"></i> Suchita
              Business Park, Ghatkopar East, 400075
            </p>
            <p>
              <i class="fa fa-clock-o" aria-hidden="true"></i> Monday – Friday :
              7am-7pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
