import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import Banner from "./components/BannerSwiper/Banner.jsx";
import AuthProvider from "./components/AuthProvider.jsx";
import LogIn from "./components/LogIn.jsx";
import Register from "./components/Register.jsx";
import { HelmetProvider } from "react-helmet-async";
import PrivateRoute from "./components/PrivateRoute.jsx";
import AddSpots from "./components/AddSpots.jsx";
import AllSpots from "./components/AllSpots.jsx";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import MySpots from "./components/MySpots.jsx";
import UpdateSpot from "./components/UpdateSpot.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AllSpotsByCountry from "./components/AllSpotsByCountry.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/",
      //   element: <AllSpots></AllSpots>,
      // },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addSpot",
        element: (
          <PrivateRoute>
            <AddSpots></AddSpots>
          </PrivateRoute>
        ),
      },
      {
        path: "/allSpots",
        element: <AllSpots></AllSpots>,
      },
      {
        path: "/mySpots",
        element: (
          <PrivateRoute>
            <MySpots></MySpots>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`https://spots4u-server.vercel.app/spots/${params.id}`),
        element: <UpdateSpot></UpdateSpot>,
      },
      {
        path: "/details/:id",
        loader: ({ params }) =>
          fetch(`https://spots4u-server.vercel.app/spots/${params.id}`),
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/:country",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/spots/search/${params.country}`),
        element: <AllSpotsByCountry></AllSpotsByCountry>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
