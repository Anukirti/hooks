import './App.css';
import React, {useReducer} from 'react'

import ClassCounter from './Components/ClassCounter';
import DataFetchingAPI from './Components/DataFetchingAPI';
import EffectHook from './Components/EffectHook';
import FetchData from './Components/FetchData';
import HookArray from './Components/HookArray';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookObject from './Components/HookObject';
import ComponentC from './Components/UseContext/ComponentC';
import UseEffectHook from './Components/UseEffectHook';
import ComponentE from './Components/UseContext/ComponentE';
import StateAndAction from './Components/useReducer/StateAndAction';
import ComplexStateAction from './Components/useReducer/ComplexStateAction';
import MultipleReducer from './Components/useReducer/MultipleReducer';
import ReducerWithContext from './Components/useReducer/ReducerWithContext';
import ComponentA from './Components/useReducer/ComponentA';
import ComponentB from './Components/useReducer/ComponentB';
import ReduceDataFetch from './Components/useReducer/ReduceDataFetch';
import CallbackParent from './Components/useCallback/CallbackParent';
import UseMemo from './Components/useMemo';
import UseRef from './Components/useRef';
import UseRefTwo from './Components/useRefTwo';
import DocTitleOne from './Components/CustomHooks/DocTitleOne';
import DocTitleTwo from './Components/CustomHooks/DocTitleTwo';
import CounterOne from './Components/CustomHooks/CounterOne';
import UserForm from './Components/CustomHooks/UserForm';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

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
function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      {/* <ClassCounter/> */}
      {/* <HookCounter/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookObject/> */}
      {/* <HookArray/> */}

      {/* <EffectHook/> */}
      {/* <UseEffectHook/> */}

      {/* <FetchData/> */}
      {/* <DataFetchingAPI/> */}

      {/* <UserContext.Provider value={'Annu'}>
        <ChannelContext.Provider value={'Codevolution'}>
        {/* <ComponentC/> */}
        {/* <ComponentE/>
        </ChannelContext.Provider> */}
       
      {/* </UserContext.Provider> */} 

      {/* <StateAndAction/> */}

      {/* <ComplexStateAction/> */}

      {/* <MultipleReducer/> */}

      {/* <ReducerWithContext/> */}

      {/* <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
      <div>Count {count}</div>
        <ComponentA/>
        <ComponentB/>
      </CountContext.Provider> */}

      {/* <ReduceDataFetch/> */}
      {/* <CallbackParent/> */}

      {/* <UseMemo/> */}

      {/* <UseRef/> */}

      {/* <UseRefTwo/> */}

{/* Custom Hook */}
      {/* <DocTitleOne/>
      <DocTitleTwo/> */}
      {/* <CounterOne/> */}
      <UserForm/>
    </div>
  );
}

export default App;
