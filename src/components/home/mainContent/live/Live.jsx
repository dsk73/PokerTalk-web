import React from "react"
import "./live.css"
import Heading from "../../../common/heading/Heading"

const liveEvents = [
  {
    logo: "/images/live/live1.jpg",
    name: "APPT Manila",
    location: "Manila, Philippines",
    date: "23 July - 4 Aug 2025",
    link: "https://www.pokerstarslive.com/appt/",
  },
  {
    logo: "/images/live/live2.jpg",
    name: "WPT Prime Thailand",
    location: "Bangkok, Thailand",
    date: "30 July - 6 Aug 2025",
    link: "https://indiapokerfest.com/",
    
  },
  {
    logo: "/images/live/live3.jpg",
    name: "APT Incheon",
    location: "Incheon, South Korea",
    date: "1 Aug - 10 Aug 2025",
    link: "https://www.wsop.com/tournaments/",
  },
  {
    logo: "/images/live/live4.jpg",
    name: "WPT Prime Taiwan",
    location: "Taipei, Taiwan",
    date: "6 Aug - 18 Aug 2025",
    link: "https://www.worldpokertour.com/event/wpt-india-2025/",
  },
  {logo: "/images/live/live5.jpg",
    name: "Poker Dream 18 Malaysia",
    location: "Genting Highlands, Malaysia",
    date: "9 Aug - 18 Aug 2025",
    link: "https://www.pokerstarslive.com/appt/",
  },
  {
    logo: "/images/live/live6.jpg",
    name: "The PartyPoker Tour",
    location: "Glasgow, Scotland",
    date: "12 Aug - 17 Aug 2025",
    link: "https://indiapokerfest.com/",
    
  },
  // {
  //   logo: "/images/live/live7.jpg",
  //   name: "WPT Cyprus Championship",
  //   location: "Cyprus",
  //   date: "13 Aug - 18 Aug 2025",
  //   link: "https://www.wsop.com/tournaments/",
  // },
  {
    logo: "/images/live/live8.jpg",
    name: "EPT Barcelona",
    location: "Barcelona, Spain",
    date: "18 Aug - 31 Aug 2025",
    link: "https://www.worldpokertour.com/event/wpt-india-2025/",
  },
  
  
  

]

const Live = () => {
  return (
    <section className='liveEvents'>
      <Heading title="Live Events" />
      <p className="subtitle">Upcoming live poker tournaments</p>

      <div className='horizontal-scroll'>
        {liveEvents.map((event, index) => (
          <div className='event-card' key={index}>
            <div className='logo'>
              <img src={event.logo} alt={event.name} />
            </div>
            <div className='info'>
              <h3>{event.name}</h3>
              <p>{event.location}</p>
              <p>{event.date}</p>
              <a href={event.link} target='_blank' rel='noreferrer'>
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Live
