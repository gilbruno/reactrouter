import React, {useState} from 'react'

const HookState = ()=> {

    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(prevCounter => prevCounter + 1);
    }

    return (
    <div>
        <h1>HookState</h1>
        <hr/>
        <div>counter : {counter}</div>
        <button onClick={incrementCounter}>Increment</button>    
    </div>
    
  )
}

export default HookState