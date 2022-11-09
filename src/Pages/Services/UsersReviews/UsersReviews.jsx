import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/UserContext";
import AllUsersReviews from "./AllUsersReviews";

const UsersReviews = ({ id }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleReview = (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const review = {
      service_id: id,
      name: user?.displayName,
      email: user?.email,
      img: user?.photoURL,
      dateAndTime: new Date().getTime(),
      review: message,
    };

    // Hitting API endpoint for creating reviews collections
    fetch("https://services-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Thank you for giving feedback.");
        }
      });
    e.target.reset();
  };

  useEffect(() => {
    fetch(`https://services-server.vercel.app/reviews?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setRefresh(!refresh);
      });
  }, [id, refresh]);

  return (
    <>
      {reviews.map((singleReview) => (
        <AllUsersReviews key={singleReview._id} singleReview={singleReview} />
      ))}
      {user?.uid ? (
        <div className="container mx-auto mt-12 flex w-full max-w-lg flex-col divide-y divide-gray-700 rounded-md p-6 dark:dark:bg-gray-800 dark:dark:text-gray-100">
          <div className=" flex w-full flex-col items-center">
            <h2 className="text-center text-3xl font-semibold">
              Your opinion matters!
            </h2>
            <div className="flex flex-col items-center space-y-3 py-6">
              <span className="text-center">How was your experience?</span>
            </div>
            <form onSubmit={handleReview} className="flex w-full flex-col">
              <input
                rows="3"
                name="message"
                placeholder="Write your reviews here..."
                className="h-24 resize-none rounded-md p-4 dark:dark:bg-gray-900 dark:dark:text-gray-100"
              ></input>
              <button
                type="submit"
                className="my-8 rounded-md py-4 font-semibold dark:dark:bg-violet-400 dark:dark:text-gray-900"
              >
                Leave feedback
              </button>
            </form>
          </div>
        </div>
      ) : (
        <p className="mt-14 text-center text-4xl font-bold tracking-wider text-black">
          Please{" "}
          <Link
            className="text-blue-900 underline"
            to="/signin"
            state={{ from: location }}
            replace
          >
            Login
          </Link>{" "}
          To Add Review.
        </p>
      )}
    </>
  );
};

export default UsersReviews;
