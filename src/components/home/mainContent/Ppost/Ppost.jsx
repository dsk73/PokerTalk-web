import React from "react"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import "./ppost.css"

const pokerStories = [
  {
    id: 1,
    cover: "../images/story1.jpg",
    link: "https://www.instagram.com/p/DMQeszxRaJs/",
  },
  {
    id: 2,
    cover: "../images/story2.jpg",
    link: "https://www.instagram.com/p/DMTQs85TNQ-/",
  },
  {
    id: 3,
    cover: "../images/story3.jpg",
    link: "https://www.instagram.com/p/DMI5Gi2xPB1/",
  },
  {
    id: 4,
    cover: "../images/story2.jpg",
    link: "https://www.instagram.com/reel/DKPsxXFvfvS/",
  },
  {
    id: 5,
    cover: "../images/story3.jpg",
    link: "https://www.instagram.com/p/DMI5Gi2xPB1/",
  },
  {
    id: 6,
    cover: "../images/story2.jpg",
    link: "https://www.instagram.com/p/DMQeszxRaJs/",
  },
  {
    id: 7,
    cover: "../images/story3.jpg",
    link: "https://www.instagram.com/p/DMI5Gi2xPB1/",
  },
]

const Ppost = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <>
      <section className="popularPost">
        <Heading title="Short Videos" />
        <div className="slider-container">
          <Slider {...settings}>
            {pokerStories.map((story) => (
              <a
                key={story.id}
                href={story.link}
                target="_blank"
                rel="noopener noreferrer"
                className="story-thumbnail"
              >
                <img src={story.cover} alt={`Story ${story.id}`} />
              </a>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default Ppost
