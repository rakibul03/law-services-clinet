import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/UserContext";
import useTitle from "../../../hooks/useTitle";
import MyReviewsUI from "./MyReviewsUI";

const MyReviews = () => {
  useTitle("My Review");
  const { user, logOut } = useContext(AuthContext);
  const [allReview, setAllReview] = useState([]);

  useEffect(() => {
    fetch(`https://services-server.vercel.app/my-review?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setAllReview(data);
      });
  }, [user?.email, logOut]);

  // Delete review from my revieew section
  const handleDelete = (id) => {
    const agree = window.confirm("Are you sure, you want to cancel this order");
    if (agree) {
      fetch(`https://services-server.vercel.app/my-review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Deleted Successful");
            const remaining = allReview.filter((rview) => rview._id !== id);
            setAllReview(remaining);
          }
        });
    }
  };
  return (
    <>
      {allReview.length <= 0 ? (
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-2xl  font-bold uppercase tracking-widest drop-shadow-[4px_4px_4px_#000] sm:text-5xl">
            No reviews were added
          </p>
        </div>
      ) : (
        <div className="mx-auto min-h-screen w-[96%] p-2 text-gray-100  sm:p-8  lg:max-w-screen-xl">
          <h2 className="mb-4 text-center  text-3xl  font-bold leading-tight text-black">
            All Of Your Reviews
          </h2>
          <div className="flex flex-col overflow-x-auto text-xs"></div>
          <div className="flex bg-gray-700 text-left">
            <div className="ml-6 flex w-8 items-center justify-center px-2 py-3 sm:p-3"></div>
            <div className="w-32 px-2 py-3 text-sm font-medium sm:p-3">
              Services
            </div>
            <div className="flex-1 px-2 py-3 text-sm font-medium sm:p-3">
              Feedback
            </div>
          </div>

          {allReview.map((reviews) => (
            <MyReviewsUI
              key={reviews._id}
              reviews={reviews}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MyReviews;
