// каждый html элемент имеет ref, можно обращаться к html элементам через useRef, это единственный верный способ взаимодействия с html документом, нельзя использовать document и тд, только если не к body
import React, { useState, useRef, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const inputRef = useRef()

  const focus = () => {
    inputRef.current.focus() // сразу установит фокус на input при нажатии на кнопку
  }

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App
