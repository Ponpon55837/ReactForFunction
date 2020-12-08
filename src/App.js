import React from 'react'
import './App.css'
import SearchComponent from './Components/SearchComponent'
import ImageComponent from './Components/ImageComponent'
import TimeCountComponent from './Components/TimeCountComponent'
import Content from './Components/ContentComponents/Content'
import data from './Json/data.json'

const App = () => {

  const dataAPI = () => {
    return data
  }

  return (
    <>
      <SearchComponent dataAPI={dataAPI} />
      <ImageComponent />
      <TimeCountComponent />
      <Content dataAPI={dataAPI} />
    </>
  )
}

export default App
