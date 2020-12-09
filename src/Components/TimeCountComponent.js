import React, { useState, useEffect } from 'react'

const TimeCountComponent = () => {
  const [showTime, setShowTime] = useState('')
  const today = new Date()
  const deadline = new Date()
  deadline.setDate(today.getDate()+1) // 以今日時間加上一天來當作deadline

  // 為了return出現在時間要用到的日時分秒
  const getTimeHandler = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor( (total / 1000) % 60 )
    const minutes = Math.floor( (total / 1000 / 60) % 60 )
    const hours = Math.floor( (total / (1000 * 60 * 60)) % 24 )
    const days = Math.floor( total / (1000 * 60 * 60 * 24) )
    return { total, days, hours, minutes, seconds }
  }

  useEffect(() => {
    // 初始化時間
    const initializeClock = (endtime) => {
      const timeinterval = setInterval(() => {
        const t = getTimeHandler(endtime)
        setShowTime(`倒數時間：${t.days}天${t.hours}時${t.minutes}分${t.seconds}秒`)
        if (t.total <= 0) {
          clearInterval(timeinterval)
        }
      },1000)
    }

    initializeClock(deadline)
  }, [])


  return (
    <div id='timeCount'>
      {showTime}
    </div>
  )
}

export default TimeCountComponent
