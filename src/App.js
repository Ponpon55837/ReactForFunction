import React, { useState } from 'react'
import './App.css'
import SearchComponent from './Components/SearchComponent'
// import ImageComponent from './Components/ImageComponent'
import Slider from './Components/Slider'
import TimeCountComponent from './Components/TimeCountComponent'
import Content from './Components/ContentComponents/Content'
import data from './Json/data.json'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  // 先抓到json內容，以function方式使用
  const dataAPI = () => {
    return data
  }
  // 抓input輸入的內容，將抓到的內容丟到searchTerm這個變數去給result進行比對
  const inputChangeHandler = (e) => {
    setSearchTerm(e.target.value)
  }
  // 判斷result是否等於searchTerm，是的話就把searchTerm當作includes搜尋用的判斷值
  let result = !searchTerm ?
    dataAPI() :
    dataAPI().filter(content => content.title.includes(searchTerm) || content.content.includes(searchTerm))

  return (
    <>
      <SearchComponent searchTerm={searchTerm} inputChangeHandler={inputChangeHandler} setSearchTerm={setSearchTerm} />
      <Slider />
      <TimeCountComponent />
      <Content result={result} dataAPI={dataAPI} setSearchTerm={setSearchTerm} />
    </>
  )
}

export default App
