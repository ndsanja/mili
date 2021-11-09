import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <div className="bg-black bg-blend-multiply bg-opacity-30 h-screen md:h-[23em] lg:h-[75vh] w-full bg-hero2 bg-cover bg-left-top  bg-no-repeat flex items-center justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.4,
          }}
          className="flex flex-col items-center justify-center md:mr-12 xl:mr-36 space-y-6"
        >
          <div className="text-headline-large flex flex-col items-center  text-gray-300 font-montserrat tracking-wide">
            <h1>Every Momment</h1>
            <h1>Is Everithing</h1>
          </div>
          <button className="py-2 px-4 border border-gray-300 text-gray-300 text-label-medium uppercase">
            milispace
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
