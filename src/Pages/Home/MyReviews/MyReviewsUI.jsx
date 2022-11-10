import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

const MyReviewsUI = ({ reviews, handleDelete }) => {
  const { _id, service_name, review } = reviews;

  return (
    <>
      <div className="flex border-b border-gray-700 border-opacity-20 bg-gray-900">
        <div className="ml-4 mr-2 flex w-8 items-center justify-center space-x-1 px-2 py-2 sm:p-3">
          <button
            onClick={() => handleDelete(_id)}
            className="text-2xl text-red-500"
          >
            <MdDeleteForever />
          </button>

          <button className="text-xl text-green-500">
            <FiEdit />
          </button>
        </div>
        <div className=" w-32 px-2 py-3 sm:p-3">
          <p className="text-sm font-medium">{service_name}</p>
        </div>
        <div className="block flex-1 truncate px-2 py-3 text-sm font-normal tracking-wider sm:w-auto sm:p-3">
          {review}
        </div>
      </div>
    </>
  );
};

export default MyReviewsUI;
