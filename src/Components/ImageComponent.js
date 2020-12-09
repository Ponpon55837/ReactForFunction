import React, { useState, useEffect } from 'react'

const ImageComponent = () => {

  const [src, setSrc] = useState('https://cdn1-digiphoto.techbang.com/system/images/124901/original/7d4012268131717149af4e7369d07187.jpg?1548392388')
  const [alt, setAlt] = useState('圖片來源3')
  // 設定指向的初始值
  const [count, setCount] = useState(0)
  // 圖片來源的array
  const pictureSRCArray = [
    'https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg',
    'https://s.yimg.com/uu/api/res/1.2/DdytqdFTgtQuxVrHLDdmjQ--~B/aD03MTY7dz0xMDgwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2019-11/7b5b5330-112b-11ea-a77f-7c019be7ecae',
    'https://cdn1-digiphoto.techbang.com/system/images/124901/original/7d4012268131717149af4e7369d07187.jpg?1548392388',
    'https://i.ytimg.com/vi/x-S8vKV59Ik/maxresdefault.jpg',
    'https://www.teepr.com/wp-content/uploads/2016/04/風景照修圖-1280x720.jpg'
  ]
  // 圖片alt值的array
  const pictureAltArray = ['圖片來源1', '圖片來源2', '圖片來源3', '圖片來源4', '圖片來源5']

  useEffect(() => {
    const timeCountChange = setTimeout(() => {
      setSrc(pictureSRCArray[count])
      setAlt(pictureAltArray[count])
      setCount((count + 1) % pictureAltArray.length)
      // let resetCount = (count + 1)
      // if(resetCount >= 0 && resetCount <= 4){
      //   setCount(resetCount)
      // }
      // else if (resetCount > 4) {
      //   resetCount = 0
      //   setCount(resetCount)
      // }
      return clearInterval(timeCountChange)
    },5000)
  },[count, pictureSRCArray])

  const minusFunc = () => {
    if(count - 1 >= 0) {
      setCount(count - 1)
      setSrc(pictureSRCArray[count])
      setAlt(pictureAltArray[count])
    }
    return false
  }
  const plusFunc = () => {
    if(count + 1 >= 1) {
      setCount(count + 1)
      setSrc(pictureSRCArray[count])
      setAlt(pictureAltArray[count])
    }
    return false
  }

  return (
    <div id='imgComponent'>
      <button id='minusButton' className='imgButton' onClick={minusFunc}>&laquo;</button>
      <button id='plusButton' className='imgButton' onClick={plusFunc}>&raquo;</button>
      <img id='changeIDSRC' src={src} alt={alt} />
    </div>
  )
}

export default ImageComponent
