import React, { useEffect } from 'react'

function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value)
  }, [value])

  return <div>useUpdateLogger</div>
}

export default useUpdateLogger
