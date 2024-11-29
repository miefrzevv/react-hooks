// useReducer как и useState позволяет управлять состоянием компонента, но useReducer нужен для управлением более сложного состояния, первый параметр функция, второй объект как значение. Деструктуризация, 1 - это объект с нашим состоянием, 2 это диспатч - функция для обновления состояния
import React, { useState, useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT })
  }
  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT })
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
