import React, { Component } from 'react'
import ProfileData from './ProfileData'
import { UserContext, ColorContext } from './MyContext'

class Profile extends Component {

  state = {
      user: {
          name: 'Lisa',
          age: 8
      }
  }  

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
          <ColorContext.Provider value={'red'}>
            <ProfileData/>
          </ColorContext.Provider>
      </UserContext.Provider>      
      
    )
  }
}

export default Profile