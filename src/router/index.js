import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";
import About from "../pages/About";
import Quiz from "../pages/Quiz"


const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/game",
    Component: Game,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path:"/quiz",
    Component: Quiz,
  }
]);

export default router;
