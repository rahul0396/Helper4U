
import React, { useState } from "react";
function App () {
  return (
    < >
      <div className=" grid grid-cols-2 bg-slate-100 w-fit px-10 py-5">
        <div className="px-20 py-16">
          <h1 className="text-4xl font-bold">Need a Verified Helper?</h1>
          <h1 className="text-4xl font-bold text-red-600">
            Explore our Options.
          </h1>
          <p className="text-3xl tracking-wide py-4 ">
            Because You Deserve a Stress-Free Life.
          </p>
        </div>

    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4">
      {/* Input Field */}
      <div className="relative w-full sm:w-auto">
        <input
          type="text"
          value={'pincode'}
          onChange
          placeholder="Enter your pincode"
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Optional clear button inside input field */}
        {"pincode" && (
          <button
            className="absolute right-3 top-2"
            onClick={() => setPincode("")}
          >
            <svg
              className="w-5 h-5 text-gray-500 hover:text-gray-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
      
        )}
</div>
      
      {/* Button */}
      <button
        onClick
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Show Helpers
      </button>
    
  



<div>
          <h2 className="text-2xl font-semibold py-2 ">
            Transforming Hiring, Empowering Lives
          </h2>
        </div>
        <div>
          <div>
            <img
              src="/src/assets/img/home.png"
              height={"200px"}
              width={"100%"}
              alt="home"
              className="rounded-2xl "
            />
          </div>
        </div>
        
    
      <div>
        <h2 className="text-3xl font-bold text-center">Customer Testimonials</h2>
      </div>
      </div>
      </div>
    </>
  );
}

export default App;
