import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";

import { IoClose } from "react-icons/io5";

import { useState } from "react";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);
  const [toogle, setToogle] = useState(false);

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

  const buttonToogle = () => {
    setToogle(!toogle);
  };

  return (
    <>
      <div
        className={`flex ${
          !navbar && "md:hidden"
        } justify-between px-2 md:px-4 lg:px-8 py-2 fixed top-0 left-0 right-0 z-40 ${
          navbar && "bg-black/70 md:flex"
        }`}
      >
        <div className="h-8 w-8 bg-red-500"></div>
        <div className="flex items-center space-x-4">
          <div className="uppercase text-label-small text-white tracking-widest font-medium flex items-center justify-start">
            <h1>idn | eng</h1>
          </div>
          <div className="text-white">
            <FaBars onClick={buttonToogle} className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Disclosure */}
      {toogle && (
        <div className="fixed z-50 left-0 right-0 top-0 bottom-0 bg-black">
          <div>
            <div
              className={`flex justify-between px-2 md:px-4 lg:px-8 py-2 md:py-4 fixed top-0 left-0 right-0 z-40 `}
            >
              <div className="h-8 w-8 bg-red-500"></div>
              <div className="flex items-center space-x-4">
                <div className="uppercase text-label-small text-white tracking-widest font-medium flex items-center justify-start">
                  <h1>idn | eng</h1>
                </div>
                <div className="text-white">
                  <IoClose
                    onClick={buttonToogle}
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="h-screen w-screen flex flex-col  overflow-y-scroll">
              <div className="uppercase tracking-widest text-label-small flex flex-col items-center w-full h-full text-white space-y-4 mt-32 md:mt-44 mb-8">
                <div className="">About</div>
                <div className=" flex flex-col justify-center items-center divide-y-2 divide-white">
                  <h1 className="py-1">Wedding</h1>
                  <h1 className="py-1">Pre Wedding</h1>
                </div>
                <div className=" flex flex-col justify-center items-center divide-y-2 divide-white">
                  <h1 className="py-1">Year Book</h1>
                  <h1 className="py-1">Graduation</h1>
                </div>
                <div className=" flex flex-col justify-center items-center divide-y-2 divide-white">
                  <h1 className="py-1">Baby</h1>
                  <h1 className="py-1">Family</h1>
                </div>
                <div className=" flex flex-col justify-center items-center divide-y-2 divide-white">
                  <h1 className="py-1">Brands</h1>
                  <h1 className="py-1">Product</h1>
                </div>
                <div className=" flex flex-col justify-center items-center divide-y-2 divide-white">
                  <h1 className="py-1">Company Profile</h1>
                  <h1 className="py-1">Personal Branding</h1>
                </div>
                <div className=" flex flex-col justify-center items-center divide-y-2 divide-white">
                  <h1 className="py-1">Events</h1>
                  <h1 className="py-1">Outdor</h1>
                </div>
                <div className="">Contact</div>
                <div className="flex justify-end items-center space-x-4 text-white pt-8">
                  <FaInstagram className="h-5 w-5" />
                  <FaFacebook className="h-5 w-5" />
                  <FaTiktok className="h-5 w-5" />
                  <FaYoutube className="h-5 w-5" />
                  <FaWhatsapp className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Regular Nav */}
      <div className="md:flex flex-col  items-center justify-center hidden">
        <div className="grid grid-cols-3 w-full border-b-2 border-black py-6">
          <div className="uppercase text-label-small tracking-widest font-medium flex items-center justify-start">
            <h1>idn | eng</h1>
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
