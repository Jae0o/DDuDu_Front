import { createBrowserRouter } from "react-router-dom";

import { ErrorPage, Layout, SignupPage, SplashPage } from "@/pages";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SplashPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
  },
]);

export default route;
