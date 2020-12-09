import React, { useState, useEffect } from 'react'
import defaultSlides from './defaultSlides'
import '../style.css'

const Slider = () => {
  const [current, setCurrent] = useState(0)
  const { length } = defaultSlides

  const goToNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  console.log(current)
  useEffect(() => {
    setTimeout(goToNext, 5000)
  })

  if (!Array.isArray(defaultSlides) || length <= 0) {
    return null
  }

  console.log(defaultSlides[current])

  return (
    <section className="slider">
      {defaultSlides.map((slide, index) => (
        <div className={index === current ? "slide active" : "slide"} key={slide.title}>
          <div>
            <h1>{slide.title}</h1>
            <h2>{slide.subtitle}</h2>
          </div>
          {index === current }
          <img className="image" src={slide.image} alt={slide.image} />
        </div>
      ))}
      <button className='sliderMinus' onClick={() => setCurrent(current - 1)}>&laquo;</button>
      <button className='sliderPlus' onClick={() => goToNext()}>&raquo;</button>
    </section>
  )
}

export default Slider
