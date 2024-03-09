import React, {useContext} from 'react'
// import CountContext from './ReducerWithContext'
import { CountContext } from '../../App'

function ComponentA() {
    const counterContext = useContext(CountContext)
  return (
    <div>
       <span> Component A {counterContext.countState}</span>
       
       <button onClick={()=> counterContext.countDispatch('increment')}>
        Increment</button>
      
      <button 
      onClick={()=> counterContext.countDispatch('decrement')}>
        Decrement
        </button>
      <button 
      onClick={()=> counterContext.countDispatch('reset')}
      >Reset</button>
    </div>
  )
}

export default ComponentA
