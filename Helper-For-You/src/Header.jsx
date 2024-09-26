import React from "react";

function Header() {
  return (
    <nav
      class="relative flex w-full flex-nowrap items-center justify-between bg-primary py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4  "
      data-twe-navbar-ref
    >
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <div class="mx-2">
          <a class="text-xl text-neutral-100" href="#">
            <img
              src="/src/assets/img/logo.png"
              alt="logo"
              height={"70px"}
              width={"150px"}
            />
          </a>
        </div>

        <button
          class="block border-0 bg-transparent px-2 text-neutral-300 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-blue lg:hidden"
          type="button"
          data-twe-collapse-init
          data-twe-target="#navbarSupportedContent9"
          aria-controls="navbarSupportedContent9"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </button>

        <div
          class="!visible mt-2    w-fit justify-end  flex;
        
        flex: inherit; "
          id="navbarSupportedContent9"
          data-twe-collapse-item
        >
          <ul
            class="list-style-none mx-auto flex flex-col ps-0 lg:mt-1 lg:flex-row gap-10 "
            data-twe-navbar-nav-ref
          >
            <li class="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2" data-twe-nav-item-ref>
              <a
                class=" transition duration-200  hover:ease-in-out font-bold text-lg  text-black  motion-reduce:transition-none lg:px-2"
                aria-current="page"
                href="#"
                data-twe-nav-link-ref
              >
                Home
              </a>
            </li>

            <li class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
              <a
                class=" transition duration-200  hover:ease-in-out font-bold text-lg  text-black  motion-reduce:transition-none lg:px-2"
                aria-current="page"
                href="#"
                data-twe-nav-link-ref
              >
                <select name="Hiring" id="Hiring">
                  <option value="volvo">Hiring</option>
                  <option value="saab">Premium Hring Servic</option>
                  <option value="mercedes">Basic Hring Servic</option>
                  <option value="audi">Tempopary Hring Servic</option>
                  <option value="audi">Hire For Elderly</option>
                </select>
              </a>
            </li>

            <li class="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0" data-twe-nav-item-ref>
              <a
                class=" transition duration-200  hover:ease-in-out font-bold text-lg  text-black  motion-reduce:transition-none lg:px-2"
                aria-current="page"
                href="#"
                data-twe-nav-link-ref
              >
                <select name="Hiring" id="Hiring-2">
                  <option value="volvo">Verification</option>
                  <option value="saab">Crimininal Verfication</option>
                  <option value="saab">Employement Verfication</option>
                </select>
              </a>
            </li>
            <li>
              {" "}
              <button className="bg-red-500 text-white font-bold px-4 py-2">
                {" "}
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
