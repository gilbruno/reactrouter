import React, {useState} from 'react'
import CleanUseEffect from './CleanUseEffect'

function CleanUseEffectContainer() {

  const [show, setShow] = useState(true)   

  const btnDisplay = show ? 'Cacher' : 'Afficher'

  const handleOnClick = () => {
    setShow(!show)
  }

  return (
    <div className="text-center">
        <button className='btn btn-primary m-3' onClick={handleOnClick}>{btnDisplay}</button>
        {
            show && <CleanUseEffect/>    
        }
        
    </div>
  )
}



export default CleanUseEffectContainer