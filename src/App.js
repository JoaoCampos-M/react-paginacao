import React from 'react'
import { Router } from 'react-router-dom'

import History from './services/history'
import Routes from './routes'
function App() {
  return (
    <Router history={History}>
      <Routes></Routes>
    </Router>
  )
}

export default App
