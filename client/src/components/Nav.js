import React from "react";
import { Link } from "react-router-dom";
//import { Login } from './Login'
import { useState, useEffect } from "react";
import NavBar from "./Nav-bar";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading.js";
//import { useAuth0 } from "@auth0/auth0-react";

export const Nav = () => {
  const [userOne, setUser] = useState(undefined);
  const { isLoading } = useAuth0();
  const { user } = useAuth0();

  const loadUser = () => {
    fetch("/api/me")
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log(response);
          return undefined;
        }
      })
      .then(() => {
        setUser(userOne);
        console.log('here');
      });
  };
//  if (isLoading) {
//    return <Loading />;
//  } 
  useEffect(() => {
    if (isLoading) {
      return <Loading />;
    } 
    loadUser();
  });

  return (
    <div className="navigation">
      <div className="logo">
        <a href="/">
          <img
            src="wander-logo.png"
            alt="wander logo"
            style={{ height: "70px" }}
          />
        </a>
      </div>
      <nav className="item">
        <ul className="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/park-list">Park List</Link>
          </li>
          {user && (
            <li className="hiddenList">
              <Link to="/my-list">My List</Link>
            </li>
          )}
          <li>
            <div>
              <Auth0Provider>
                <NavBar />
              </Auth0Provider>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
