import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/vendorNav.css";

const VendorNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar-vendor">
      <div>
        <h2 className="navbar-heading">OLumsX</h2>
      </div>
      <div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <div className="navbar-link-wrapper">
              <Link className="navbar-link" to="/vendorHome">Home</Link>
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link-wrapper">
              {/* <div className="navbar-dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}> */}
                <Link className="navbar-link" to="/vendorAddProduct">Add Products</Link>
                {/* {showDropdown && (
                  <div className="dropdown-content">
                    <Link to="/vendorViewOrder">View Product Orders</Link>
                    <Link to="/vendorAddProduct">Add Products</Link>
                    <Link to="/vendorDeleteProduct">Delete Products</Link>
                  </div>
                )} */}
              {/* </div> */}
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link-wrapper">
              <Link className="navbar-link" to="/vendorProducts">Chat</Link>
            </div>
          </li>
          {/* Add more navigation items here if needed */}
          <li className="navbar-item">
            <div className="navbar-link-wrapper">
              <Link className="navbar-link" to="/vendorViewOrder">Orders</Link>
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link-wrapper">
              <Link className="navbar-link" to="/vendorAddAdvertisement">Add Ads</Link>
            </div>
          </li>
          <li className="navbar-item">
            <div className="navbar-link-wrapper">
              <Link className="navbar-link" to="/vendorViewOrder">Reviews</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default VendorNav;
