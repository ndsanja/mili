import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const IndexGalery = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.1,
          duration: 1.5,
        },
      });
      rightAnimation.start({
        opacity: 1,
        x: 0,

        transition: {
          delay: 0.1,
          duration: 1.5,
        },
      });
    }
    if (!inView) {
      leftAnimation.start({
        opacity: 0,
        x: "-100vw",
      });
      rightAnimation.start({
        opacity: 0,
        x: "+100vw",
      });
    }
  }, [inView, leftAnimation, rightAnimation]);

  return (
    <>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4 mt-2 md:mt-4 px-2 md:px-0 overflow-x-hidden md:overflow-auto"
      >
        <motion.div
          animate={leftAnimation}
          className="bg-black w-full h-full relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.7 }}
            className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4"
          >
            <div className="text-gray-300 text-title-small lg:text-title-large text-center flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Project</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-medium lg:text-label-large text-gray-300 uppercase tracking-widest">
              View More
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          animate={rightAnimation}
          className="bg-black w-full h-full relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            alt="gambar"
            height={400}
            width={400}
            layout="responsive"
            className="object-center object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.7 }}
            className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4"
          >
            <div className="text-gray-300 text-title-small lg:text-title-large text-center flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-medium lg:text-label-large text-gray-300 uppercase">
              View More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default IndexGalery;
