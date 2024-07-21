import { createBrowserRouter } from "react-router-dom";

import { ErrorPage, SplashPage } from "../../pages";

const route = createBrowserRouter([
  {
    path: "/",
    element: <SplashPage />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: null }],
  },
]);

export default route;
