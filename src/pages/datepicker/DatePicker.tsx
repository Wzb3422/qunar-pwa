import React, { lazy, Suspense } from 'react'
import Loading from '../../common/Loading'

const Header = lazy(() => import('../../common/Header'))
const Calendar = lazy(() => import('./Calendar'))

function DatePicker() {
  return (
    <Suspense fallback={Loading}>
        <Header title='火车票'/>
        <Calendar />
        DatePicker
    </Suspense>
  )
}

export default DatePicker
