import "./index.css";
import { Link, useLocation } from "react-router-dom";

const menuData = [
  { to: "/", name: "Home" },
  { to: "/game", name: "Game" },
  { to: "/about", name: "About" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div className="header">
      <div className="logo">
        <img src={require("./images/Logo.png")} alt="" />
        Oceanledge
      </div>
      <div className="menu">
        {menuData.map((menu) => {
          return (
            <Link to={menu.to} className={{ active: location.pathname }}>
              {menu.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
