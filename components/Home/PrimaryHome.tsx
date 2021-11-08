import Image from "next/image";
import {
  FaTiktok,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const PrimaryHome = () => {
  return (
    <div className="h-full flex flex-col justify-center px-8 pb-14">
      <div className="flex-col flex items-center justify-center">
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
      <div className="bg-black h-[500px] w-full bg-hero bg-contain bg-no-repeat flex items-center justify-end">
        <div className="flex flex-col items-center justify-center mr-36 space-y-6">
          <div className="text-headline-large flex flex-col items-center  text-gray-300 font-olicy">
            <h1>The Momment</h1>
            <h1>Of Life</h1>
            <h1>Is Everithing</h1>
          </div>
          <button className="py-2 px-4 border border-gray-300 text-gray-300 text-label-medium uppercase">
            Booking Now
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40" />
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-title-large flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Project</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase tracking-widest">
              View More
            </button>
          </div>
        </div>
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40" />
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-title-large flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div>
        </div>
      </div>
      <div className="h-8 border-b border-black"></div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="w-full h-full relative border-black border-b">
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex-col items-center flex space-y-14">
            <div className="text-gray-800 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider space-y-4">
              <h1 className="font-olicy">The Wedding</h1>
              <p className="capitalize text-body-small font-normal text-center">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
            <button className="px-4 py-2 border border-gray-800 text-label-large text-gray-800 uppercase tracking-widest">
              Special Offers
            </button>
          </div>
        </div>
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1630198907883-dd7178d67b66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=535&q=80"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0" />
          {/* <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1581574208471-4944a12c317c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmd8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0" />
          {/* <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div> */}
        </div>
        <div className="w-full h-full relative border-black border-b">
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] flex-col items-center flex space-y-14">
            <div className="text-gray-800 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider space-y-4">
              <h1 className="font-olicy">The Pre wedding</h1>
              <p className="capitalize text-body-small font-normal text-center">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
            <button className="px-4 py-2 border border-gray-800 text-label-large text-gray-800 uppercase tracking-widest">
              Special Offers
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8">
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1579583764988-3e08c6132d2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0" />
          {/* <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div> */}
        </div>
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1633883504314-3fb2dccd937a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHdlZGRpbmd8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0" />
          {/* <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div> */}
        </div>
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1632266094547-c71688c69d02?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fHdlZGRpbmd8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0" />
          {/* <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div> */}
        </div>
        <div className="bg-black w-full h-full relative">
          <Image
            src="https://images.unsplash.com/flagged/photo-1567205862288-79cadffeed04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHdlZGRpbmd8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0" />
          {/* <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div> */}
        </div>
      </div>
      <div className="mt-4 border border-black py-2 w-full text-[0.5rem] tracking-widest uppercase flex justify-center items-center cursor-pointer">
        <h1>See More ...</h1>
      </div>
    </div>
  );
};

export default PrimaryHome;
