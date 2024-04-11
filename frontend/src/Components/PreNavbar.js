import React from "react";
import "../Styles/PreNavbar.css";
import { Link } from "react-router-dom";

const PreNavbar = () => {
  return (
    <div className="Prenav">
      <div className="container">
        <div className="row PreBorder">
          <div className="col-md-2 social-icon">
            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            <Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link> 
            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link> 
            <Link to="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></Link> 
            <Link to="#">  <i className="fa fa-linkedin" aria-hidden="true"></i></Link> 
            <Link to="#"><i className="fa fa-yelp" aria-hidden="true"></i></Link> 
          </div>
          <div className="col-md-6 prenavbar_address">
          <Link to="#"> <p><i className="fa fa-map-marker" aria-hidden="true"></i>  Suchita Business Park, Ghatkopar East, 400075</p></Link>
          </div>
          <div className="col-md-2 prenavbar_address">
          <Link to="#">  <p><i className="fa fa-user" aria-hidden="true"></i> Client Portal</p></Link>
          </div>
          <div className="col-md-2 prenavbar_address">
          <Link to="#"> <p><i className="fa fa-phone" aria-hidden="true"></i> 9004657330</p></Link> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default PreNavbar;
