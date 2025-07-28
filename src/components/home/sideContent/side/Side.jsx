import React from "react"
import "./side.css"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"

const Side = () => {
  return (
    <>
      {/* <div className="section-border"> */}
        <Tpost />
      {/* </div> */}

      <section className='gallery section-border'>
        <Heading title='Photos' />
        <img src='./images/gallery/g1.jpg' alt='Gallery' width={400} />
        {/* Enable below to use multiple images in slider */}
        {/* 
        <Slider {...settings}>
          {gallery.map((val) => (
            <div className='img' key={val.id}>
              <img src={val.cover} alt='' />
            </div>
          ))}
        </Slider> 
        */}
      </section>

      <section className='subscribe section-border'>
        <Heading title='Contribute' />
        <h1 className='title'>Want to Contribute to PokerTalk?</h1>
        <img src="../images/about.jpg" alt="Contribute" width={200} />
        <form action=''>
          <button>
            <i className='fa fa-paper-plane'></i> Login
          </button>
        </form>
      </section>

      <section className='hand-videos section-border'>
        <Heading title='Hand Videos' />
        <div className='hand-video-grid'>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIqZO7yvcT5/" target="_blank" rel="noopener noreferrer">
              <img src='./images/hands/hand3.jpg' alt='Hand Video 1' />
            </a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DInwhtNPp59/" target="_blank" rel="noopener noreferrer">
              <img src='./images/hands/hand2.jpg' alt='Hand Video 2' />
            </a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIlyZh6vuQu/" target="_blank" rel="noopener noreferrer">
              <img src='./images/hands/hand2.jpg' alt='Hand Video 3' />
            </a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIdXPe-PeJ6/" target="_blank" rel="noopener noreferrer">
              <img src='./images/hands/hand4.jpg' alt='Hand Video 4' />
            </a>
          </div>
        </div>
      </section>

      <section className='banner section-border'>
        <img src='./images/ad2.jpg' alt='Ad Banner' width={350} />
      </section>

      {/* Uncomment if you want a contact form */}
      {/* 
      <section className='contact-form section-border'>
        <Heading title='Contact Us' />
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>
      */}
    </>
  )
}

export default Side
