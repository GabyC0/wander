import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <div className="navigation">
        <div className="logo">
            <img src="wander-logo.png" alt="wander logo" style={{height:"70px"}}/>
        </div>
        <nav className="item">
            <ul className="nav-ul">
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/park-list'>Park List</Link>
                </li>
                <li>
                    <Link to='/my-list'>My List</Link>
                </li>
                <li>
                    <Link to='/log-in'>Log In</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
