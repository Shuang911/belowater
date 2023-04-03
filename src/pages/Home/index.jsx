import Layout from "../../components/Layout";
import Ad from "./components/Ad";
import "./index.css";
import utilsStyle from "../../styles/utils.module.css";

const Home = () => {
  return (
    <Layout>
      <div className={utilsStyle.w}>
        <Ad></Ad>
      </div>
    </Layout>
  );
};

export default Home;
