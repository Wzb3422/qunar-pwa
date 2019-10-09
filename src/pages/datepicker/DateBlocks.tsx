import React from 'react'

type dataItem = {
  dateNum: number
  isPreOrder: boolean
  dayInWeek: number
}

interface DateRowProps {
  dateArr: Array<dataItem>
}

function DateRow({dateArr}: DateRowProps) {
  return (
    <div className='date-row'>
      {
        dateArr.map(item => {
          return (
            <div className='date-item'>
              <div className='date-num'>{item.dateNum}</div>
                <div className='date-pre'>{item.isPreOrder && '预约'}</div>
            </div>
          )
        })
      }
    </div>
  )
}

function DateBlocks(): JSX.Element {
  return (
    <div className='date-blocks'>
      <div className='date-block-top'>休</div>
      <div className='date-block-num'>休</div>
      <div className='date-block-bottom'>休</div>
    </div>
  )
}

export default DateBlocks
