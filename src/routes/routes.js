import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import MyReviews from "../Pages/Home/MyReviews/MyReviews";
import ReviewService from "../Pages/Services/ReviewService";
import Services from "../Pages/Services/Services";
import Signin from "../Pages/Signin/Signin";
import Signup from "../Pages/Singup/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://services-server.vercel.app/"),
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("https://services-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ReviewService />,
        loader: ({ params }) =>
          fetch(`https://services-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/my-review",
        element: <MyReviews />,
      },
    ],
  },
]);
