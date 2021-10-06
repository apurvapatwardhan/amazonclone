import React from "react";
import HeaderNav from "./HeaderNav";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__image">
        <Link to="/">
          <img
            src="https://th.bing.com/th/id/OIP.WbPie4u7yZ8Pht7AEY67HwHaEK?w=301&h=180&c=7&r=0&o=5&pid=1.7"
            alt="amazonimage"
            className="header__logo"
          />
        </Link>
      </div>
      <div className="header__search">
        <input type="text" className="header__search__input" />
        <span className="header__search__icon">
          <i class="fa fa-search white color"></i>
        </span>
      </div>
      <HeaderNav />
    </div>
  );
}

export default Header;
