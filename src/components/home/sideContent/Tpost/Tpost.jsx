import React from "react"
import Heading from "../../../common/heading/Heading"
import "./tpost.css"

const pokerRooms = [
  {
    id: 1,
    name: "WPT Global",
    logo: "../images/tpost/tpost1.svg",
    bonus: "Massive first deposit bonus up to $3,580!",
    minDeposit: "$10",
    link: "https://wptglobal.com", // replace with actual
  },
  {
    id: 2,
    name: "PokerStars",
    logo: "../images/tpost/tpost2.svg",
    bonus: "100% First Deposit Bonus up to $600",
    minDeposit: "$20",
    link: "https://www.pokerstars.com",
  },
  {
    id: 3,
    name: "GGPoker",
    logo: "../images/tpost/tpost3.jpg",
    bonus: "Get $100 in Rewards OR a Matched Deposit up to $600",
    minDeposit: "$20",
    link: "https://www.ggpoker.com",
  },
  {
    id: 4,
    name: "Adda52",
    logo: "../images/tpost/tpost4.png",
    bonus: "Get ₹20,000 Welcome Bonus + Free Entry Tickets",
    minDeposit: "₹100",
    link: "https://www.adda52.com",
  },
  {
    id: 5,
    name: "CoinPoker",
    logo: "../images/tpost/tpost5.svg",
    bonus: "200% Bonus up to ₹10,000 + Free Tickets",
    minDeposit: "₹100",
    link: "https://coinpoker.com/",
  },
  {
    id: 6,
    name: "PokerBaazi",
    logo: "../images/tpost/tpost6.png",
    bonus: "200% Bonus up to ₹10,000 + Free Tickets",
    minDeposit: "₹100",
    link: "https://www.pokerbaazi.com/",
  },
  {
    id: 7,
    name: "Junglee Poker",
    logo: "../images/tpost/tpost7.jpg",
    bonus: "200% Bonus up to ₹10,000 + Free Tickets",
    minDeposit: "₹100",
    link: "https://www.jungleepoker.com/",
  },
  
]

const Tpost = () => {
  return (
    <section className="tpost">
      <Heading title="Top Poker Rooms" />
      {/* <p className="available">Available in 🇮🇳 India</p> */}
      {pokerRooms.map((room) => (
        <div className="box flexSB pokerRoom" key={room.id}>
          <div className="img">
            <img src={room.logo} alt={room.name} />
          </div>
          <div className="text">
            <h3>{room.name}</h3>
            <p>{room.bonus}</p>
            <div className="infoRow">
              <span className="minDeposit">Min. deposit: {room.minDeposit}</span>
              <a href={room.link} target="_blank" rel="noreferrer" className="playBtn">
                PLAY HERE
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Tpost
