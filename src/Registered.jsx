import React from "react";
import Slider from "react-slick";

const Register = [
  {
    image: "/src/assets/img/circle1.png",
    name: "Mahak",
    profile: " Babysitter-N...",
    madetype: "Patient-Elde...",
    live: "live-in",
    time: "Full-Day",
    address: " sion west, mumbai, 400022",
  },
  {
    image: "/src/assets/img/circle1.png",
    name: "Mahak",
    profile: " Babysitter-N...",
    madetype: "Patient-Elde...",
    live: "live-in",
    time: "Full-Day",
    address: " sion west, mumbai, 400022",
  },

  {
    image: "/src/assets/img/circle1.png",
    name: "Mahak",
    profile: " Babysitter-N...",
    madetype: "Patient-Elde...",
    live: "live-in",
    time: "Full-Day",
    address: " sion west, mumbai, 400022",
  },
  {
    image: "/src/assets/img/circle1.png",
    name: "Mahak",
    profile: " Babysitter-N...",
    madetype: "Patient-Elde...",
    live: "live-in",
    time: "Full-Day",
    address: " sion west, mumbai, 400022",
  },
  
];
function Registered() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Corrected key
    autoplaySpeed: 3000, // Optional: Set autoplay speed (default is 3000 ms)
  };
  return (
    <div className="py-3 bg-slate-100">
      <div className="text-center text-3xl font-bold py-4">
        <h3>Recently Registered Helpers</h3>
      </div>
      <div className=" flex flex-col ">
        <Slider {...settings}>
       
          {Register.map((item, index) => {
            return (
              <div key={index} className="w-full flex mx-5 ">
                <div className=" border  rounded-lg w-full p-2 bg-slate-100 ">
                  <div className="px-3 py-4 rounded-lg bg-slate-300 h-40 ">
                    <div>
                      <img
                        src={item.image}
                        height={"100px"}
                        width={"100px"}
                        className="rounded-full  border"
                        alt="images"
                      />
                    </div>
                    <div className="px-2 py-3 ">
                      <h4>{item.name} </h4>
                    </div>
                  </div>
                  <div class="rounded-md p-1 m-1">
                    <div class="flex flex-wrap py-2">
                      <div class="w-1/2">
                        <h2 class="text-xs border border-black m-1 p-1 rounded-md break-words">
                          {item.profile}
                        </h2>
                      </div>

                      <div class="w-1/2">
                        <h2 class="text-xs border border-black m-1 p-1 rounded-md break-words">
                          {item.madetype}
                        </h2>
                      </div>

                      <div class="w-1/2">
                        <h2 class="text-xs border border-black m-1 p-1 rounded-md break-words">
                          {item.time}
                        </h2>
                      </div>
                      <div class="w-1/2">
                        <h2 class="text-xs border border-black m-1 p-1 rounded-md break-words">
                          {item.live}
                        </h2>
                      </div>
                    </div>

                    <div class="border border-black m-1 p-1  rounded-md h-[43px]">
                      <p class="text-xs break-words capitalize">
                        {item.address}
                      </p>
                    </div>
                  </div>
                  <div className="text-red-500 text-center ">
                    <button> View Profile</button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Registered;
