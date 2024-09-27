import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";
const StarRating = ({ color }) => {
  const stars = Array(5).fill(0); // Create an array of 5 elements

  return (
    <div className="flex">
      {stars.map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="yellow"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27l5.18 3.073-1.64-6.814L21 9.347l-7.057-.611L12 2.5 10.057 8.736 3 9.347l5.46 4.182L6.82 20.343 12 17.27z"
          />
        </svg>
      ))}
    </div>
  );
};
function Tesimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, // Corrected key
        autoplaySpeed: 1000, // Optional: Set autoplay speed (default is 3000 ms)
      };
      
  return (
<div className="w-full m-auto">
  <div className="mt-20">
    <Slider {...settings}>
      {data.map((d) => (
        <div className="p-4 flex-col items-center justify-center mx-8 bg-white shadow-xl"> {/* Add margin or gap manually */}
          <div className="text-base font-bold py-3 ">
            <h3>{d.testimonial}</h3>
          </div>
          <div className="font-bold">
            <p>{d.fixed}</p>
          </div>
          <div className="w-fit">
            <p>{d.about}</p>
          </div>
          <div className="text-base font-semibold">
            <h3>{d.customerName}</h3>
          </div>
          <div className="text-gray-400">
            <p>{d.city}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>

  );
}
const data = [
  {
    testimonial: "Hired Caregiver In Lackhnow",
    testimonialRating: 5,
    fixed: "My Experinece With Help4u",
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid? Quidem temporibus qui aperiam quos ipsa necessitatibus, unde doloremque ea",
    customerName: "Mr.Mina Sharma",
    city: "Delhi",
  },
  {
    testimonial: "Hired Caregiver In Lackhnow",
    fixed: "My Experinece With Help4u",
    testimonialRating: 5,
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid? Quidem temporibus qui aperiam quos ipsa necessitatibus, unde doloremque ea",
    customerName: "Mr.Mina Sharma",
    city: "Delhi",
  },
  {
    testimonial: "Hired Caregiver In Lackhnow",
    fixed: "My Experinece With Help4u",
    testimonialRating: 5,
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid? Quidem temporibus qui aperiam quos ipsa necessitatibus, unde doloremque ea",
    customerName: "Mr.Mina Sharma",
    city: "Delhi",
  },
  {
    testimonial: "Hired Caregiver In Lackhnow",
    fixed: "My Experinece With Help4u",
    testimonialRating: 5,
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, aliquid? Quidem temporibus qui aperiam quos ipsa necessitatibus, unde doloremque ea",
    customerName: "Mr.Mina Sharma",
    city: "Delhi",
  },
];

export default Tesimonial;
