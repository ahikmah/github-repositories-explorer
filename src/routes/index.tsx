import { Navigate, useRoutes } from "react-router-dom";

import { mainRoutes } from "./main";
import { errorRoutes } from "./error";

export const Router = () => {
  return useRoutes([
    ...mainRoutes,
    ...errorRoutes,

    // don't match any routes, redirect to 404
    {
      path: "*",
      element: <Navigate to="/404" replace={true} />,
    },
  ]);
};
