import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from "./components/login";
// import Signup from "./components/signup.js";
import VendorHome from "./components/Vendor/vendorHome.js";
import VendorAddProduct from "./components/Vendor/vendorAddProduct.js";


import VendorViewOrders from "./components/Vendor/vendorViewOrders";
import VendorAddAdvertisement from "./components/Vendor/vendorAddAdvertisement";

import VendorChat from "./components/Vendor/vendorChat";


// import Cart from "./components/cart";

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
        
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}


        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="https://arham-vendor-new.vercel.app/vendorHome" element={<VendorHome />} />
        <Route path="/vendorAddProduct" element={<VendorAddProduct />} />
        <Route path="/vendorAddAdvertisement" element={<VendorAddAdvertisement />} />

        <Route path="/vendorChat" element={<VendorChat/>} />

        
        <Route path="/vendorViewOrder" element={<VendorViewOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
