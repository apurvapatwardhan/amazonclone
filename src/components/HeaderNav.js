import React from "react";
import "./HeaderNav.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function HeaderNav() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  console.log(state.idToken);

  const logoutHandler = (e) => {
    console.log("logout handler");
    dispatch({
      type: "LOGOUT",
      user: "Sign In",
      idToken: null,
    });
    history.push("/login");
  };

  return (
    <div className="header__nav">
      <div className="header__options">
        <Link to="/login">
          <div className="header__options__line__one">
            <small>Hello</small>
          </div>
          <div className="header__options__line__two">
            <strong>{state.user}</strong>
          </div>
        </Link>
      </div>
      <div className="header__options">
        <div className="header__options__line__one">
          <small>Returns</small>
        </div>
        <div className="header__options__line__two">
          <strong>& Orders</strong>
        </div>
      </div>
      <div className="header__options">
        <div className="header__options__line__one">
          <small>Your</small>
        </div>
        <div className="header__options__line__two">
          <strong>Prime</strong>
        </div>
      </div>

      <div className="header__nav__bag">
        <Link to="/checkout">
          <i class="fa fa-shopping-cart white-color"></i>
        </Link>
      </div>
      <div className="header__nav__quantity">
        <Link to="/checkout" className="white-color">
          {state.basket.length}
        </Link>
      </div>

      {state.idToken ? (
        <div className="header__nav__logout">
          <button type="button" onClick={logoutHandler}>
            <strong>Sign out</strong>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default HeaderNav;
