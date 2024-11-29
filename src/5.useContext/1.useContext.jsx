import React, { useState } from 'react'
import FunctionContextComponent from './component/FunctionContextComponent'
import { ThemeProvider } from './component/ThemeContext'

export const ThemeContext = React.createContext()

function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  )
}

export default App
