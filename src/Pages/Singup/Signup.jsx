import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";

const Signup = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Sign up with email and password
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const password = event.target.password.value;
    const email = event.target.email.value;

    // Create user with email and password
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Registration Completed Please Signin");

        // Update user name
        updateUserProfile(name)
          .then()
          .catch((error) => {
            toast.error(error.message);
          });
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Sign up with Google
  const handlGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        toast.success(`SignUp Successful ${user.displayName}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <section className=" flex min-h-screen items-center justify-center">
      <div className="flex max-w-3xl items-center rounded-2xl bg-[#f2f2f2] p-5 shadow-lg">
        <div className="px-8 md:my-8 md:w-full md:px-16">
          <h2 className="text-2xl font-bold text-deep-purple-accent-400">
            Signup
          </h2>
          <p className="mt-3 text-xs text-[#002D74]">
            If you new to here, Please Signup
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="mt-8 rounded-xl border p-2"
              type="text"
              name="name"
              placeholder="Full Name"
              required
            />
            <input
              className="rounded-xl border p-2"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <div className="relative">
              <input
                className="w-full rounded-xl border p-2"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            </div>
            <button className="rounded-xl bg-deep-purple-accent-400 py-2 text-white hover:bg-deep-purple-accent-700">
              Signup
            </button>
          </form>

          <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-400" />
          </div>

          <button
            onClick={handlGoogleSignUp}
            className="mt-5 flex w-full items-center justify-center rounded-xl border bg-white py-2 text-sm text-[#002D74] duration-300 hover:scale-105"
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Signup with Google
          </button>

          <div className="mt-3 ml-3 flex items-center space-x-1 text-xs text-[#002D74]">
            <p>Already have an account?</p>
            <Link to="/signin">
              <button className="font-bold text-gray-900 ">Signin</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
