import React from "react";
import "./Register_Helpers.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RegisteredHelpers(){

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        accessibility: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1000,
        initialSlide: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="bg-slate-200 h-[500px]">
            <div className="mx-10 p-2 bg-slate-200">
                <h2 className="text-center text-2xl font-bold my-2 mt-1 -mb-4">Recently Registered Helpers</h2>
                <div className="w-full bg-slate-200 m-auto">
                    <div className="h-[300px] mt-10">
                        <Slider {...settings}>
                            {data.map((d) => (
                                <div className="bg-white h-[380px] text-black rounded-xl border-2 border-slate-300">
                                    <div className="m-1 pb-2 h-44 rounded-md bg-slate-300 ">
                                        <img src={d.img} alt="image" className="m-2 h-[5rem] p-1 w-[5rem] rounded-full object-cover" />
                                        <p className="text-xl font-semibold p-2.5 align-bottom mt-10">{d.name}</p>
                                    </div>

                                    <div className="rounded-md p-1 m-1">
                                        <div className="flex flex-wrap">
                                            <div className="w-1/2 qwerty">
                                                <h2 className="text-[0.6rem] border border-black m-1 pl-[0.25rem] p-2 rounded-md break-words">Driver
                                                    {/* <p className="p-1 mt-[0.1rem] rounded mx-1 text-[0.6rem] break-words bg-slate-300 max-w-[5rem] qwerty1">Driver</p> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="w-1/2 qwerty">
                                                <h2 className="text-[0.6rem] border border-black m-1 pl-[0.25 rem] p-2 rounded-md break-words">Day Time
                                                    {/* <p className="p-1 mt-[0.1 rem] rounded mx-1 text-[0.6rem] break-words bg-slate-300 max-w-[5rem] qwerty1">Day Time</p> */}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="m-1 p-1 rounded-md border border-black h-[43px]">
                                            <p className="text-[0.6rem] alferdo capitalize">Palam, Delhi,110045
                                                {/* <p className="p-1 mt-[0.1rem] rounded mx-1 text-[0.6rem] break-words alferdo1bg-slate-300 max-w-[10rem] capitalize">Palam, Delhi,110045</p> */}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="rounded-md text-center -mt-2">
                                        <div className="mb-1">
                                            <a className="text-[0.9rem] text-[#FF3008] hover:text-orange-400" href="">View Profile</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'Rajesh Bhandari',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/1a99f6821980ac99136dcd2f1e9c87409441d5719a93dcbe8e42187e3bca51d0.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Cole Palmer',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/2c9e8d44664b688e6304a07fb3d3639b.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Reece James',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/3d0236a18121ec86eff612e3b26bf7b9d49fcdd6c4b933009cd8647836295f09.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Mason Mount',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/5bf8aaef51c6e0d363cbe554acaf3f209a64b1bebd4e1d2ced3572d9664ff6ce.jpg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Marc Andre Ter Stegan',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/18a4e1366eb78af25ed5cfc306e8f8734e46057ad2e70a0a9dbc4c40471f855a.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Robert Lewandowski',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/c3c617a9b80b3ae1ebd868b0017cc3492760a90d798e6bf6ea1daa6af7d1525e.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Lamine Yamal',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/dd9723ecc8e1583b290e0e93f7fa1198315fcef40ac30d728b05b63155e44d0b.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Pedri',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/e6e9099e59636a015536fbb07f9792019c62455a9d26b979476f49d74f2645cd.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Gavi',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/e7a8f1d8b045098d76172897a21d6373.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Gavi',
        img: 'https://helper4u.in/web-img/api/images/jobseeker/fc4ddc15f9f4b4b06ef7844d6bb53abf58bc1d8158501088e497462472f11b44.jpeg',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }

]


export default RegisteredHelpers;