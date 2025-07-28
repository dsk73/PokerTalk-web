import React from "react"
import "./hero.css"

const Card = ({ item }) => {
  return (
    <div className='box'>
      <div className='image-container'>
        <img src={item.cover} alt={item.title} />
        <div className='category'>{item.category}</div>
      </div>
      <div className='text'>
        <h1>{item.title}</h1>
        <div className='author'>
          <span><i className="fa fa-user"></i> {item.writer}</span>
          <span><i className="fa fa-calendar"></i> {item.time}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
