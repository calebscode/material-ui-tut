import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'

const theme = createTheme({
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Notes />} />
          <Route exact path='create' element={<Create />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
