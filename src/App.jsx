import React, { useState } from "react";
function App() {
  return (
    <>
      <div className=" grid grid-cols-2 bg-slate-100 w-fit px-10 py-4">
        <div className="px-20 py-16">
          <h1 className="text-4xl font-bold">
            Need a Verified Helper?
            <span className="text-4xl font-bold text-red-600">
              Explore our Options.
            </span>{" "}  
          </h1>
          <p className="text-3xl tracking-wide py-4 ">
            Because You Deserve a Stress-Free Life.
          </p>
          <div className="grid grid-cols-2 ">
            <div>
              <form action="#"> 
                <input
                  type="text"
                  placeholder="Enter Your Pincode"
                  className="py-2 px-6  border"
                />
              </form>
            </div>
            <div>
              <button className="px-5 py-2 rounded-md bg-red-500 font-semibold text-white ">
                Show Helpers
              </button>
            </div>
          </div>
          <h3 className="text-2xl font-semibold py-6 ">
            Transforming Hiring, Empowering Lives
          </h3>
        </div>
        <div>
          <div className="py-6 px-0">
            <img
              src="/src/assets/img/home.png"
              alt="home"
              height={"300px"}
              width={"100%"}
              className=" rounded-xl"
            />
          </div>
        </div>
        <div></div>
        
      </div>
    

    </>
  );
}

export default App;
