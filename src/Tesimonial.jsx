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
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Corrected key
    autoplaySpeed: 3000, // Optional: Set autoplay speed (default is 3000 ms)
  };

  return (
    <div className="w-full  bg-slate-100 items-center  px-[100px]">
      <div className="text-center">
        {" "}
        <h3 className="text-3xl font-bold pt-4">Customer Testimonials</h3>
      </div>
      <div className="pt-20 ">
        <Slider {...settings} className="">
          {data.map((d) => (
            <div className="px-4 py-4 flex-col items-center justify-center slide_testimonial  mx-8 shadow-2xl bg-slate-100 ">
              
              {/* Add margin or gap manually */}
              <div>
                <div className="text-base font-bold py-3 ">
                  <h3>{d.testimonial}</h3>
                </div>
              </div>
              <div className="flex  ">
                <div className="font-bold">
                  <p className="text-xs">{d.fixed}</p>
                </div>
                <div>
                  <div class="flex items-center">
                    <svg
                      class="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 text-yellow-300 ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-fit py-2">
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
