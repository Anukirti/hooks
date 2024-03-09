import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    // here count is state variable 
    // and setCount is a set method and 0 is default value.
  return (
    <div>
      <button onClick={() => setCount(count + 1)}> Count {count}</button>
    </div>
  )
}

export default HookCounter
