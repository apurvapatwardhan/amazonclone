import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

// import { db, auth } from "./firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
    AIzaSyDbPNcP_FD3bzPtsTRPaeJOAynU767cnVE`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((resp) => {
        return resp.json();
      })
      .then((payload) => {
        console.log(payload);
        if (!payload.error) {
          dispatch({
            type: "LOGIN",
            user: email.slice(0, 4).padEnd(4, "u"),
            idToken: payload.idToken,
          });
          history.push("/");
        } else {
          alert(payload.error.message);
        }
      })
      .catch((err) => {
        history.push("/login");
        alert(err.message);
      });
  };

  const registerAccount = (e) => {
    e.preventDefault();
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
    AIzaSyDbPNcP_FD3bzPtsTRPaeJOAynU767cnVE`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((resp) => {
        setEmail("");
        setPassword("");
        return resp.json();
      })
      .then((payload) => {
        console.log(payload);
        if (!payload.error) {
          history.push("/");
        } else {
          alert(payload.error.message);
          throw new Error(payload.error.message);
        }
      })
      .catch((err) => {
        history.push("/login");
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://th.bing.com/th/id/OIP.XKbSTiy-Cl-UWP-qoP7rNgHaCO?w=330&h=105&c=7&r=0&o=5&pid=1.7"
          alt="am logo"
        />
      </Link>
      <div className="login__border">
        <div className="login__container">
          <h2>Sign In</h2>
          <form>
            <p>
              <strong>Email</strong>
            </p>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>
              <strong>Password</strong>
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={signIn}>
              Sign In
            </button>
          </form>
          <p>
            By signing in you agree to terms and conditions of amazon
            website.Please see our privacy policy once Notice our cookies and
            Notice our Interest Based Advance Notice
          </p>
          <button type="button" onClick={registerAccount}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
