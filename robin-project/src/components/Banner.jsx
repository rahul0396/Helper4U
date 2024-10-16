import React from "react";
import './Banner.css'

 export const cardData = [
  {
    id: 1,
    iconSrc: 'https://helper4u.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomer-review_8522191.f150ef4d.png&w=96&q=75',
    altText: 'Satisfied Employers',
    title: '15000+ Satisfied Employers',
    description:
      'Get Multiple Helper options for Part Time or Live-in, Female or Male requirements',
  },
  {
    id: 2,
    iconSrc: 'https://helper4u.in/_next/image?url=%2FverifiedHelpers.jpeg&w=48&q=75',
    altText: 'Verified and Trained Helpers',
    title: 'Verified and Trained Helpers',
    description:
      'Aadhar Verified, Criminal Background Checked, Soft Skills Trained',
  },
  {
    id: 3,
    iconSrc: 'https://helper4u.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmanagement.6270420a.png&w=96&q=75',
    altText: 'Replacement',
    title: 'Replacement',
    description: 'Get 6-month replacement when you hire from us',
  },
  {
    id: 4,
    iconSrc: 'https://helper4u.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayment-method.02686eb5.png&w=96&q=75',
    altText: 'Refund',
    title: 'Refund',
    description: 'Claim a refund if you decide not to hire from us',
  },
];

export const Banner = () => {
  return (
    <section className="bg-slate-100 w-full py-14">
      <h2 className="font-bold text-2xl mb-5 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 w-64 h-72 gap-4">
        {cardData.map((card) => (
          <div className="bg-[#3AB0FF] text-white p-5 rounded-2xl text-center transition-transform duration-300 ease-in mt-5" key={card.id}>
            <div className="mb-5 justify-center items-center">
              <img src={card.iconSrc} alt={card.altText} className="w-12 h-12 inline-flex justify-center items-center"/>
            </div>
            <h3 className="text-2xl mb-3.5 font-bold">{card.title}</h3>
            <p className="text-base text-[#1F2937]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
