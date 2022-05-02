import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'

export const Nav = (props) => {
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
                    <Login/>
                    {/* <button className="login" onClick={<Login/>}>Login</button> */}
                </li>
            </ul>
        </nav>
    </div>
  )
}
