// import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <Register />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
