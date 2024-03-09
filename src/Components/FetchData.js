import React, {useState, useEffect} from 'react'

function FetchData() {
    const [count, setCount] = useState(0)
    const tick = () =>{
        // setCount(count + 1)
        // we can either use [] in useEffect or 
        // prevCount so that it will be called for all value changes.
        setCount(prevCount => prevCount + 1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return ( ) =>{
            clearInterval(interval)
        }
    }, 
    // [count]
    []
    )
  return (
    <div>
      {count}
    </div>
  )
}

export default FetchData
