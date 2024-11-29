import React, { useEffect, useState } from 'react'

const App = () => {
  const [resourseType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then((response) => response.json())
      .then((json) => setItems(json)) // загружаем данные при монтировании компонента App и при изменении resourseType
  }, [resourseType]) // когда меняется тип, происходит рендер компонента App

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourseType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App
