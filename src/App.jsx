import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Notes from './components/Notes'
import Create from './components/Create'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Notes />} />
        <Route exact path='create' element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App
