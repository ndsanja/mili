import { DiMagento } from "react-icons/di";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";

export const HomeAnimated = () => {
  return (
    <>
      <div className="w-full flex justify-between p-4 bg-transparent fixed top-0 left-0 right-0">
        <DiMagento className="h-8 w-8" />
        <HiMenu className="h-8 w-8" />
      </div>
      <div className="flex justify-center w-full relative ">
        <div className="mt-[18vh]">
          <h1 className="text-[35vw] font-olicy text-gray-200/40 font-extrabold tracking-widest">
            MILI
          </h1>
        </div>
        <div className="w-full flex justify-center z-10 absolute mt-[32vh]">
          <div className="relative">
            <div className="bg-circle-pattern bg-cover overflow-hidden motion-safe:animate-spin-slow w-48 h-48 rounded-full" />
            <div className="w-36 h-36 bg-red-500 rounded-full absolute top-[65%] left-[-25%]" />
            <div className="w-24 h-24 bg-black rounded-full absolute top-[50%] right-[-10%]" />
          </div>
          <div className="h-full w-full absolute top-[38vh] bottom-0 left-0 right-0 z-20">
            <Image
              layout="fill"
              src="/png-hero.png"
              alt="gambar"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};
