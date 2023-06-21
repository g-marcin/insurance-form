import { createBrowserRouter } from "react-router-dom";
import { CoOwner } from "../pages/CoOwner";
import { Owner } from "../pages/Owner";
import { Summary } from "../pages/Summary";
import { Car } from "../pages/Car";
import App from "../App";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/owner",
        element: <Owner />,
      },
      {
        path: "/co-owner",
        element: <CoOwner />,
      },
      {
        path: "/car",
        element: <Car />,
      },
      {
        path: "/summary",
        element: <Summary />,
      },
    ],
  },
]);
