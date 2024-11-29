// Batching (пакетирование) — это процесс, при котором React группирует несколько обновлений состояния и выполняет только один повторный рендеринг компонента вместо того, чтобы делать это для каждого изменения по отдельности. Это помогает повысить производительность приложения, избегая лишних рендеров.

// Например, представим, что по щелчку мыши у нас одновременно изменяются значение счетчика и цвет кнопки.

// До React 18:
// React умел выполнять пакетирование только для синхронного кода. Если обновления состояния происходили в асинхронном коде, например, внутри setTimeout или Promise, то каждый вызов изменения состояния вызывал отдельный ререндер. Это приводило к лишним рендерам.


import { useState } from 'react'

const BatchingExample = () => {
  const [state, setState] = useState(0)
  const [value, setValue] = useState(0)

  console.log('RENDER')

  const update = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1)
      setState((prev) => prev + 1)
    }, 100)
  }

  return (
    <div>
      <h1>value = {value}</h1>
      <h1>value = {state}</h1>
      <button onClick={update}>UPDATE</button>
    </div>
  )
}

export default BatchingExample
