import React, { Suspense, lazy, useCallback } from 'react'
import Loading from '../../common/Loading'

const Header = lazy(() => import('../../common/Header'))
const Content = lazy(() => import('./Content'))
const Entries = lazy(() => import('./Entries'))

function Home(): JSX.Element {

  const goBack = useCallback(() => {
    window.history.back()
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      <Header title='火车票' backTo={goBack} />
      <Content />
      <Entries />
    </Suspense>
  )
}

export default Home
