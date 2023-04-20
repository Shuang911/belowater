import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Game from "../pages/Game";
import About from "../pages/About";
import Quiz from "../pages/Quiz";
import Puzzle from "../pages/Puzzle"
import ImageIdentification   from "../pages/Identification"

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/game",
    Component: Game,
  },
  // {
  //   path: "/about",
  //   Component: About,
  // },
  {
    path: "/quiz",
    Component: Quiz,
  },
  {
    path:"/puzzle",
    Component: Puzzle,
  },

  { 
    path: "/identification", 
    Component: ImageIdentification 
  },
  
]);

export default router;
