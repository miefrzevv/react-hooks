import React, { useState } from 'react'

function countInitial() {
  // здесь может быть любая логика инициализации count, например, из localStorage, API, или другими источниками
  return parseInt(localStorage.getItem('count')) || 0
}

function App() {
  // const [count, setCount] = useState(0) // значение юз стейта вызывается каждый раз, когда мы запускаем функцию Апп (при каждом рендере), что неправильно, поэтому нужно использовать функцию, которая будет рендерится, только при первом запуске приложения

  const [count, setCount] = useState(() => countInitial()) // теперь все работает правильно

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1) // так правильно, потому что если просто писать count + 1, то React не знает, что count изменилась и может не перерендерить компонент, что может привести к некорректному поведению приложения. Если мы продублируем строчку, и два раза напишим count + 1, то будет так, 0 + 1, 0 + 1, и в итоге вместо 2, получим 1
  }

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App
