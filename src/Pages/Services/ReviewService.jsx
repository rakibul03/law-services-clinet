import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import UsersReviews from "./UsersReviews/UsersReviews";

const ReviewService = () => {
  const user = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, service_name, img, des, service_charge } = service;

  return (
    <div className="mx-auto p-5 dark:dark:bg-gray-400 dark:dark:text-gray-100 sm:p-10 md:p-16">
      <div className="mx-auto flex max-w-3xl flex-col overflow-hidden rounded">
        <img
          src={img}
          alt=""
          className="h-60 w-full dark:dark:bg-gray-500 sm:h-96"
        />
        <div className="m-4 mx-auto -mt-16 space-y-6 p-6 pb-12 dark:dark:bg-gray-800 sm:mx-12 sm:px-10 lg:max-w-2xl lg:rounded-md">
          <div className="space-y-2">
            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">
              {service_name}
            </h1>
            <p className="mt-5 pr-4 text-xl font-semibold">
              <span>Price: </span>
              <small className="text-gray-400">{service_charge}$</small>
            </p>
          </div>
          <div className=" dark:dark:text-gray-100">
            <p className="text-xl font-light leading-relaxed ">{des}</p>
          </div>
        </div>
      </div>
      <UsersReviews id={_id} service_name={service_name} />
    </div>
  );
};

export default ReviewService;
