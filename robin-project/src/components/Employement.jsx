import React from "react";
import "./Categories.css"

const EmploymentCheck = ({ headerTitle, subTitle, leftContent, rightheader,rightContent_p1, rightContent_p2,rightContent_p3, rightContent_p4, fees }) => {
    return (
        <>
          {/* Employment Check Banner */}
          <div className="bg-slate-400 text-center py-3 max-md:py-1">
                <h1 className="font-bold text-2xl">{headerTitle}</h1>
                <h2 className="text-xl max-md:text-sm">{subTitle}</h2>
            </div>

            {/* Employment Verification Card */}
            <div className="flex flex-wrap bg-orange-200">
                {/* Left Section */}
                <div className="lg:w-[40%] bg-slate-200 w-full">
                    <p className="md:text-[1.25rem] max-md:px-4 md:mx-10 text-[1rem] lg:text-[1rem] xl:text-[1.25rem] text-left md:mt-5 lg:mt-16">
                        {leftContent}
                    </p>
                </div>

                {/* Right Section */}
                <div className="lg:w-[60%] bg-slate-200 w-full">
                    <div className="flex flex-col md:items-center justify-center">
                        <p className="font-bold text-lg px-4 text-left lg:hidden">{rightheader}</p>
                        <p className="font-bold text-2xl text-center hidden lg:block">{rightheader}</p>

                        <ol className="md:text-[1.25rem] max-md:px-4 md:mx-10 md:my-[5%] text-[1rem] lg:text-[1.25rem] xl:text-[1.25rem] text-left md:mt-2  pl-5">
                            <li>{rightContent_p1}</li>
                            <li>{rightContent_p2}</li>
                            <li>{rightContent_p3}</li>
                            <li>{rightContent_p4}</li>
                        </ol>

                        <p className="md:text-[1.25rem] max-md:pt-5-mt-6 lg:mt-10 font-medium max-md:text-center">
                            <span className="font-bold text-[1.3rem]">Fees</span>: {fees}
                        </p>

                        <div className="text-center lg:text-left mt-1">
                            <button className="m-auto text-white bg-[#ff3008] border-0 py-2 px-5 focus:outline-none hover:bg-[#ff5737] rounded md:text-base text-[0.8rem]">
                                <a href="https://www.helper4u.in/verify-helpers/employmentVerifyForm" target="_blank" rel="noopener noreferrer">
                                    Verify Now
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmploymentCheck;