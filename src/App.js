import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/game",
    Component: Game,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
