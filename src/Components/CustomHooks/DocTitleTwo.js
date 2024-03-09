import React,{useState, useEffect} from 'react'
import useDocTitleHook from './useDocTitleHook'

function DocTitleTwo() {
    const [count, setCount] = useState(0)

    useDocTitleHook(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo
