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
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true, // Correctedkey
    // autoplaySpeed: 1000, // Optional: Set autoplay speed (default is 3000 ms)
  };
  return (
    <div className="h-screen bg-slate-100 pt-20 ">
      <div className=" w-full  mx-auto  py-20">
      <div className="text-center font-bold text-3xl py-10"> <h2> Helper4U Services</h2>
      </div>
        <Slider {...settings}>
          {data.map((item, index) => {
           
           return (
                
              <div key={index} className="bg-slate-100  border rounded-md hover:scale-110 transition-all duration-500 cursor-pointer ">
                
                <div >
                  <img 
                    src={item.image}
                    className="w-full  object-contain block m-auto p-3"
                  />
                </div>
                <div>
                  <p className="font-bold text-lg py-4 text-center bg-gray-100 ">
                    {" "}
                    {item.title}
                  </p>
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
