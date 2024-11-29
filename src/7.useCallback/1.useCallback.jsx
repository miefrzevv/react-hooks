// useMemo кеширует результат функции, useCallback кеширует саму функцию, что позволяет обойтись без ререндеров компонента, то есть пока не изменится зависимость, функция не будет рендериться заново. Единственный наверное варик использования, если функция создается очень медленно, и чтобы при рендеринге компонента, не замедляться, можно обернуть ее в useCallback. Например, если компонент принимает функцию как пропс, и этот компонрент мемоизирован с помощью мемо, то каждый раз, родительский компонент рендерится, создается новая версия функции -> дочерний компонент рендерится снова, даже если другие пропсы не изменились

import React, { useState, useCallback } from 'react'
import List from './List'

function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  )
}

export default App
