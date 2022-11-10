import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import HomeFAQ from "./HomeFAQ";
import HomeServices from "./HomeServices/HomeServices";
import Newsletter from "./Newsletter";

const Home = () => {
  useTitle("Home");
  const services = useLoaderData();
  return (
    <>
      <Banner />
      <div className="mx-auto w-[96%] px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 ">
        <div className="grid grid-cols-2 pb-14 pt-8">
          <h1 className=" grid ">
            <span className="text-4xl font-bold tracking-wider">
              Services & Pricing
            </span>
            <span className="text-3xl font-semibold italic text-gray-500">
              Our Specialization
            </span>
          </h1>
          <p className="border-l-8 border-indigo-400 pl-10 text-xl italic text-gray-600">
            In 2012 we started providing our services under the Rakib trademark.
            A few years later we were among the leaders in the field of
            corporate consulting and corporate services.
          </p>
        </div>
        <div className="grid gap-10  sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
          {services.map((service) => (
            <HomeServices key={service._id} service={service} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link to="/services">
            <button className="my-2 h-12 rounded bg-deep-purple-accent-400 px-16 py-2 font-medium tracking-widest text-white shadow-lg transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
              See All
            </button>
          </Link>
        </div>
        <HomeFAQ />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
