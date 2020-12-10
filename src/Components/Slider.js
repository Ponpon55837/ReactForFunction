import React, { useState, useEffect } from 'react'
import defaultSlides from './defaultSlides'
import '../style.css'

const Slider = () => {
  const [current, setCurrent] = useState(0)
  console.log(current)

  const minusOne = () => {
    setCurrent(current - 1 >= 0 ? current - 1 : current )
  }
  const addOne = () => {
    setCurrent(current + 1 <= 9 ? current + 1 : 0 )
  }

  useEffect(() => {
    setTimeout(addOne, 5000)
  })
  // const { length } = defaultSlides
  //
  // const goToNext = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1)
  // }
  //
  // useEffect(() => {
  //   setTimeout(goToNext, 5000)
  // })
  //
  // if (!Array.isArray(defaultSlides) || length <= 0) {
  //   return null
  // }

  return (
    <section className="slider">
      {
        <div>
          <div className="slide active">
            <h1>{defaultSlides[current].title}</h1>
            <h2>{defaultSlides[current].subtitle}</h2>
          </div>
          <div className="slideimg">
            <img src={defaultSlides[current].image} alt={defaultSlides[current].image} />
          </div>
        </div>

      }
      <button className='sliderMinus' onClick={() => minusOne()}>&laquo;</button>
      <button className='sliderPlus' onClick={() => addOne()}>&raquo;</button>
      <div className='image11'>
        <button onClick={() => setCurrent(0)}>1</button>
        <button onClick={() => setCurrent(1)}>2</button>
        <button onClick={() => setCurrent(2)}>3</button>
        <button onClick={() => setCurrent(3)}>4</button>
        <button onClick={() => setCurrent(4)}>5</button>
        <button onClick={() => setCurrent(5)}>6</button>
        <button onClick={() => setCurrent(6)}>7</button>
        <button onClick={() => setCurrent(7)}>8</button>
        <button onClick={() => setCurrent(8)}>9</button>
        <button onClick={() => setCurrent(9)}>10</button>
      </div>
    </section>
  )
}

export default Slider


// {defaultSlides.map((slide, index) => (
//   <div className={index === current ? "slide active" : "slide"} key={slide.title}>
//     <div>
//       <h1>{slide.title}</h1>
//       <h2>{slide.subtitle}</h2>
//     </div>
//     {index === current }
//     <img className="image" src={slide.image} alt={slide.image} />
//   </div>
// ))}
//
