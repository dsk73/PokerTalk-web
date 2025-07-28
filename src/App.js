// UPDATED FILE: App.js
import React, { useEffect, useState } from "react";
import Header from "./components/common/header/Header";
import "./App.css";
import Homepages from "./components/home/Homepages";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Culture from "./components/culture/Culture";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import SearchResults from "./components/search/SearchResults";

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Homepages />} />
          <Route path="/singlepage/:id" element={<SinglePage />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
