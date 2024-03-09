import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export const CountContext = React.createContext()
const initialState = 0
const reducer = (currectState, action) => {
    console.log("in reducer")
    console.log(initialState)
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

function ReducerWithContext() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
        <div>
        <div>Count {count}</div>
        <ComponentA/>
        <ComponentB/>
        </div>
        
       </CountContext.Provider>
    </div>
  )
}

export default ReducerWithContext
