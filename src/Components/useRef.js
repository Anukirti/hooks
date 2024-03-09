import React, {useEffect, useRef} from 'react'

function UseRef() {

    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      Ref Input: <input ref={inputRef} type='text'/>
    </div>
  )
}

export default UseRef
