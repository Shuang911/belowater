import "./index.css";
import { Link, useLocation } from "react-router-dom";
import classnames from 'classnames'

const menuData = [
  { to: "/", name: "Home" },
  { to: "/game", name: "Ocean Helper" },
    { to: "/quiz", name: "Ocean Friends" },
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
            <Link to={menu.to} className={classnames({active: location.pathname === menu.to})}>
              {menu.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
