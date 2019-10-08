import React from 'react'
import MonthBar from './MonthBar'
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

      <MonthBar year={2019} month={9} />
      div
    </div>
  )
}

export default Calendar
