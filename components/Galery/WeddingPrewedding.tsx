import Image from "next/image";

const WeddingPreweddingGalery = () => {
  return (
    <>
      <div className="mt-8 mx-2 md:mx-0">
        <div className="flex space-x-4 md:space-x-0 overflow-x-scroll md:grid grid-cols-4 md:gap-4 ">
          <div className="bg-black min-w-[75vw] md:min-w-0 md:w-full h-full relative">
            <Image
              src="https://images.unsplash.com/photo-1579583764988-3e08c6132d2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VkZGluZ3xlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="gambar"
              height={400}
              width={400}
              layout="responsive"
              className="object-center object-cover"
            />
            {/* <div className="absolute top-0 bottom-0 left-0 right-0" />
          <div className="absolute left-[50%] translate-x-[-50%] top-[50%] flex-col items-center flex space-y-4">
            <div className="text-gray-300 text-headline-small flex flex-col items-center font-semibold uppercase tracking-wider">
              <h1>Browse Our Latest</h1>
              <h1> Art Work</h1>
            </div>
            <button className="px-4 py-2 border border-gray-300 text-label-large text-gray-300 uppercase">
              View More
            </button>
          </div> */}
          </div>

          <div className="bg-black min-w-[75vw] md:min-w-0 md:w-full h-full relative">
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
          <div className="bg-black min-w-[75vw] md:min-w-0 md:w-full h-full relative">
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
          <div className="bg-black min-w-[75vw] md:min-w-0 md:w-full h-full relative">
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
    </>
  );
};

export default WeddingPreweddingGalery;
