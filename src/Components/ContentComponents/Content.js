import React, { useState } from 'react'
import LeftContent from './LeftContent'
import CentralContent from './CentralContent'
import RightContent from './RightContent'
import Modal from './Modal'

const Content = ({ result, dataAPI, setSearchTerm }) => {
  const [selectdState, setSelectedState] = useState(null)
  return (
    <>
      <LeftContent setSearchTerm={setSearchTerm} />
      <CentralContent result={result} setSelectedState={setSelectedState} />
      <RightContent />
      {selectdState && <Modal dataAPI={dataAPI} selectdState={selectdState} setSelectedState={setSelectedState} />}
    </>
  )
}

export default Content
