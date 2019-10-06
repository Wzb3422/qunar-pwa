import React from 'react'
import './Calendar.css'

function Calendar(): JSX.Element {
  return (
    <div className='calendar-wrapper'>
      <div className='week-bar'>
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
    </div>
  )
}

export default Calendar
