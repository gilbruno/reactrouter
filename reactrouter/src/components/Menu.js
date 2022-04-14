import React from 'react'
import {Link, NavLink} from 'react-router-dom';

function Menu() {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Docs</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/tutorial">Tutorial</Link>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/community">Community</NavLink>
            </li>
            
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Menu