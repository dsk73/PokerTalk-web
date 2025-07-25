import React from "react";
import "./about.css";
import Heading from "../../../common/heading/Heading";

const About = () => {
  return (
    <section className="about-section">
      <Heading title="About Us" />
      <div className="container">
        <div className="left">
          <p>
            Poker Talk India is your one-stop destination for breaking news, in-depth coverage, tournament updates, exclusive player interviews, strategic insights, and everything that fuels the world of poker in India and beyond. Whether you’re a seasoned pro, a curious beginner, or an industry insider, Poker Talk India brings you sharp, timely, and unbiased updates from the felt.
          </p>
          <p>
            From an editorial point of view, PokerTalk stands as a vibrant community hub where poker passion meets professional reporting. We are committed to elevating poker culture in India by connecting readers with the pulse of live events, expert strategies, opinion pieces, and inspiring journeys of poker personalities. With a focus on clarity and credibility, PokerTalk informs, empowers, and unites the poker-loving audience.
          </p>
        </div>
        <div className="right">
          <form className="contact-form">
            <h3>Contact Us</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default About;
