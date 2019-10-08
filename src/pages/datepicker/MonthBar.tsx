import React from 'react'

interface MonthBarProps {
  year: number | string
  month: number | string
}

function MonthBar({ year, month }: MonthBarProps): JSX.Element {
  return (
    <div className='month-bar'>{year}年{month}月</div>
  )
}

export default MonthBar
