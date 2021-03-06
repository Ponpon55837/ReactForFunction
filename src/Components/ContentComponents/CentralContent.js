import React from 'react'

const CentralContent = ({ result, setSelectedState }) => {

  return (
    <div id='centralcontent'>
      {
        result.map(arr => (
          <div className='data' key={arr.id} onClick={() => setSelectedState([arr.id, arr.title, arr.img, arr.content])}>
            <h3>{arr.title}</h3>
            <img id='dataImg' src={`./images/${arr.img}`} alt={arr.img} />
          </div>
        ))
      }
    </div>
  )
}

export default CentralContent
