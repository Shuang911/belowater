import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz/Quiz";
import Error404 from "./pages/Error404";
import Game from "./pages/Game/Game";
import Story from "./pages/Story/Story";
import Map from "./pages/Story/Map";
// import Facts from "./pages/Facts";
import Fishing from "./pages/Game/Fishing";
import Quiz1 from "./pages/Quiz/Ques/Quiz1copy";
import Puzzle from "./pages/Quiz/Ques/Puzzle";
import Quiz3 from "./pages/Quiz/Ques/Quiz3";
import Identification from "./pages/Identification";
import { useEffect } from "react";
import Gallery from "./pages/Gallery/Gallery"
import Plastic from "./pages/Facts/Plastic";
import Mining from "./pages/Facts/Mining";
import Climate from "./pages/Facts/Climate";
import Overfish from "./pages/Facts/Overfish";


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/quiz1":
        title = "";
        metaDescription = "";
        break;
      case "/error404":
        title = "";
        metaDescription = "";
        break;
      case "/game":
        title = "";
        metaDescription = "";
        break;
      case "/story":
        title = "";
        metaDescription = "";
        break;
      case "/facts":
        title = "";
        metaDescription = "";
        break;
      case "/quiz2":
        title = "";
        metaDescription = "";
        break;
      case "/identification":
        title = "";
        metaDescription = "";
        break;
      case "/fishing":
        title = "";
        metaDescription = "";
        break;

        case "/gallery":
          title = "";
          metaDescription = "";
          break;
         case "/plastic":
          title = "";
          metaDescription = "";
          break;
          case "/mining":
          title = "";
          metaDescription = "";
          break;
          case "/climate":
          title = "";
          metaDescription = "";
          break;
          case "/overfish":
          title = "";
          metaDescription = "";
          break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quiz1" element={<Quiz1 />} />
      <Route path="/quiz" element={<Quiz />} />

      <Route path="/*" element={<Error404 />} />
      <Route path="/game" element={<Game />} />
      <Route path="/story" element={<Story />} />
      <Route path="/fishing" element={<Fishing />} />
      {/* <Route path="/facts" element={<Facts />} /> */}
      <Route path="/quiz2" element={<Quiz1 />} />
      <Route path="/quiz3" element={<Quiz3 />} />
      <Route path="/puzzle" element={<Puzzle />} />
      <Route path="/identification" element={<Identification />} />
      <Route path="/map" element={<Map />} />

      <Route path="/gallery" element={<Gallery />} />
      <Route path="/plastic" element={<Plastic />} />
      <Route path="/mining" element={<Mining />} />
      <Route path="/climate" element={<Climate />} />
      <Route path="/overfish" element={<Overfish />} />
    </Routes>
  );
}
export default App;
