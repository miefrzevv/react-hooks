// useRef работает так же как useState(почти), то есть сохраняет предыдущее значение из прошлого рендеринга, но не вызывает ре-рендеринг. useRef это объект, который хранит в себе единственное значение это current
/*
1. useState() causes re-render.
2. useRef() DOESN'T cause re-render.
3. useEffect() runs AFTER render. 
*/
import React, { useState, useRef, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)

  useEffect(() => {
    console.log(`Component rendered ${renderCount.current} times`)
    renderCount.current = renderCount.current + 1
  })

  return (
    console.log('Rendering App component...'),
    (
      <>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>I rendered {renderCount.current} times</div>
      </>
    )
  )
}

export default App
