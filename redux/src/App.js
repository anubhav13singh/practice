import React from 'react'
import { useState } from 'react'
import { increment, decrement, incrementByValue } from './features/counterSlice'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [input, setInput] = useState('');
  const count = useSelector((state) => state.counter.value);
  // whats there in global store or store
  const dispatch = useDispatch()
  // to use the value from slice { increment, decrement, incrementByValue} use dispatch is used


  return (
    <div>
      <input type={"number"} value={input}
       onChange={(e) => setInput(e.target.value)}></input>
    
    <button onClick={() => dispatch( incrementByValue(+input))}>
        incrementByValue
    </button>
    <button onClick={() => dispatch( increment())}>
        incerement by 1
    </button>
    </div>
  )
}

export default App