import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'

function Routes() {
  return (
    <Switch>
      <Route path={'/'} component={Home}></Route>
    </Switch>
  )
}

export default Routes
