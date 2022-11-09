import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import Spinner from "../Spinner/Spinner";
import ServicesUI from "./ServicesUI";

const Services = () => {
  const services = useLoaderData();
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="mx-auto mt-8 w-[96%] px-4 py-5 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 ">
      <div className="grid gap-10  sm:mx-auto sm:max-w-sm lg:max-w-full lg:grid-cols-3">
        {services.map((service) => (
          <ServicesUI key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
