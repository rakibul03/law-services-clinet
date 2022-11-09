import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../contexts/UserContext";
import law from "../../assets/law.svg";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // user logout
  const handleLogut = () => {
    logOut()
      .then(toast.warning("Log Out"))
      .catch((error) => toast(error));
  };
  return (
    <div className="sticky top-0 z-10 bg-[#f2f2f2] py-1 sm:shadow-lg">
      <div className="mx-auto w-[96%] px-4 py-2 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              aria-label="Bite Legal"
              title="Bite Legal"
              className="mr-8 inline-flex items-center"
            >
              <img className="h-8" src={law} alt="" />
              <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">
                Bite Legal
              </span>
            </Link>
            <ul className="hidden items-center space-x-8 lg:flex">
              <>
                <li>
                  <Link
                    to="/"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Services
                  </Link>
                </li>
              </>

              {user?.uid && (
                <>
                  <li>
                    <Link
                      to="/"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Add Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/my-review"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      My Reviews
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/blog"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Conditionally handle user login, logout nav */}
          <ul className=" hidden items-center space-x-6 lg:flex">
            {user?.uid ? (
              <>
                <li>
                  <Link
                    onClick={handleLogut}
                    className="h-12 items-center justify-center rounded bg-deep-purple-accent-400 px-6 py-2 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/signin"
                    aria-label="Sign in"
                    title="Sign in"
                    className="h-12 items-center justify-center rounded bg-deep-purple-accent-400 px-6 py-2 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="inline-flex h-12 items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>

          {/*  Mobile navbar */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="-mr-1 rounded p-2 transition duration-200 hover:bg-deep-purple-50 focus:bg-deep-purple-50 focus:shadow-outline focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="rounded border bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <Link
                        to="/"
                        aria-label="Bite Legal"
                        title="Bite Legal"
                        className="inline-flex items-center"
                      >
                        <img className="h-8" src={law} alt="" />
                        <span className="ml-2 text-xl font-bold uppercase tracking-wide text-gray-800">
                          Bite Legal
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="-mt-2 -mr-2 rounded p-2 transition duration-200 hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline focus:outline-none"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </Link>
                      </li>
                    </ul>

                    {/* Handle logout in mobile navbar with optional chaning */}
                    <ul className="mt-4 flex justify-center gap-6">
                      {user?.uid ? (
                        <>
                          <li>
                            <Link
                              onClick={handleLogut}
                              className="inline-flex h-12 w-full items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                              Logout
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              to="/signin"
                              className="inline-flex h-12 w-full items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign in"
                              title="Sign in"
                            >
                              Sign in
                            </Link>
                          </li>

                          <li>
                            <Link
                              to="/signup"
                              className="inline-flex h-12 w-full items-center justify-center rounded bg-deep-purple-accent-400 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Sign up"
                              title="Sign up"
                            >
                              Sign up
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
