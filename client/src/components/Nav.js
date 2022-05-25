import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from './Login'
import { useState, useEffect } from 'react';


export const Nav = () => {

    const [user, setUser] = useState(undefined);

    const loadUser = () => {
        fetch("/api/me")
            .then((response) => {
                if(response.status === 200){
                    return response.json()
                } else {
                    return undefined;
                }
            })
            .then(user => {
                setUser(user);
            })
    };

    useEffect(() => {
        loadUser();
    }, []);

  return (
    <div className="navigation">
        <div className="logo">
            <a href='/'><img src="wander-logo.png" alt="wander logo" style={{height:"70px"}}/></a>
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
                {user &&
                <li className="hiddenList">
                    <Link to='/my-list'>My List</Link>
                </li>
                }
                <li>
                    <Login />
                </li>
            </ul>
        </nav>
    </div>
  )
}
