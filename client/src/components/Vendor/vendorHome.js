import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "../../styles/vendorHome.css";

import imageSrc1 from '../../assets/laptop (1).jpg';
import imageSrc2 from '../../assets/food (1).jpg';
import imageSrc3 from '../../assets/phones.jpg';

import imageSrc4 from '../../assets/Clothes.jpg';


import Navbar from './vendorNav';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const VendorHome = () => {
  const navigate = useNavigate();
  const [recentProducts, setRecentProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const checkAuthorization = () => {
      const userType = localStorage.getItem('user_type');
      if (!userType) {
        setErrorMessage('User not logged in');
        navigate('/');
        return false;
      } else if (userType !== 'Vendor') {
        setErrorMessage('You are not a vendor!');
        navigate('/');
        return false;
      }
      return true;
    };

    const fetchRecentProducts = async () => {
      try {
        if (!checkAuthorization()) return;

        const userId = localStorage.getItem('user_id');
        if (!userId) {
          throw new Error('User ID not found');
        }
        const response = await axios.get(`('https://olumsx-backend-deploy-new.vercel.app/api/product/recentproducts?userId=${userId}&limit=6`);
        setRecentProducts(response.data);
      } catch (error) {
        console.error('Error fetching recent products:', error);
        setErrorMessage('Error fetching recent products');
      }
    };

    fetchRecentProducts();
  }, []);

  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint for your needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint for your needs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  

  return (
    <>
    <Navbar/>
    <div className = "vendor-home">

      <div className="flex flex-col items-center bg-black" id="home-box">
      <Slider {...bannerSettings} className="w-9/12 mx-auto flex justify-center items-center pt-4">
      <div className='img-div'>
        <img src={imageSrc1} alt="Banner" className="small-banner-img h-full w-full object-cover"/>
      </div>
      <div className='img-div'>
        <img src={imageSrc2} alt="Banner" className="small-banner-img h-full w-full object-cover"/>
      </div>
      <div className='img-div'>
        <img src={imageSrc3} alt="Banner" className="small-banner-img h-full w-full object-cover"/>
      </div>
      <div className='img-div'>
        <img src={imageSrc4} alt="Banner" className="small-banner-img h-full w-full object-cover"/>
      </div>
    </Slider>


        <div className="bg-white w-full">
          <div className="p-4 text-center">
            <h2 className="text-2xl font-bold mb-2 mt-4 p-4 ">Recent Products Added</h2>
            <Slider {...productSettings} className="mx-auto">
              {recentProducts.map(product => (
                <div className="p-4" key={product.id}>
                  <div className="rounded overflow-hidden shadow-lg">
                    <img className="w-full h-48 object-cover" src={product.image || imageSrc1} alt="Product"/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{product.name}</div>
                      <p className="text-gray-700 text-base">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",color:"black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color:"black" }}
      onClick={onClick}
    />
  );
}

export default VendorHome;
