import React from 'react'
import { Link } from 'react-router-dom'

function Time() {
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
