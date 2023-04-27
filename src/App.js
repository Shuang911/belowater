import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Quiz1 from "./pages/Quiz1";
import Error404 from "./pages/Error404";
import Game from "./pages/Game/Game";
import Story from "./pages/Story/Story";
import Map from "./pages/Story/Map";
// import Facts from "./pages/Facts";
import Fishing from "./pages/Game/Fishing"
import Quiz2 from "./pages/Quiz2";
import Identification from "./pages/Identification";
import { useEffect } from "react";

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
      <Route path="/*" element={<Error404 />} />
      <Route path="/game" element={<Game />} />
      <Route path="/story" element={<Story />} />
      <Route path="/fishing" element={<Fishing />} />
      {/* <Route path="/facts" element={<Facts />} /> */}
      <Route path="/quiz2" element={<Quiz2 />} />
      <Route path="/identification" element={<Identification />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}
export default App;
