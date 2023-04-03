import { Link } from "react-router-dom";
import style from "./index.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <div className={style.team}>
          <img
            className={style.logo}
            src={require("./images/logo.png")}
            alt="logo"
          ></img>
          <div className={style.intro}>
            Our team is committed to enabling children and parents to grow
            happily through various types of science popularization and
            education.
          </div>
          <div className={style.contact}>
            <div>996icu@gmail.com</div>
            <button>send</button>
          </div>
        </div>
        <div className={style.navigation}>
          <div>Navigation</div>
          <Link to="/about">About</Link>
          <Link to="/faqs">FAQs</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/suppport">Parents Support</Link>
          <Link to="/contacts">contacts</Link>
        </div>
        <div className={style.list}>
          {Array(3)
            .fill(null)
            .map((i) => {
              return (
                <Link to="/" className={style.item} key={i}>
                  <img src="http://placeimg.com/640/480/city" alt="" />
                  <div className={style.itemContent}>
                    <div className={style.title}>title</div>
                    <div className={style.desc}>desc</div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <div className={style.copyrights}>
        Oceanledge © Kiyomi Team All rights reserved Copyrights 2023
      </div>
    </div>
  );
};

export default Footer;
