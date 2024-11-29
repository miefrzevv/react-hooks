// переменная name обновляется только при следующем рендеринге, то есть показывает текущее значение только после ре-рендертинга. То есть если я буду писать Marat,  я сначала напишу M покажется в рендеринге, прошлое значение будет пустота, дальше укажу через палочку, M|0, Ma|M, Mar|Ma и тд
import React, { useState, useRef, useEffect } from 'react'

function App() {
  const [name, setName] = useState('')
  const prevName = useRef('') // сохраняет предыдущее значение переменной name, которое сейчас уже не отобжается в текущем рендеринге

  useEffect(() => {
    prevName.current = name // присваиваем текущее значение name в prevName.current
  }, [name])

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </>
  )
}

export default App
