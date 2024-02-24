/**
 *@fileoverview App archive of the application with the router provider ensuring the route between the Home and the DonationSection. */

/** React Router imports*/
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
