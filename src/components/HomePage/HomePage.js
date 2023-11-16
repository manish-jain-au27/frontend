import React from "react";
import { Link } from "react-router-dom";
import HomeCategories from "./HomeCategories";
import HomeProductTrending from "./HomeProductTrending";
import { Carousel } from 'react-responsive-carousel';
import BottomNavigation from "./BottomNavigation";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './homepage.css'
// const offers = [
//   {
//     name: "Return when you're ready",
//     description: "7 days of free returns",
//     href: "#",
//   },
// ];

const perks = [
  {
    name: "Free returns",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg",
    description:
      "Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.",
  },
  {
    name: "Lightning Fast delivery",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg",
    description:
      "We offer a delivery service that has never been done before. Checkout today and receive your products within hours.",
  },
  {
    name: "Contact Us",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg",
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: "For the planet",
    imageUrl:
      "https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg",
    description:
      "We’ve pledged 1% of sales to the preservation and restoration of the natural environment.",
  },
];

function HomePage() {
  return (
    <div className="bg-white">
      <main className="min-h-screen bg-gradient-to-b from-opacity-60 via-opacity-60 to-opacity-70">
        {/* Hero */}
        

        {/* Image Slider */}
        <div className="full-width-carousel-container rounded-md overflow-hidden mt-8">
          <Carousel autoPlay={true} interval={3000} showThumbs={false} infiniteLoop={true}>
          <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032593/banner10_ztafvy.png" alt="Image 1" />
    </div>
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032546/banner3_axzh9p.png" alt="Image 2" />
    </div>
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032546/banner2_kvzzxu.png" alt="Image 3" />
    </div>
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032545/banner9_f7nn5k.png" alt="Image 4" />
    </div>
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032544/banner8_gabou6.png" alt="Image 5" />
    </div >
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032543/Banner1_btnxgy.png" alt="Image 6" />
    </div>
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032543/banner5_kjtsbq.png" alt="Image 7" />
    </div >
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032542/banner7_bl8jrc.png" alt="Image 8" />
    </div>
    <div className="carousel-slide">
      <img src="https://res.cloudinary.com/manish8087/image/upload/v1694032540/banner6_acscl3.png" alt="Image 9" />
    </div>
    
          </Carousel>
        </div>

{/* Category section */}
<section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <Link
            to="/all-categories"
            className="text-blue-500 hover:underline text-lg"
          >
            Browse all categories &rarr;
          </Link>
        </div>
        <HomeCategories />
      </section>    
       {/* Home trending trending */}
       <HomeProductTrending /> 
       <BottomNavigation/>
      </main>

      

     

      {/* Perks */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Perks
          </h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                src={perk.imageUrl}
                alt={perk.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{perk.name}</h3>
              <p className="text-gray-600">{perk.description}</p>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}

export default HomePage;
