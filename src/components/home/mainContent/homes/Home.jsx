import React from "react";
import Discover from "../../discover/Discover";
import Side from "../../sideContent/side/Side";
import Life from "../life/Life";
import Music from "../musics/Music";
import Popular from "../popular/Popular";
import Ppost from "../Ppost/Ppost";
import Online from "../online/online";
import Live from "../live/Live";
import About from "../about/About";
import "./style.css";
import Forum from "../forum/Forum";


const Homes = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Ppost />
            <Music />
            <Live />
            <Online />
            <Popular />
            <Life /><Forum />
            <About />            

          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;

