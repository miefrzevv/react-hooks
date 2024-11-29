// Обычно при работе с объектом, используют несколько useState для каждого свойства объекта.
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(4)
  const [theme, setTheme] = useState('blue') // теперь у нас изолированная логика, тема переключается отдельно, счетчик отдельно


  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    setTheme('red')
  }

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
    setTheme('blue')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
