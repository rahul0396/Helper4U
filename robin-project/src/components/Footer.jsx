import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <footer className = "bg-gray dark:bg-gray-900">
    <div className ="mx-auto w-full max-w-screen-3xl">
      <div className = "grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div className='div1'>
            <h2  className = "mb-6 text-xl font-bold text-gray-900  dark:text-white">Hiring Services</h2>
            <ul className = "text-lg dark:text-gray-400 font-normal">
                <li className = "mb-4">
                    <a href="#" className =" hover:underline">Premium Hiring Services</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Basic Hiring Services</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Short-Term Hiring Services</a>
                </li>
                <li className="mb-4">
                    <a href="#" className = "hover:underline">Hire for Elderly</a>
                </li>
            </ul>
        </div>
        <div className='div1'>
            <h2 className = "mb-6 text-xl font-bold text-gray-900  dark:text-white">More Services</h2>
            <ul className = "text-lg dark:text-gray-400 font-normal">
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Verification Services</a>
                </li>
                <li className="mb-4">
                    <a href="#" className = "hover:underline">Hiring Guides</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Counselling Services</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Training for Helpers</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Jobs Available</a>
                </li>
            </ul>
        </div>
        <div className='div1'>
            <h2 className = "mb-6 text-xl font-bold text-gray-900 dark:text-white">About Us</h2>
            <ul className = "text-lg dark:text-gray-400 font-normal">
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Our Team</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Achievments</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Contact Us</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">FAQs</a>
                </li>
            </ul>
        </div>
        <div className='div1'>
            <h2 className = "mb-6 text-lg font-bold text-gray-900 dark:text-white">Our Policies</h2>
            <ul className = "text-lg dark:text-gray-400 font-normal">
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Salary Checker</a>
                </li>
                <li className="mb-4">
                    <a href="#" className = "hover:underline">Replacement & Refund</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Terms of Use</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Privacy Policy</a>
                </li>
                <li className = "mb-4">
                    <a href="#" className = "hover:underline">Terms & Conditions</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</footer>
  );
}

export default Footer;