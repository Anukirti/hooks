import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currectState, action) => {
    switch(action){
        case 'increment':
            return currectState + 1
        case 'decrement':
            return currectState - 1
        case 'reset':
            return initialState
        case 'default':
            return currectState
    }
}

function StateAndAction() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count {count}</div>
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
      <button onClick={()=> dispatch('reset')}>Reset</button>
    </div>
  )
}

export default StateAndAction
