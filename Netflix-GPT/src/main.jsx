import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Browse from "./pages/Browse.jsx";
import appStore from "./utils/appStore.js";
import Header from "./components/Header.jsx";
import Loading from "./pages/Loading.jsx";
import ResultPage from "./pages/ResultPage.jsx";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/browser",
        element: <Browse />,
      },
      {
        path: "/result",
        element: <ResultPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
