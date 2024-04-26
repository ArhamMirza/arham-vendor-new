import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VendorNav from "./vendorNav";
import "../../styles/vendorAddProduct.css";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const VendorAddProduct = () => {
  const navigate = useNavigate();
  const vendor_id = localStorage.getItem('user_id') || '662b6112b4d86cdbdf0e50bc';
  const user_name = localStorage.getItem("user_name");

  const userType = localStorage.getItem("user_type");



  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    vendor: vendor_id,
    description: "",
  });

  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const handleCategoryClick = (category) => {
    setProduct({ ...product, category: category });
    setSelectedCategory(category);
    setShowCategories(false);
  };
  
 

  const handleAddProduct = () => {
    console.log(product);
    fetch("https://olumsx-backend-deploy-new.vercel.app/api/product/addproduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
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
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen">
      <VendorNav />
      <div className={`container mx-auto p-4 ${showCategories ? "opacity-50" : ""}`}>
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Add Product</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-6">
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              id="productName"
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700">Product Category</label>
            <input
              id="productCategory"
              type="text"
              name="category"
              autoComplete="off"
              value={selectedCategory}
              onChange={handleChange}
              onClick={() => setShowCategories(true)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">Product Price</label>
            <input
              id="productPrice"
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="itemDescription" className="block text-sm font-medium text-gray-700">Item Description</label>
            <textarea
              id="itemDescription"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button onClick={handleAddProduct} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 mb-5 rounded">
              Add Product
            </button>
          </div>
        </div>
      </div>

      {/* Keeping original Categories Popup design */}
      {showCategories && (
        <div className={`popup-container show`}>
          <div className="select-category-text">Select Category</div>
          <button className="close-btn" onClick={() => setShowCategories(false)}>
            &times;
          </button>
          <div className="category-container">
            {["Mobile Phones", "Laptops and Computers", "Tech Accessories", "Fashion", "Home and Decor", "Beauty and Health", "Books", "Toys and Games", "Sports and Outdoors", "Food and Grocery"].map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="category-btn"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorAddProduct;