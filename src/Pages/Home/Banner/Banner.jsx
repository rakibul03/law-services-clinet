import React from "react";

const Banner = () => {
  return (
    <div className="mx-auto w-[96%] px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="relative h-screen w-full overflow-hidden rounded-lg shadow-2xl">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://i.ibb.co/DWjTC56/banner.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        <div className="relative flex h-full items-center justify-center">
          <h1 className="rounded-md border-4 border-gray-500 py-20 pl-28 pr-12 text-right text-5xl font-bold leading-[1.3] tracking-wide text-gray-400">
            Specialized in tax law
            <br /> and business law
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
