import React, {useContext} from 'react'
import { UserContext, ColorContext } from './MyContext'

const ContentData = () => {

  const user = useContext(UserContext)
  const color = useContext(ColorContext)


  return (
        <div className="container" style={{color : color}}>
            <ul>
                <li>Name : {user.name}</li>
                <li>Age : {user.age}</li>
            </ul>
        </div>
    )
}

export default ContentData