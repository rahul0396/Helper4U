import React from "react";
import "./Criminal.css"


const VerifywithHelper = () => {
return(
    <div className="bg-slate-100">
    <div className="py-8 text-center mx-[10%] sm:mx-[15%] md:mx-[20%]">
      <p className="text-lg py-5 lg:text-2xl">
        <span className="font-bold">Verification with Helper4U</span> is very simple and cost-effective. Now, you can verify anyone on the go. Because you, your family, and your staff deserve to stay safe.
      </p>
      <button className="text-white bg-[#ff3008] border-0 py-2 px-5 focus:outline-none hover:bg-[#ff5737] rounded md:text-base text-[0.9rem] -mt-6">
        <a href="https://www.helper4u.in/verify-helpers/criminalVerifyForm" target="_blank" rel="noopener noreferrer">
          Verify Now
        </a>
      </button>
    </div>
  </div>
)
}

export default VerifywithHelper;