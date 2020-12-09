import React from 'react'

const LeftContent = ({ setSearchTerm }) => {

  return (
    <div id='leftcontent'>
      <ul>
        <li onClick={() => setSearchTerm('新鮮')}>新鮮的</li>
        <li onClick={() => setSearchTerm('多汁')}>多汁的</li>
        <li onClick={() => setSearchTerm('軟硬適中')}>軟硬適中的</li>
        <li onClick={() => setSearchTerm('過熟')}>過熟的</li>
      </ul>
    </div>
  )
}

export default LeftContent
