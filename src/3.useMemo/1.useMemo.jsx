// useMemo - (ИСПОЛЬЗУЕТСЯ КОГДА ИДЕТ КАКИЕ БОЛЬШИЕ ВЫЧИСЛЕНИЯ, и ИДЕЯ ССЫЛОЧНОГО РАВЕНСТВА(когда хотим убедиться что ссылка на объект или массив такая же как при рендеринге) - кеширует значение, которое не менялось(число в примере будет долго грузиться, затем кешироваться в мемо, при этом тема будет вызывать моментально, а без юз мемо будет так же вызываться с задержкой, как и число) НО! нельзя все обворачивать в мемо, так как это съедает много памяти, и в итоге падает производительность
import React, { useState, useMemo, useEffect } from 'react'

const App = () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]) // только когда number меняется, нам повторно надо будет запустить функцию slowFunction

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark]) // каждый раз ссылается на разную область памяти, поэтому даже когда мы меняем счетчик, происходит рендер нового themeStyles, поэтому надо захешировать themeStyles в useMemo, и только когда идет изменение темы, то мы перерисовываем themeStyles

  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num) {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}

export default App
