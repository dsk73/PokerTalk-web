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
import Forum from "../forum/Forum";
import "./style.css";

const Homes = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <div className="section-border"><Ppost /></div>
            <div className="section-border"><Music /></div>
            <div className="section-border"><Live /></div>
            <div className="section-border"><Online /></div>
            {/* <div className="section-border"><Popular /></div> */}
            <div className="section-border"><Life /></div>
            <div className="section-border"><Forum /></div>
            <div className="section-border"><About /></div>
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
