import React from "react";

const Details = [
  {
    image: "/src/assets/img/img.png",
    rating: "15000+",
    profile: "Satisfied Employers",
    employeAbout:
      "Get Multiple Helper options for Part Time or Live-in, Female or Male requirements",
  },
  {
    image: "/src/assets/img/img2.png",
    // rating: "15000+",
    profile: "Verified and Trained Helpers",
    employeAbout:
      "Aadhar Verified, Criminal Background Checked, Soft Skills Trained",
  },
  {
    image: "/src/assets/img/img3.png",
    // rating: "15000+",
    profile: "Replacement",
    employeAbout: "Get 6-month replacement when you hire from us",
  },
  {
    image: "/src/assets/img/img4.png",
    // rating: "15000+",
    profile: "Refund",
    employeAbout: "Claim a refund if you decide not to hire from us",
  },
];

function Why() {
  return (
    <div className=" text-center py-14  bg-slate-100 ">
      <h3 className=" text-3xl font-bold py-10 ">Why Choose Us </h3>

      <div className=" flex bg-slate-100">
        {Details.map((item, index) => {
          return (
            <div
              key={index}
              className="  w-full flex  border  rounded-lg text-white bg-sky-500 hover:bg-blue-500 cursor-pointer: py-3 mx-8 "
            >
              <div className=" ">
                <div className=" flex justify-center ">
                  <img src={item.image} className="h-auto w-auto" />
                </div>
                <h3 className="text-3xl text-center font-bold ">
                  {item.rating}{" "}
                </h3>
                <p className="text-center font-bold text-2xl py-2">
                  {item.profile}
                </p>
                <p className=" text-black text-center ">{item.employeAbout}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Why;
