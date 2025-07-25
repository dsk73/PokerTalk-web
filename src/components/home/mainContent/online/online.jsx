import React from "react"
import Heading from "../../../common/heading/Heading"
import "./online.css"

const tournaments = [
  {
    id: 1,
    logo: "../images/online/online1.svg",
    time: "Started 28 min ago",
    buyIn: "$7.5",
    game: "Texas Hold'em",
    name: "The Fast 5 Last Chance Sat: $7.50 NLHE [Hyper-Turbo], 2 Seats Gtd",
    state: "Late Registration",
    maxPlayers: 1500,
    guarantee: "$110",
    link: "#",
  },
  {
    id: 2,
    logo: "../images/online/online1.svg",
    time: "Started 24 min ago",
    buyIn: "$11",
    game: "Texas Hold'em",
    name: "Wednesday Surprise Mega Sat: $11 NLHE, 5 Seats Gtd",
    state: "Late Registration",
    maxPlayers: 1500,
    guarantee: "$810",
    link: "#",
  },
  {
    id: 3,
    logo: "../images/online/online1.svg",
    time: "Started 15 min ago",
    buyIn: "$7.5",
    game: "Texas Hold'em",
    name: "Big $7.50, $3K Gtd",
    state: "Late Registration",
    maxPlayers: 15000,
    guarantee: "$3000",
    link: "#",
  },
  {
    id: 4,
    logo: "../images/online/online1.svg",
    time: "Started 15 min ago",
    buyIn: "$5",
    game: "Texas Hold'em",
    name: "€5 Bounty Builder 6-Max, €2,000 Gtd",
    state: "Late Registration",
    maxPlayers: 3137,
    guarantee: "€2000",
    link: "#",
  },
  {
    id: 5,
    logo: "../images/online/online1.svg",
    time: "Started 15 min ago",
    buyIn: "€2.2",
    game: "Texas Hold'em",
    name: "PokerStars Open Barcelona Main Event Sat: €2.20 NLHE [Hyper-Turbo, Deep], 3 Seats Gtd to €22 Sat",
    state: "Late Registration",
    maxPlayers: 2000,
    guarantee: "€66",
    link: "#",
  },
]

const Online = () => {
  return (
    <section className="onlineTournaments">
      <Heading title="Online Events" />
      <div className="tournament-table">
        <div className="tournament-header">
          <span>Brand</span>
          <span>Start Date/Time</span>
          <span>Buy-In</span>
          <span>Game Type</span>
          <span>Name</span>
          <span>State</span>
          <span>Max Players</span>
          <span>Guarantee</span>
          <span></span>
        </div>
        {tournaments.map((t) => (
          <div className="tournament-row" key={t.id}>
            <span><img src={t.logo} alt="brand" className="brand-logo" /></span>
            <span className="started">{t.time}</span>
            <span>{t.buyIn}</span>
            <span>{t.game}</span>
            <span>{t.name}</span>
            <span className="state">{t.state}</span>
            <span>{t.maxPlayers}</span>
            <span>{t.guarantee}</span>
            <span><a className="register-btn" href={t.link}>REGISTER</a></span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Online
