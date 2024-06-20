import React from "react";
import "./index.css";
import App from "./App";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Components/Pages/about";
import Home from "./Components/Pages/home";
import Images from "./Components/Pages/images";
import News from "./Components/Pages/news";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Images",
        element: <Images />,
      },
      {
        path: "News",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
