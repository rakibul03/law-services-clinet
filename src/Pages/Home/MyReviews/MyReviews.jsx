import React from "react";
// import { MdDeleteForever } from "@react-icons/all-files/fa/MdDeleteForever";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const MyReviews = () => {
  return (
    <div className="mx-auto min-h-screen w-[96%] p-2 text-gray-100  sm:p-8  lg:max-w-screen-xl">
      <h2 className="mb-4 text-center  text-3xl  font-bold leading-tight text-black">
        All Of Your Reviews
      </h2>
      <div className="flex flex-col overflow-x-auto text-xs">
        <div className="flex bg-gray-700 text-left">
          <div className="ml-6 flex w-8 items-center justify-center px-2 py-3 sm:p-3"></div>
          <div className="w-32 px-2 py-3 text-sm font-medium sm:p-3">
            Services
          </div>
          <div className="flex-1 px-2 py-3 text-sm font-medium sm:p-3">
            Feedback
          </div>
        </div>
        <div className="flex border-b border-gray-700 border-opacity-20 bg-gray-900">
          <div className="ml-4 mr-2 flex w-8 items-center justify-center space-x-1 px-2 py-2 sm:p-3">
            <button className="text-2xl text-red-500">
              <MdDeleteForever />
            </button>
            <button className="text-xl text-green-500">
              <FiEdit />
            </button>
          </div>
          <div className=" w-32 px-2 py-3 sm:p-3">
            <p className="text-sm font-medium">Tracy Kim</p>
          </div>
          <div className="block flex-1 truncate px-2 py-3 text-sm font-normal tracking-wider sm:w-auto sm:p-3">
            An cum minimum voluptua repudiandae, nec illum essent et. Id tibique
            voluptatum per, eos eu civibus mnesarchum intellegam. An mundi
            detracto usu, diceret deserunt lobortis te cum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
