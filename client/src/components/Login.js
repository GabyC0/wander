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
                            <a href="https://dev-9jvzfkq7.us.auth0.com">Login</a>
                        </button>
                    </li>
                    ) : (
                    <li>Hello, {user.given_name} 
                        <button className="login">
                            <a href="https://dev-9jvzfkq7.us.auth0.com">Logout</a>
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
