import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";

import { useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  if (typeof window !== "undefined") {
    const changeBackground = () => {
      if (window.scrollY >= 500) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }

  return (
    <>
      <div
        className={`flex ${
          !navbar && "md:hidden"
        } justify-between px-2 py-2 fixed top-0 left-0 right-0 z-40 ${
          navbar && "bg-black/70 md:flex"
        }`}
      >
        <div className="h-8 w-8 bg-red-500"></div>
        <div className="flex items-center space-x-4">
          <div className="uppercase text-label-small text-white tracking-widest font-medium flex items-center justify-start">
            <h1>eng | idn</h1>
          </div>
          <div className="text-white">
            <FaBars className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="md:flex flex-col  items-center justify-center hidden">
        <div className="grid grid-cols-3 w-full border-b-2 border-black py-6">
          <div className="uppercase text-label-small tracking-widest font-medium flex items-center justify-start">
            <h1>eng | idn</h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-10 w-10 bg-red-500"></div>
          </div>
          <div className="flex justify-end items-center space-x-4">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            <FaYoutube />
            <FaWhatsapp />
          </div>
        </div>
        <div className="uppercase tracking-widest text-label-small flex justify-evenly items-center w-full max-w-screen-lg pt-4 pb-8">
          <div className="">About</div>
          <div className=" flex flex-col justify-center items-center divide-y-2 divide-black">
            <h1 className="py-1">Wedding</h1>
            <h1 className="py-1">Pre Wedding</h1>
          </div>
          <div className=" flex flex-col justify-center items-center divide-y-2 divide-black">
            <h1 className="py-1">Year Book</h1>
            <h1 className="py-1">Graduation</h1>
          </div>
          <div className=" flex flex-col justify-center items-center divide-y-2 divide-black">
            <h1 className="py-1">Baby</h1>
            <h1 className="py-1">Family</h1>
          </div>
          <div className=" flex flex-col justify-center items-center divide-y-2 divide-black">
            <h1 className="py-1">Brands</h1>
            <h1 className="py-1">Product</h1>
          </div>
          <div className=" flex flex-col justify-center items-center divide-y-2 divide-black">
            <h1 className="py-1">Company Profile</h1>
            <h1 className="py-1">Personal Branding</h1>
          </div>
          <div className=" flex flex-col justify-center items-center divide-y-2 divide-black">
            <h1 className="py-1">Events</h1>
            <h1 className="py-1">Outdor</h1>
          </div>
          <div className="">Contact</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
