import { useState } from "react";


export const WhatsApp = () => {
    return (
      <div className="fixed left-0 bottom-0 text-white z-10">
        <a
          id="whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/917347628536?text=Hola"
        >
          <nav id="floatingwhatsapp" className="floating-fab-what small-screen">
            <span>
              <img
                className="h-[4rem] w-[4rem]"
                src="https://helper4u.in/whatsapp3.svg"
                alt="WhatsApp Icon"
              />
            </span>
          </nav>
        </a>
      </div>
    );
  };