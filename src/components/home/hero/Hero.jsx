import React, { useState } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

const Hero = () => {
  const [items, setItems] = useState(hero)

  return (
    <section className='hero'>
      <div className='container'>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Hero
