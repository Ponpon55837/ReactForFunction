import React from 'react'

const Modal = ({ selectdState, setSelectedState }) => {
  console.log(selectdState)
  return (
    <div className='backdrop' onClick={() => setSelectedState(null)}>
      <div className='dropcontent'>
        <h3>{selectdState[1]}</h3>
        <h4>{selectdState[3]}</h4>
        <img src={`./images/${selectdState[2]}`} />
      </div>
    </div>
  )
}

export default Modal
