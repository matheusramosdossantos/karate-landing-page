/** @fileoverview Archive to control the routes used in the application. */

import { createBrowserRouter } from "react-router-dom";
import DonationSection from "./pages/DonationSection";
import Home from "./pages/Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/karate-landing-page",
    element: <App />,
    children: [
      {
        path: "/karate-landing-page",
        element: <Home />,
      },
      {
        path: "/karate-landing-page/DonationSection",
        element: <DonationSection />,
      },
    ],
  },
]);

export default router;
