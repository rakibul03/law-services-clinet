import React from "react";
import { useLoaderData } from "react-router-dom";

const ReviewService = () => {
  const service = useLoaderData();
  const { _id, service_name, img, des, service_charge } = service;

  return (
    <div>
      <h1>This is review for {service_name}</h1>
    </div>
  );
};

export default ReviewService;
