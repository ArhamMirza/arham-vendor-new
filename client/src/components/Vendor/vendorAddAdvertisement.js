import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VendorNav from "./vendorNav";
import "../../styles/vendorAddAdvertisement.css";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const VendorAddAdvertisement = () => {
  const navigate = useNavigate();
  const vendor_id = localStorage.getItem("user_id");
  const user_name = localStorage.getItem("user_name");

  const userType = localStorage.getItem("user_type");

  // if (!userType) {
  //   alert("User not logged in");
  //   navigate("/");
  // } else if (userType !== "Vendor") {
  //   alert("You are not a vendor!");
  //   navigate("/");
  // }

  const [advertisement, setAdvertisement] = useState({
    name: "",
    description: "",
    price: "",
    rating: 0,
    active: true,
  });

  const handleAddAdvertisement = () => {
    console.log(advertisement);
    fetch("https://olumsx-backend-deploy-new.vercel.app/api/ads/vendoraddadvertisement", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(advertisement),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setAdvertisement({ ...advertisement, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <VendorNav />
      <div className="container">
        <h1 className="text-center mb-4">Add Advertisement</h1>
        
        <div className="row">
          <div className="col-md-6 mx-auto p-4">
            <div className="form-group">
              <label htmlFor="advertisementName">Advertisement Name</label>
              <input
                id="advertisementName"
                type="text"
                name="name"
                value={advertisement.name}
                onChange={handleChange}
                className="form-control mb-3 mt-3 shadow-sm bg-gray-100"
              />
            </div>
            <div className="form-group">
              <label htmlFor="advertisementDescription">
                Advertisement Description
              </label>
              <textarea
                id="advertisementDescription"
                name="description"
                value={advertisement.description}
                onChange={handleChange}
                className="form-control mb-3 mt-3 shadow-sm bg-gray-100"
                rows="4"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="advertisementPrice">Advertisement Price</label>
              <input
                id="advertisementPrice"
                type="text"
                name="price"
                value={advertisement.price}
                onChange={handleChange}
                className="form-control mb-3 mt-3  shadow-sm bg-gray-100"
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="advertisementRating">Advertisement Rating</label>
              <input
                id="advertisementRating"
                type="number"
                name="rating"
                value={advertisement.rating}
                onChange={handleChange}
                className="form-control mb-3 shadow-sm bg-gray-100"
                min="0"
                max="5"
              />
            </div> */}
            <button onClick={handleAddAdvertisement} className="btn btn-primary">
              Add Advertisement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAddAdvertisement;
