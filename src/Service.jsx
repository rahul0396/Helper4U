import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    image: "/src/assets/img/phone.png",
    title: "Preminum Hiring service",
  },
  {
    image: "/src/assets/img/book.png",
    title: " Hiring For Few Days",
  },
  {
    image: "/src/assets/img/search.png",
    title: "Verify Staff",
  },
  {
    image: "/src/assets/img/hand.png",
    title: "Help4Parents",
  },
];
const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    // autoplay: true, // Correctedkey
    // autoplaySpeed: 2000, // Optional: Set autoplay speed (default is 3000 ms)
  };
  return (
    <div className="h-screen bg-slate-100  w-full mahak ">
      <div className=" w-full ">
        <div className="text-center font-bold text-3xl py-10">
      
          <h2> Helper4U Services</h2>
        </div>
        <Slider {...settings} className="slider_service grid grid-cols-4 w-full ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-slate-100 flex flex-wrap py-5 w-full  "
              >
                <div className="border w-full rounded-md    hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer">
                  <div>
                    <img
                      src={item.image}
                      className="w-full  object-contain block  p-3"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg py-3 text-center bg-gray-100 ">
                      {""}
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
    
  );
};

export default Service;
