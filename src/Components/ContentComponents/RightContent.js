import React from 'react'

const RightContent = () => {

  return (
    <>
      <button title='回到頂部' className="top-jumper" onClick={() => window.scrollTo(0, 0)}>
        <span className="text">Top</span>
      </button>
    </>
  )
}

export default RightContent
