import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="bg-black h-screen md:h-[23em] xl:h-[32em] w-full bg-mobile-hero md:bg-hero bg-cover bg-right-top md:bg-left-top md:bg-contain bg-no-repeat flex items-center justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
          }}
          className="flex flex-col items-center justify-center md:mr-12 xl:mr-36 space-y-6"
        >
          <div className="text-headline-large flex flex-col items-center  text-gray-300 font-olicy">
            <h1>Every Momment</h1>
            <h1>Is Everithing</h1>
          </div>
          <button className="py-2 px-4 border border-gray-300 text-gray-300 text-label-medium uppercase">
            Booking Now
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
