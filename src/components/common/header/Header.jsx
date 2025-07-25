import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">
                  {" "}
                  <img src="../images/logo.png" alt=" " height={30} />
                </Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/culture">News</Link>
              </li>
              <li>
                <Link to="/politics">Live Events</Link>
              </li>
              <li>
                <Link to="/memes">Online Events</Link>
              </li>
              <li>
                <Link to="/sports">Strategy</Link>
              </li>
              <li>
                <Link to="/boxed">Photos</Link>
              </li>
              <li>
                <Link to="/boxed">Forum</Link>
              </li>
              <li>
                <Link to="/reviews">About</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
