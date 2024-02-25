/** @fileoverview Archive to control the routes used in the application. */

import { createBrowserRouter } from "react-router-dom";
import DonationSection from "./pages/DonationSection";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/karate-landing-page/",
    element: <Home />,
  },
  {
    path: "/DonationSection",
    element: <DonationSection />,
  },
]);

export default router;
