import React,{useState, useEffect} from 'react'
import useDocTitleHook from './useDocTitleHook'
function DocTitleOne() {
    const [count, setCount] = useState(0)

    useDocTitleHook(count) //custom hook
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne
