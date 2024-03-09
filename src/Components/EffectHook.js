import React, {useState, useEffect} from 'react'

function EffectHook() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}
export default EffectHook
