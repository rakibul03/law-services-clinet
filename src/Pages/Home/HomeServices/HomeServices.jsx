import React from "react";

const HomeServices = ({ service }) => {
  const { service_name, img, des, service_charge } = service;
  return (
    <div className="mb-6 overflow-hidden rounded bg-white p-6 shadow-[2px_1px_6px_5px_rgba(0,0,0,0.35)] transition-shadow duration-300">
      <a href="/" aria-label="Article">
        <img src={img} className="h-64 w-full rounded object-cover" alt="" />
      </a>
      <div className="py-5">
        <p className="mb-2 text-xs font-semibold uppercase text-gray-600">
          13 Jul 2020
        </p>
        <a
          href="/"
          aria-label="Article"
          className="mb-3 inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          <p className="text-2xl font-bold leading-5">{service_name}</p>
        </a>
        <p className="mb-4 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit sed quia
          consequuntur magni voluptatem doloremque.
        </p>
        <div className="flex space-x-4">
          <a
            href="/"
            aria-label="Likes"
            className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="6 23 1 23 1 12 6 12"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <path
                  d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold">7.4K</p>
          </a>
          <a
            href="/"
            aria-label="Comments"
            className="group flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            <div className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
              >
                <polyline
                  points="23 5 23 18 19 18 19 22 13 18 12 18"
                  fill="none"
                  strokeMiterlimit="10"
                />
                <polygon
                  points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
            <p className="font-semibold">81</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
