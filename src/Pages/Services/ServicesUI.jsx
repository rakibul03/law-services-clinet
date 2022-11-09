import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServicesUI = ({ service }) => {
  const { _id, service_name, img, des, service_charge } = service;

  return (
    <div className="mb-6 overflow-hidden rounded bg-white p-6 shadow-[2px_1px_6px_5px_rgba(0,0,0,0.35)] transition-shadow duration-300">
      <PhotoProvider>
        <PhotoView src={img}>
          <img
            src={img}
            className="h-64 w-full cursor-pointer rounded object-cover"
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
          13 Jul 2020
        </p>
        <h1 className="mb-3 inline-block text-black ">
          <span className="text-2xl font-bold leading-5">{service_name}</span>
        </h1>
        <h2 className="mb-4 text-gray-700">
          {des.length > 100 ? <p>{des.slice(0, 100) + "..."}</p> : <p>{des}</p>}
        </h2>
        <div className="flex justify-between space-x-4">
          <Link to={`/services/${_id}`}>
            <button className="mt-4 h-10 items-center justify-center rounded bg-deep-purple-accent-400 px-6 py-2 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
              View Details
            </button>
          </Link>
          <p className="mt-5 pr-4 text-xl font-semibold">
            <span>Price: </span>
            <small className="text-gray-600">{service_charge}$</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesUI;
