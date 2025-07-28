import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { useNavigate, Link } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const [navbar, setNavbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav className="flexSB">
            <ul
              className={navbar ? "navbar" : "flex nav-left"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">
                  <img
                    src={
                      theme === "dark"
                        ? "/images/logo-dark.png"
                        : "/images/logo-light.png"
                    }
                    alt="Logo"
                    height={50}
                  />
                </Link>
              </li>
              
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/News">News</Link>
              </li>
              <li>
                <Link to="/Live-Events">Live Events</Link>
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

            <div className="nav-right">
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
              <Link to="/login">
                <i className="fa fa-user nav-icon"></i>
              </Link>
              <button className="theme-toggle nav-icon" onClick={toggleTheme}>
                <i
                  className={`fa ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
                ></i>
              </button>
              <button className="barIcon" onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <i className="fa fa-times"></i>
                ) : (
                  <i className="fa fa-bars"></i>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
