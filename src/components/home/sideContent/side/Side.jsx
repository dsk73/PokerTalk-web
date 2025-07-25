import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <>
      <Tpost />

      <section className='banner'>
        {/* <Heading title='Ad Banner' /> */}
        <img src='./images/ad1.jpg' alt='' width={400} />
      </section>

      <section className='gallery'>
        <Heading title='Photos' />
        <img src='./images/gallery/g1.jpg' alt='' width={400} />
        {/* Uncomment for multiple images
        <Slider {...settings}>
          {gallery.map((val) => (
            <div className='img'>
              <img src={val.cover} alt='' />
            </div>
          ))}
        </Slider> */}
      </section>

      <Heading title='Contribute' />
      <section className='subscribe'>
        <h1 className='title'>Want to Contribute to PokerTalk?</h1>
        <form action=''>
          <button>
            <i className='fa fa-paper-plane'></i> Login
          </button>
        </form>
      </section>

      
      {/* Hand Videos Section */}
      <section className='hand-videos'>
        <Heading title='Hand Videos' />
        <div className='hand-video-grid'>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIqZO7yvcT5/"><img src='./images/hands/hand1.jpg' alt='Hand Video 1' /></a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DInwhtNPp59/"><img src='./images/hands/hand2.jpg' alt='Hand Video 1' /></a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIlyZh6vuQu/"><img src='./images/hands/hand3.jpg' alt='Hand Video 1' /></a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIdXPe-PeJ6/"><img src='./images/hands/hand4.jpg' alt='Hand Video 1' /></a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIqZO7yvcT5/"><img src='./images/hands/hand5.jpg' alt='Hand Video 1' /></a>
          </div>
          <div className='video-card'>
            <a href="https://www.instagram.com/reel/DIqZO7yvcT5/"><img src='./images/hands/hand6.jpg' alt='Hand Video 1' /></a>
          </div>
        </div>
      </section>

      <section className='banner'>
        {/* <Heading title='Ad Banner' /> */}
        <img src='./images/ad2.jpg' alt='' width={400} />
      </section>
      
    </>
  )
}

export default Side
