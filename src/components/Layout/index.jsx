import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Header></Header>
      <div className="main">{props.children}</div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
