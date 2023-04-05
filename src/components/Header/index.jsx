import style from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import classnames from 'classnames'

const menuData = [
  { to: "/", name: "Home" },
  { to: "/game", name: "Ocean Helper Game" },
    { to: "/quiz", name: "Ocean Friends Quiz" },
  { to: "/about", name: "About" },
];

const Header = () => {
  const location = useLocation();

  return (
    <div className={style.header}>
      <div className= {style.logo}>
        <img src={require("./images/Logo.png")} alt="" />
        Oceanledge
      </div>
      <div className={style.menu}>
        {menuData.map((menu, index) => {
          return (
            <Link key={index} to={menu.to} className={classnames({active: location.pathname === menu.to})}>
              {menu.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
