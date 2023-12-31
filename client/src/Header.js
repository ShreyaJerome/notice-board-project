import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo("");
  }

  const username = userInfo?.username;

  return (
    <header>
      <div className="corner">
        <img
          className="college_logo"
          src="https://upload.wikimedia.org/wikipedia/en/1/13/Sathyabama_Institute_of_Science_and_Technology_logo.png"
        ></img>
        <Link to="/" className="logo">
          Notice Board
        </Link>
      </div>
      <nav>
        {username && (
          <>
            <Link to="/create">Create</Link>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
