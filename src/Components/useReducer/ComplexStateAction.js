import React, { useReducer } from 'react'

const initialState = {
    firstCounter:0,
    secondCounter: 10
}
const reducer = (currectState, action) => {
    switch(action.type){
        case 'increment':
            return {...currectState, firstCounter:currectState.firstCounter + action.value}
        case 'decrement':
            return {...currectState, firstCounter:currectState.firstCounter - action.value}
            case 'increment2':
                return {...currectState, secondCounter:currectState.secondCounter + action.value}
            case 'decrement2':
                return {...currectState, secondCounter:currectState.secondCounter - action.value}
            case 'reset':
            return initialState
        case 'default':
            return currectState
    }
}

function ComplexStateAction() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>First Counter {count.firstCounter}</div>
        <div>Second Counter {count.secondCounter}</div>
        <button 
        onClick={()=> dispatch({type: 'increment', value:1})}>
            Increment First Counter
        </button>
        <button 
        onClick={()=> dispatch({type:'decrement', value:1})}>
            Decrement First Counter
        </button>
        <button 
        onClick={()=> dispatch({type:'reset'})}>
            Reset
        </button> <br/>
        <div>
        <button 
        onClick={()=> dispatch({type: 'increment', value:5})}>
        Increment By Five
        </button>
        <button 
        onClick={()=> dispatch({type:'decrement', value:5})}>
            Decrement By Five
        </button>
        </div>
        <div>
        <button 
        onClick={()=> dispatch({type: 'increment2', value:1})}>
            Increment Counter 2
        </button>
        <button 
        onClick={()=> dispatch({type:'decrement2', value:1})}>
            Decrement Counter 2
        </button>
        </div>
    </div>
  )
}

export default ComplexStateAction
