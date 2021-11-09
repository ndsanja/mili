const Hero = () => {
  return (
    <>
      <div className="bg-black h-screen md:h-[23em] xl:h-[32em] w-full bg-mobile-hero md:bg-hero bg-cover bg-right-top md:bg-left-top md:bg-contain bg-no-repeat flex items-center justify-center md:justify-end">
        <div className="flex flex-col items-center justify-center md:mr-12 xl:mr-36 space-y-6">
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
