const Hero = () => {
  return (
    <>
      <div className="bg-black h-screen lg:h-[500px] w-full bg-hero bg-cover bg-left-top lg:bg-contain bg-no-repeat flex items-center justify-center lg:justify-end">
        <div className="flex flex-col items-center justify-center lg:mr-36 space-y-6">
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
    </>
  );
};

export default Hero;
