import React, { lazy, Suspense } from 'react'
import Loading from '../../common/Loading'

function DatePicker() {
  return (
    <Suspense fallback={Loading}>
      <div className='datepicker-wrapper'>
        DatePicker
      </div>
    </Suspense>
  )
}

export default DatePicker
