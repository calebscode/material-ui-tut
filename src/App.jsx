import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import { ThemeProvider, createTheme } from '@mui/material'
import { purple } from '@mui/material/colors'

const theme = createTheme({
  palette : {
    primary : {
      main : "#333",
    },
    secondary : purple
  },
  typography : {
    fontFamily : "Quicksand",
    fontWeightLight : "400",
    fontWeightRegular : '500',
    fontWeightMedium : '600',
    fontWeightBold : '700'
  }
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
