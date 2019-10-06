import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./pages/home/Home'))

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={Home} />
        </Suspense>
      </Switch>
    </Router>
  )
}

export default AppRouter
