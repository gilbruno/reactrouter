import React from 'react'
import {Link, NavLink} from 'react-router-dom';

function Menu() {

  const handleConnect = () => {
        console.log('connect')
  }
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Docs</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/tutorial">Tutorial</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/community">Community</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/useState">Hook State</NavLink>
            </li>
            <li className="navbar-right connect">
                <button className="btn btn-primary connect" onClick={handleConnect}>Connect</button>
            </li>
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Menu