import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/login";
import Signup from "./components/signup.js";
import CustomerHome from "./components/Customer/customerHome";
import VendorHome from "./components/Vendor/vendorHome.js";
import ManagerHome from "./components/Manager/managerHome.js";
import CustomerProductPage from "./components/Customer/customerProductPage.js";
import VendorAddProduct from "./components/Vendor/vendorAddProduct.js";
import VendorDeleteProduct from "./components/Vendor/vendorDeleteProduct";
import VendorEditProduct from "./components/Vendor/vendorEditProduct";

import Cart from "./components/Customer/cart";
import ManagerViewCustomers from "./components/Manager/managerViewCustomers";
import ManagerViewVendors from "./components/Manager/managerViewVendors";
import CustomerAllOrdersPage from "./components/Customer/customerAllOrdersPage";
import Profile from "./components/profile";
import UndeliveredOrders from "./components/Manager/undeliveredOrders";
import DeliveredOrders from "./components/Manager/deliveredOrders";
import ManagerViewManager from "./components/Manager/managerViewManager";
import VendorViewOrders from "./components/Vendor/vendorViewOrders";
import VendorAddAdvertisement from "./components/Vendor/vendorAddAdvertisement";

import ProductPageInfo from "./components/Customer/ProductPageInfo";

import Home from "./components/home";
// import Cart from "./components/cart";
import Wishlist from "./components/Customer/wishlist";

import "./index.css";


import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartShopping, faGear, faHeart, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faHeart, faUser, faCartShopping, faGear, faMagnifyingGlass);

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/>



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/customerHome" element={<CustomerHome />} />
        <Route path="/vendorHome" element={<VendorHome />} />
        <Route path="/managerHome" element={<ManagerHome />} />
        <Route path="/customerProductPage" element={<CustomerProductPage />} />
        <Route path="/vendorAddProduct" element={<VendorAddProduct />} />
        <Route path="/vendorEditProduct" element={<VendorEditProduct/>} />
        <Route path="/vendorDeleteProduct" element={<VendorDeleteProduct />} />
        <Route path="/vendorAddAdvertisement" element={<VendorAddAdvertisement />} />
        <Route path = "/product" element={<ProductPageInfo/>}/>

        <Route path="/cart" element={<Cart />} />
        <Route path="/managerViewVendors" element={<ManagerViewVendors />} />
        <Route
          path="/managerViewCustomers"
          element={<ManagerViewCustomers />}
        />
        <Route path="/managerViewManager" element={<ManagerViewManager />} />
        <Route
          path="/customerAllOrdersPage"
          element={<CustomerAllOrdersPage />}
        />
        <Route path="/undeliveredOrders" element={<UndeliveredOrders />} />
        <Route path="/vendorViewOrder" element={<VendorViewOrders />} />
        <Route path="/deliveredOrders" element={<DeliveredOrders />} />
        <Route path="/" element={<DeliveredOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
