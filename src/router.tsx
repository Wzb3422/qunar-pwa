import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./pages/home/Home'))
const DatePicker = lazy(() => import('./pages/DatePicker/DatePicker'))

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={Home} />
          <Route path="/DatePicker" component={DatePicker} />
        </Suspense>
      </Switch>
    </Router>
  )
}

export default AppRouter
