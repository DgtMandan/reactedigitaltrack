import React from "react";
import "../Styles/Primary_nav.css";
import logo from "../images/Digital track.png";
import { Link } from "react-router-dom";

const PrimaryNavbar = () => {
  return (
    <div className="Primary_nav">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link class="navbar-brand" to="#">
           <img src={logo} alt="Digital Track"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                    Local SEO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                    National SEO
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                    PPC
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                Contact Us
                </Link>
              </li>
            </ul>
            <form className="my-2 my-lg-0 nav-icon">
            <i class="fa fa-cart-arrow-down mx-2" aria-hidden="true"></i>
          <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Login</button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Signup</button>
    </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PrimaryNavbar;
