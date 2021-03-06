import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const IndexWedding = () => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });
  const leftAnimation = useAnimation();
  const opacityAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1,
          duration: 1.5,
        },
      });
      opacityAnimation.start({
        opacity: 1,
        transition: {
          delay: 1.5,
          duration: 1.5,
        },
      });
    }
    if (!inView) {
      leftAnimation.start({
        opacity: 0,
        y: "+20vh",
      });
      opacityAnimation.start({
        opacity: 0,
      });
    }
  }, [inView, leftAnimation, opacityAnimation]);
  return (
    <>
      <div
        ref={ref}
        className="flex flex-col md:grid md:grid-cols-2 md:gap-4 mt-8 px-2 md:px-0"
      >
        <motion.div
          animate={leftAnimation}
          className="w-full h-full relative md:border-black md:border-b"
        >
          <div className="h-[100vw] md:h-full flex-col items-center justify-center flex space-y-14">
            <div className="text-gray-800 text-title-medium md:text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider space-y-4">
              <h1 className="font-olicy">The Wedding</h1>
              <p className="capitalize text-body-small font-normal text-center">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
            <button className="px-4 py-2 border border-gray-800 text-label-small md:text-label-large text-gray-800 uppercase tracking-widest">
              Special Offers
            </button>
          </div>
        </motion.div>
        <motion.div
          animate={opacityAnimation}
          className="bg-black w-full h-full relative"
        >
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
        </motion.div>
      </div>
    </>
  );
};

export default IndexWedding;
