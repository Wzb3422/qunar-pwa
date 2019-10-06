import React, {Suspense, lazy} from 'react'
import Loading from './common/Loading'

const AppRouter = lazy(() => import('./router'))

const App: () => JSX.Element = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AppRouter />
    </Suspense>
  )
}

export default App
