import React from 'react'
import { useState, useEffect } from 'react';

export const Login = () => {
    
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
    <div>
        <div>
                {!user ? (
                    <li>
                        <button className="login">
                            <a href="http://localhost:3000/login">Login</a>
                        </button>
                    </li>
                    ) : (
                    <li>Hello, {user.given_name} 
                        <button className="login">
                            <a href="http://localhost:3000/logout">Logout</a>
                        </button>
                    </li>
                )}
        </div>
        <div>
            {!user}
        </div>
    </div>
  )
}
