import Image from "next/image";

const IndexWedding = () => {
  return (
    <>
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-4 mt-8 px-2 lg:px-0">
        <div className="w-full h-full relative lg:border-black lg:border-b">
          <div className="h-[100vw] lg:h-full flex-col items-center justify-center flex space-y-14">
            <div className="text-gray-800 text-title-medium lg:text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider space-y-4">
              <h1 className="font-olicy">The Wedding</h1>
              <p className="capitalize text-body-small font-normal text-center">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled
              </p>
            </div>
            <button className="px-4 py-2 border border-gray-800 text-label-small lg:text-label-large text-gray-800 uppercase tracking-widest">
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
    </>
  );
};

export default IndexWedding;
