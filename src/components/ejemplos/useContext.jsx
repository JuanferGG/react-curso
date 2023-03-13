import React, { useState } from 'react';
import Hijo from './hijo';

export const userContext = React.createContext();

const UseContext = () => {
    
    const [user, setUser] = useState(null);

    const cambiaLogin = () => {
        if (user){
            setUser(null)
        } else {
            setUser({
                name: 'Carlos01',
                email: 'carlos2325@gmail.com'
            })
        }
    }
    
    return (
        <userContext.Provider value={user}>
            <button onClick={cambiaLogin}>Cambio Login</button>
            <div>
            <Hijo />
            </div>
        </userContext.Provider>
    );
}

export default UseContext;
