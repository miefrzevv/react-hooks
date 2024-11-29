// useState работает немного иначе с объектами, очень важно помнить, что при работе с объектами, useState не объединяет сам прошлый и новый объект, поэтому надо возвращаться старый объект и объединять его с новым объектом.
import React, { useState } from 'react'

function App() {
  const [state, setState] = useState({ count: 4, theme: 'blue' })
  const count = state.count
  const theme = state.theme

  const incrementCount = () => {
    setState((prevState) => {
      // return {count: prevState.count + 1} // в итоге, вместо результата 5blue, мы получаем 5, потому что в setCount передается функция, которая принимает текущее состояние и возвращает новое состояние (это относится только к объектам)

      return { ...prevState, count: prevState.count + 1 } // теперь count увеличивается на 1, и результат будет 5blue, 
    })
  }

  const decrementCount = () => {
    // setCount((prevCount) => prevCount - 1)
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
