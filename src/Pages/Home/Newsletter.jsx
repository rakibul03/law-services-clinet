import React from "react";

const Newsletter = () => {
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="relative flex items-center justify-center">
        <div className="relative  flex w-full flex-col items-center justify-center rounded-md bg-gray-800 bg-opacity-80 py-10 px-4 md:my-16 md:mx-24 md:px-12 lg:py-16">
          <h1 className="text-center text-4xl font-semibold leading-9 text-white">
            Don't miss out!
          </h1>
          <p className="mt-6 text-center text-base leading-normal text-white">
            Subscribe to our newsletter to stay in the loop. Our newsletter is
            sent once in <br />a week on every friday so to get latest news and
            updates.
          </p>
          <div className=" mt-12 flex w-full flex-col items-center space-y-4 rounded-md border-white sm:flex-row sm:space-y-0 sm:border lg:w-5/12">
            <input
              className="w-full border border-white bg-transparent p-4 text-base font-medium leading-none text-white placeholder-white focus:outline-none sm:border-transparent"
              placeholder="Email Address"
            />
            <button className="w-full rounded-r-md border border-white bg-white py-4 px-6 hover:bg-opacity-75 focus:outline-none focus:ring focus:ring-offset-2 sm:w-auto sm:border-transparent">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
