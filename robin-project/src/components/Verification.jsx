import React from "react";
import "./Categories.css"

const Verification = () => {
    return (
        <>
        <div className="bg-slate-100">
          <p className="text-center text-2xl font-bold py-8 -mt-4">Why use Our verification Services?</p>
          <div className="flex flex-wrap mx-[20%] sm:mx-[8%] pb-5 -mt-6">
            
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <p className="p-8 border border-slate-200 rounded shadow-xl m-3 xl:text-lg transition-transform duration-300 ease-in-out hover:scale-110 text-center">
                Pan India
              </p>
            </div>
    
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <p className="p-8 border border-slate-200 rounded shadow-xl m-3 xl:text-lg transition-transform duration-300 ease-in-out hover:scale-110 text-center">
                Cost-effective
              </p>
            </div>
    
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <p className="p-8 border border-slate-200 rounded shadow-xl m-3 xl:text-lg transition-transform duration-300 ease-in-out hover:scale-110 text-center">
                Online Service
              </p>
            </div>
    
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <p className="p-8 border border-slate-200 rounded shadow-xl m-3 xl:text-lg transition-transform duration-300 ease-in-out hover:scale-110 text-center">
                Ensure Safety
              </p>
            </div>
    
          </div>
        </div>
        </>
      );
    };

export default Verification;