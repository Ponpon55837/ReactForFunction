import React from 'react'

const SearchComponent = ({ searchTerm, inputChangeHandler, setSearchTerm }) => {

  return (
    <div id='navbar'>
      <input
        type="text"
        value={searchTerm}
        id="search-input"
        size='30'
        placeholder="Search..."
        onChange={inputChangeHandler} />
      <button className='inputButton' onClick={() => setSearchTerm('')}>clear</button>
    </div>
  )
}

export default SearchComponent
