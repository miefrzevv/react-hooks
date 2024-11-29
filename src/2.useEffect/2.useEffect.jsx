import React, { useEffect, useState } from 'react'

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log('монтирование компонента App')
    window.addEventListener('resize', handleResize)// при мониторовании компонента App, устанавливается обработчик 

    return () => {
      console.log('очищение компонента App') // при размонтировании компонента App, удаляется обработчик 
      window.removeEventListener('resize', handleResize)// по факту действует как очистка, при рендере, сначала вызывается удаление прошлого обработчика и только потом добавляется новый
    }
  }, []) 

  return (
    <div>{windowWidth}</div>
  )
}

export default App
