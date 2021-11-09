import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const Nav = () => {
  return (
    <>
      <div className="flex-col lg:flex items-center justify-center hidden">
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
