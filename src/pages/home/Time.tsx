import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Time() {

  const [chosenDate, setChosenDate] = useState({})

  useEffect(() => {
    const params = new URLSearchParams(window.location.search.split('?')[1])
    console.log(params)
  }, [])


  return (
    <div className='content-time'>
      <Link to='/DatePicker'>
        <div className='time-button'>
          <div className='time-date'>10月6日</div>
          <div className='time-week'>周日（今天）</div>
        </div>
      </Link>
    </div>
  )
}

export default Time
