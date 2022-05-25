import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;    
    case 'reset':
        return initialState;      
    default : 
      return state;    
  }

}

function Count() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="container">
      <h1>
      {count}
      </h1>
      
      <button className='btn btn-success m-3' onClick={() => dispatch('increment')}>+</button>
      <button className='btn btn-danger m-3' onClick={() => dispatch('decrement')}>-</button>
      <button className='btn btn-primary m-3' onClick={() => dispatch('reset')}>Reset</button>
      
    </div>  
      
  )
}

export default Count