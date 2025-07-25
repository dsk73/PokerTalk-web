import React from 'react';
import Heading from "../../../common/heading/Heading"
import './forum.css';

const Forum = () => {
  return (
    <section className="forum">
      <Heading title="Let's Discuss" />
      <div className="forum-main-card">
        <h3>What's better to play - Cash Games or MTTs?</h3>
        <div className="forum-meta">
          <i className="fa fa-comment"></i> <span>24</span>
        </div>
      </div>

      <div className="forum-sub-cards">
        <div className="forum-small-card">
          <h4>I’ve just started playing Poker. Which site should I play on?</h4>
          <div className="forum-meta">
            <i className="fa fa-comment"></i> <span>12</span>
          </div>
        </div>
        <div className="forum-small-card">
          <h4>These new bans in Tamil Nadu — what do you think guys?</h4>
          <div className="forum-meta">
            <i className="fa fa-comment"></i> <span>8</span>
          </div>
        </div>
      </div>

      <div className="forum-sub-cards">
        <div className="forum-small-card">
          <h4>Could someone suggest live poker rooms in India?</h4>
          <div className="forum-meta">
            <i className="fa fa-comment"></i> <span>12</span>
          </div>
        </div>
        <div className="forum-small-card">
          <h4>Any good poker streamer that I can watch?</h4>
          <div className="forum-meta">
            <i className="fa fa-comment"></i> <span>8</span>
          </div>
        </div>
      </div>

      <button className="discuss-btn">Click to Discuss</button>
    </section>
  );
};

export default Forum;
