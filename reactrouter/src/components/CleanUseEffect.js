import React, {useState, useEffect} from 'react'


function CleanUseEffect() {

  const [keyCode, setKeyCode] = useState([''])  

  const handleKeyCode = event => {
    setKeyCode(event.code)
    console.log('AddEventListenere activé')
  }

  //RAPPEL : useEffec with 2nd argument equals to empty array
  // is like implements some rules in "componentDiMount" of a "Class" component
  useEffect(() => {
    document.addEventListener('keyup', handleKeyCode)

    //Returns a arrow function is equivalent to do it in a "compnentWillUnmount" 
    // of a "class" component
    return () => {
        console.log('AddEventListenere retiré')
        document.removeEventListener('keyup', handleKeyCode)
    }
  }, [])

  return (
    <div className="card">
        <div className="card-body">
            <h1 className="text-center">
                {keyCode}            
            </h1>
        
        </div> 

    </div>
  )
}

export default CleanUseEffect

